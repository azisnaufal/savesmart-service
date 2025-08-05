import { api } from "encore.dev/api";
import { supabase } from "../supabase/supabase";

interface NearbyParams{
    long: number;
    lat: number;
    page: number;
    pageSize: number;
}

interface NearbyResponse {
    stores: any;
    total: number;
}

export const get = api(
  { expose: true, method: "GET", path: "/stores/nearby", auth: true },
  async (p: NearbyParams): Promise<NearbyResponse> => {
    // Fetch nearby stores from the database
    const nearby_stores = await supabase.rpc("get_nearby_stores", {
      p_long: p.long,
      p_lat: p.lat,
      p_limit: p.pageSize,
      p_offset: (p.page - 1) * p.pageSize
    });

    const online_stores = await supabase.from("stores")
      .select("*")
      .eq("is_online", true)
      .range((p.page - 1) * p.pageSize, p.page * p.pageSize - 1)
      .order("created_at", { ascending: false });

    if (nearby_stores.error || online_stores.error) {
      throw new Error(`Failed to fetch nearby stores: ${nearby_stores.error?.message || online_stores.error?.message}`);
    }

    const combinedStores: any[] = [];
    const nearbyData = nearby_stores.data || [];
    const onlineData = online_stores.data || [];
    let onlineIdx = 0;

    for (let i = 0; i < nearbyData.length; i++) {
      combinedStores.push(nearbyData[i]);
      if ((i + 1) % 3 === 0 && onlineIdx < onlineData.length) {
        combinedStores.push(onlineData[onlineIdx]);
        onlineIdx++;
      }
    }
    while (onlineIdx < onlineData.length) {
      combinedStores.push(onlineData[onlineIdx]);
      onlineIdx++;
    }

    return {
      stores: combinedStores,
      total: combinedStores.length,
    };
  }
);
