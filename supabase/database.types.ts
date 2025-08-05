export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          query?: string;
          extensions?: Json;
          operationName?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  pgbouncer: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_auth: {
        Args: { p_usename: string };
        Returns: {
          username: string;
          password: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  postgis: {
    Tables: {
      spatial_ref_sys: {
        Row: {
          auth_name: string | null;
          auth_srid: number | null;
          proj4text: string | null;
          srid: number;
          srtext: string | null;
        };
        Insert: {
          auth_name?: string | null;
          auth_srid?: number | null;
          proj4text?: string | null;
          srid: number;
          srtext?: string | null;
        };
        Update: {
          auth_name?: string | null;
          auth_srid?: number | null;
          proj4text?: string | null;
          srid?: number;
          srtext?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      geography_columns: {
        Row: {
          coord_dimension: number | null;
          f_geography_column: unknown | null;
          f_table_catalog: unknown | null;
          f_table_name: unknown | null;
          f_table_schema: unknown | null;
          srid: number | null;
          type: string | null;
        };
        Relationships: [];
      };
      geometry_columns: {
        Row: {
          coord_dimension: number | null;
          f_geometry_column: unknown | null;
          f_table_catalog: string | null;
          f_table_name: unknown | null;
          f_table_schema: unknown | null;
          srid: number | null;
          type: string | null;
        };
        Insert: {
          coord_dimension?: number | null;
          f_geometry_column?: unknown | null;
          f_table_catalog?: string | null;
          f_table_name?: unknown | null;
          f_table_schema?: unknown | null;
          srid?: number | null;
          type?: string | null;
        };
        Update: {
          coord_dimension?: number | null;
          f_geometry_column?: unknown | null;
          f_table_catalog?: string | null;
          f_table_name?: unknown | null;
          f_table_schema?: unknown | null;
          srid?: number | null;
          type?: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      _postgis_deprecate: {
        Args: { newname: string; version: string; oldname: string };
        Returns: undefined;
      };
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string };
        Returns: unknown;
      };
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      _postgis_selectivity: {
        Args: { att_name: string; geom: unknown; mode?: string; tbl: unknown };
        Returns: number;
      };
      _st_3dintersects: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_bestsrid: {
        Args: { "": unknown };
        Returns: number;
      };
      _st_contains: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_coveredby: {
        Args:
          | { geog2: unknown; geog1: unknown }
          | { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_crosses: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_dwithin: {
        Args: {
          geog1: unknown;
          use_spheroid?: boolean;
          tolerance: number;
          geog2: unknown;
        };
        Returns: boolean;
      };
      _st_equals: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_linecrossingdirection: {
        Args: { line2: unknown; line1: unknown };
        Returns: number;
      };
      _st_longestline: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      _st_maxdistance: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_pointoutside: {
        Args: { "": unknown };
        Returns: unknown;
      };
      _st_sortablehash: {
        Args: { geom: unknown };
        Returns: number;
      };
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_voronoi: {
        Args: {
          return_polygons?: boolean;
          tolerance?: number;
          clip?: unknown;
          g1: unknown;
        };
        Returns: unknown;
      };
      _st_within: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      addauth: {
        Args: { "": string };
        Returns: boolean;
      };
      addgeometrycolumn: {
        Args:
          | {
              new_dim: number;
              use_typmod?: boolean;
              schema_name: string;
              table_name: string;
              column_name: string;
              new_srid: number;
              new_type: string;
            }
          | {
              new_srid: number;
              new_dim: number;
              use_typmod?: boolean;
              table_name: string;
              column_name: string;
              new_type: string;
            }
          | {
              new_srid_in: number;
              use_typmod?: boolean;
              new_dim: number;
              new_type: string;
              catalog_name: string;
              schema_name: string;
              table_name: string;
              column_name: string;
            };
        Returns: string;
      };
      box: {
        Args: { "": unknown } | { "": unknown };
        Returns: unknown;
      };
      box2d: {
        Args: { "": unknown } | { "": unknown };
        Returns: unknown;
      };
      box2d_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box2d_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box2df_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box2df_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box3d: {
        Args: { "": unknown } | { "": unknown };
        Returns: unknown;
      };
      box3d_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box3d_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      box3dtobox: {
        Args: { "": unknown };
        Returns: unknown;
      };
      bytea: {
        Args: { "": unknown } | { "": unknown };
        Returns: string;
      };
      disablelongtransactions: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      dropgeometrycolumn: {
        Args:
          | { column_name: string; table_name: string }
          | { column_name: string; table_name: string; schema_name: string }
          | {
              column_name: string;
              table_name: string;
              schema_name: string;
              catalog_name: string;
            };
        Returns: string;
      };
      dropgeometrytable: {
        Args:
          | { catalog_name: string; schema_name: string; table_name: string }
          | { table_name: string }
          | { table_name: string; schema_name: string };
        Returns: string;
      };
      enablelongtransactions: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      equals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geography: {
        Args: { "": string } | { "": unknown };
        Returns: unknown;
      };
      geography_analyze: {
        Args: { "": unknown };
        Returns: boolean;
      };
      geography_gist_compress: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geography_gist_decompress: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geography_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geography_send: {
        Args: { "": unknown };
        Returns: string;
      };
      geography_spgist_compress_nd: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geography_typmod_in: {
        Args: { "": unknown[] };
        Returns: number;
      };
      geography_typmod_out: {
        Args: { "": number };
        Returns: unknown;
      };
      geometry: {
        Args:
          | { "": string }
          | { "": string }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown };
        Returns: unknown;
      };
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_analyze: {
        Args: { "": unknown };
        Returns: boolean;
      };
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_cmp: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_contains_3d: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      geometry_eq: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_gist_compress_2d: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_gist_compress_nd: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_gist_decompress_2d: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_gist_decompress_nd: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_gist_sortsupport_2d: {
        Args: { "": unknown };
        Returns: undefined;
      };
      geometry_gt: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_hash: {
        Args: { "": unknown };
        Returns: number;
      };
      geometry_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_le: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_lt: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_overabove: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overlaps_3d: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_recv: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_send: {
        Args: { "": unknown };
        Returns: string;
      };
      geometry_sortsupport: {
        Args: { "": unknown };
        Returns: undefined;
      };
      geometry_spgist_compress_2d: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_spgist_compress_3d: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_spgist_compress_nd: {
        Args: { "": unknown };
        Returns: unknown;
      };
      geometry_typmod_in: {
        Args: { "": unknown[] };
        Returns: number;
      };
      geometry_typmod_out: {
        Args: { "": number };
        Returns: unknown;
      };
      geometry_within: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      geometrytype: {
        Args: { "": unknown } | { "": unknown };
        Returns: string;
      };
      geomfromewkb: {
        Args: { "": string };
        Returns: unknown;
      };
      geomfromewkt: {
        Args: { "": string };
        Returns: unknown;
      };
      get_proj4_from_srid: {
        Args: { "": number };
        Returns: string;
      };
      gettransactionid: {
        Args: Record<PropertyKey, never>;
        Returns: unknown;
      };
      gidx_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      gidx_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      json: {
        Args: { "": unknown };
        Returns: Json;
      };
      jsonb: {
        Args: { "": unknown };
        Returns: Json;
      };
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      path: {
        Args: { "": unknown };
        Returns: unknown;
      };
      pgis_asflatgeobuf_finalfn: {
        Args: { "": unknown };
        Returns: string;
      };
      pgis_asgeobuf_finalfn: {
        Args: { "": unknown };
        Returns: string;
      };
      pgis_asmvt_finalfn: {
        Args: { "": unknown };
        Returns: string;
      };
      pgis_asmvt_serialfn: {
        Args: { "": unknown };
        Returns: string;
      };
      pgis_geometry_clusterintersecting_finalfn: {
        Args: { "": unknown };
        Returns: unknown[];
      };
      pgis_geometry_clusterwithin_finalfn: {
        Args: { "": unknown };
        Returns: unknown[];
      };
      pgis_geometry_collect_finalfn: {
        Args: { "": unknown };
        Returns: unknown;
      };
      pgis_geometry_makeline_finalfn: {
        Args: { "": unknown };
        Returns: unknown;
      };
      pgis_geometry_polygonize_finalfn: {
        Args: { "": unknown };
        Returns: unknown;
      };
      pgis_geometry_union_parallel_finalfn: {
        Args: { "": unknown };
        Returns: unknown;
      };
      pgis_geometry_union_parallel_serialfn: {
        Args: { "": unknown };
        Returns: string;
      };
      point: {
        Args: { "": unknown };
        Returns: unknown;
      };
      polygon: {
        Args: { "": unknown };
        Returns: unknown;
      };
      populate_geometry_columns: {
        Args:
          | { tbl_oid: unknown; use_typmod?: boolean }
          | { use_typmod?: boolean };
        Returns: string;
      };
      postgis_addbbox: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string };
        Returns: number;
      };
      postgis_constraint_srid: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string };
        Returns: number;
      };
      postgis_constraint_type: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string };
        Returns: string;
      };
      postgis_dropbbox: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_full_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_geos_noop: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_geos_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_getbbox: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_hasbbox: {
        Args: { "": unknown };
        Returns: boolean;
      };
      postgis_index_supportfn: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_lib_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_noop: {
        Args: { "": unknown };
        Returns: unknown;
      };
      postgis_proj_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_svn_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_type_name: {
        Args: {
          use_new_name?: boolean;
          geomname: string;
          coord_dimension: number;
        };
        Returns: string;
      };
      postgis_typmod_dims: {
        Args: { "": number };
        Returns: number;
      };
      postgis_typmod_srid: {
        Args: { "": number };
        Returns: number;
      };
      postgis_typmod_type: {
        Args: { "": number };
        Returns: string;
      };
      postgis_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      spheroid_in: {
        Args: { "": unknown };
        Returns: unknown;
      };
      spheroid_out: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_3dclosestpoint: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_3dintersects: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_3dlength: {
        Args: { "": unknown };
        Returns: number;
      };
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_3dperimeter: {
        Args: { "": unknown };
        Returns: number;
      };
      st_3dshortestline: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_angle: {
        Args:
          | { line1: unknown; line2: unknown }
          | { pt4?: unknown; pt1: unknown; pt2: unknown; pt3: unknown };
        Returns: number;
      };
      st_area: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean };
        Returns: number;
      };
      st_area2d: {
        Args: { "": unknown };
        Returns: number;
      };
      st_asbinary: {
        Args: { "": unknown } | { "": unknown };
        Returns: string;
      };
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number };
        Returns: string;
      };
      st_asewkb: {
        Args: { "": unknown };
        Returns: string;
      };
      st_asewkt: {
        Args: { "": string } | { "": unknown } | { "": unknown };
        Returns: string;
      };
      st_asgeojson: {
        Args:
          | { "": string }
          | { options?: number; geog: unknown; maxdecimaldigits?: number }
          | { options?: number; geom: unknown; maxdecimaldigits?: number }
          | {
              r: Record<string, unknown>;
              maxdecimaldigits?: number;
              geom_column?: string;
              pretty_bool?: boolean;
            };
        Returns: string;
      };
      st_asgml: {
        Args:
          | { "": string }
          | {
              geog: unknown;
              id?: string;
              nprefix?: string;
              options?: number;
              maxdecimaldigits?: number;
            }
          | {
              id?: string;
              version: number;
              geog: unknown;
              maxdecimaldigits?: number;
              options?: number;
              nprefix?: string;
            }
          | {
              maxdecimaldigits?: number;
              options?: number;
              id?: string;
              nprefix?: string;
              version: number;
              geom: unknown;
            }
          | { options?: number; maxdecimaldigits?: number; geom: unknown };
        Returns: string;
      };
      st_ashexewkb: {
        Args: { "": unknown };
        Returns: string;
      };
      st_askml: {
        Args:
          | { "": string }
          | { maxdecimaldigits?: number; geom: unknown; nprefix?: string }
          | { nprefix?: string; maxdecimaldigits?: number; geog: unknown };
        Returns: string;
      };
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string };
        Returns: string;
      };
      st_asmarc21: {
        Args: { geom: unknown; format?: string };
        Returns: string;
      };
      st_asmvtgeom: {
        Args: {
          buffer?: number;
          geom: unknown;
          bounds: unknown;
          extent?: number;
          clip_geom?: boolean;
        };
        Returns: unknown;
      };
      st_assvg: {
        Args:
          | { "": string }
          | { geog: unknown; rel?: number; maxdecimaldigits?: number }
          | { geom: unknown; maxdecimaldigits?: number; rel?: number };
        Returns: string;
      };
      st_astext: {
        Args: { "": string } | { "": unknown } | { "": unknown };
        Returns: string;
      };
      st_astwkb: {
        Args:
          | {
              prec?: number;
              geom: unknown[];
              ids: number[];
              prec_z?: number;
              prec_m?: number;
              with_sizes?: boolean;
              with_boxes?: boolean;
            }
          | {
              with_sizes?: boolean;
              with_boxes?: boolean;
              prec_z?: number;
              prec?: number;
              geom: unknown;
              prec_m?: number;
            };
        Returns: string;
      };
      st_asx3d: {
        Args: { maxdecimaldigits?: number; geom: unknown; options?: number };
        Returns: string;
      };
      st_azimuth: {
        Args:
          | { geog2: unknown; geog1: unknown }
          | { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      st_boundary: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_boundingdiagonal: {
        Args: { geom: unknown; fits?: boolean };
        Returns: unknown;
      };
      st_buffer: {
        Args:
          | { radius: number; geom: unknown; quadsegs: number }
          | { radius: number; options?: string; geom: unknown };
        Returns: unknown;
      };
      st_buildarea: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_centroid: {
        Args: { "": string } | { "": unknown };
        Returns: unknown;
      };
      st_cleangeometry: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown };
        Returns: unknown;
      };
      st_closestpoint: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_clusterintersecting: {
        Args: { "": unknown[] };
        Returns: unknown[];
      };
      st_collect: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_collectionextract: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_collectionhomogenize: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_concavehull: {
        Args: {
          param_geom: unknown;
          param_pctconvex: number;
          param_allow_holes?: boolean;
        };
        Returns: unknown;
      };
      st_contains: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_convexhull: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_coorddim: {
        Args: { geometry: unknown };
        Returns: number;
      };
      st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_curvetoline: {
        Args: { flags?: number; toltype?: number; tol?: number; geom: unknown };
        Returns: unknown;
      };
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance?: number; flags?: number };
        Returns: unknown;
      };
      st_difference: {
        Args: { gridsize?: number; geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_dimension: {
        Args: { "": unknown };
        Returns: number;
      };
      st_disjoint: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_distance: {
        Args:
          | { geom2: unknown; geom1: unknown }
          | { use_spheroid?: boolean; geog1: unknown; geog2: unknown };
        Returns: number;
      };
      st_distancesphere: {
        Args:
          | { geom2: unknown; geom1: unknown }
          | { radius: number; geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_distancespheroid: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      st_dump: {
        Args: { "": unknown };
        Returns: Database["postgis"]["CompositeTypes"]["geometry_dump"][];
      };
      st_dumppoints: {
        Args: { "": unknown };
        Returns: Database["postgis"]["CompositeTypes"]["geometry_dump"][];
      };
      st_dumprings: {
        Args: { "": unknown };
        Returns: Database["postgis"]["CompositeTypes"]["geometry_dump"][];
      };
      st_dumpsegments: {
        Args: { "": unknown };
        Returns: Database["postgis"]["CompositeTypes"]["geometry_dump"][];
      };
      st_dwithin: {
        Args: {
          geog1: unknown;
          geog2: unknown;
          tolerance: number;
          use_spheroid?: boolean;
        };
        Returns: boolean;
      };
      st_endpoint: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_envelope: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_equals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_expand: {
        Args:
          | { dx: number; box: unknown; dy: number }
          | { dx: number; dz?: number; box: unknown; dy: number }
          | { geom: unknown; dx: number; dy: number; dz?: number; dm?: number };
        Returns: unknown;
      };
      st_exteriorring: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_flipcoordinates: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_force2d: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_force3d: {
        Args: { geom: unknown; zvalue?: number };
        Returns: unknown;
      };
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number };
        Returns: unknown;
      };
      st_force3dz: {
        Args: { zvalue?: number; geom: unknown };
        Returns: unknown;
      };
      st_force4d: {
        Args: { zvalue?: number; mvalue?: number; geom: unknown };
        Returns: unknown;
      };
      st_forcecollection: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_forcecurve: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_forcepolygonccw: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_forcepolygoncw: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_forcerhr: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_forcesfs: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_generatepoints: {
        Args:
          | { area: unknown; seed: number; npoints: number }
          | { npoints: number; area: unknown };
        Returns: unknown;
      };
      st_geogfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geogfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geographyfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geohash: {
        Args:
          | { geog: unknown; maxchars?: number }
          | { maxchars?: number; geom: unknown };
        Returns: string;
      };
      st_geomcollfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomcollfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geometricmedian: {
        Args: {
          tolerance?: number;
          fail_if_not_converged?: boolean;
          g: unknown;
          max_iter?: number;
        };
        Returns: unknown;
      };
      st_geometryfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geometrytype: {
        Args: { "": unknown };
        Returns: string;
      };
      st_geomfromewkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfromewkt: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfromgeojson: {
        Args: { "": Json } | { "": Json } | { "": string };
        Returns: unknown;
      };
      st_geomfromgml: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfromkml: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfrommarc21: {
        Args: { marc21xml: string };
        Returns: unknown;
      };
      st_geomfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfromtwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_geomfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_gmltosql: {
        Args: { "": string };
        Returns: unknown;
      };
      st_hasarc: {
        Args: { geometry: unknown };
        Returns: boolean;
      };
      st_hausdorffdistance: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      st_hexagon: {
        Args: {
          origin?: unknown;
          size: number;
          cell_i: number;
          cell_j: number;
        };
        Returns: unknown;
      };
      st_hexagongrid: {
        Args: { bounds: unknown; size: number };
        Returns: Record<string, unknown>[];
      };
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown };
        Returns: number;
      };
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number };
        Returns: unknown;
      };
      st_intersects: {
        Args:
          | { geog2: unknown; geog1: unknown }
          | { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_isclosed: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_iscollection: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_isempty: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_ispolygonccw: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_ispolygoncw: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_isring: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_issimple: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_isvalid: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_isvaliddetail: {
        Args: { geom: unknown; flags?: number };
        Returns: Database["postgis"]["CompositeTypes"]["valid_detail"];
      };
      st_isvalidreason: {
        Args: { "": unknown };
        Returns: string;
      };
      st_isvalidtrajectory: {
        Args: { "": unknown };
        Returns: boolean;
      };
      st_length: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean };
        Returns: number;
      };
      st_length2d: {
        Args: { "": unknown };
        Returns: number;
      };
      st_letters: {
        Args: { font?: Json; letters: string };
        Returns: unknown;
      };
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown };
        Returns: number;
      };
      st_linefromencodedpolyline: {
        Args: { nprecision?: number; txtin: string };
        Returns: unknown;
      };
      st_linefrommultipoint: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_linefromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_linefromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_linelocatepoint: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      st_linemerge: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_linestringfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_linetocurve: {
        Args: { geometry: unknown };
        Returns: unknown;
      };
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset?: number };
        Returns: unknown;
      };
      st_locatebetween: {
        Args: {
          frommeasure: number;
          geometry: unknown;
          tomeasure: number;
          leftrightoffset?: number;
        };
        Returns: unknown;
      };
      st_locatebetweenelevations: {
        Args: { fromelevation: number; toelevation: number; geometry: unknown };
        Returns: unknown;
      };
      st_longestline: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_m: {
        Args: { "": unknown };
        Returns: number;
      };
      st_makebox2d: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_makeline: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_makepolygon: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_makevalid: {
        Args: { "": unknown } | { params: string; geom: unknown };
        Returns: unknown;
      };
      st_maxdistance: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: number;
      };
      st_maximuminscribedcircle: {
        Args: { "": unknown };
        Returns: Record<string, unknown>;
      };
      st_memsize: {
        Args: { "": unknown };
        Returns: number;
      };
      st_minimumboundingcircle: {
        Args: { segs_per_quarter?: number; inputgeom: unknown };
        Returns: unknown;
      };
      st_minimumboundingradius: {
        Args: { "": unknown };
        Returns: Record<string, unknown>;
      };
      st_minimumclearance: {
        Args: { "": unknown };
        Returns: number;
      };
      st_minimumclearanceline: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_mlinefromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_mlinefromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_mpointfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_mpointfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_mpolyfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_mpolyfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multi: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_multilinefromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multilinestringfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multipointfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multipointfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multipolyfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_multipolygonfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_ndims: {
        Args: { "": unknown };
        Returns: number;
      };
      st_node: {
        Args: { g: unknown };
        Returns: unknown;
      };
      st_normalize: {
        Args: { geom: unknown };
        Returns: unknown;
      };
      st_npoints: {
        Args: { "": unknown };
        Returns: number;
      };
      st_nrings: {
        Args: { "": unknown };
        Returns: number;
      };
      st_numgeometries: {
        Args: { "": unknown };
        Returns: number;
      };
      st_numinteriorring: {
        Args: { "": unknown };
        Returns: number;
      };
      st_numinteriorrings: {
        Args: { "": unknown };
        Returns: number;
      };
      st_numpatches: {
        Args: { "": unknown };
        Returns: number;
      };
      st_numpoints: {
        Args: { "": unknown };
        Returns: number;
      };
      st_offsetcurve: {
        Args: { distance: number; line: unknown; params?: string };
        Returns: unknown;
      };
      st_orderingequals: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_orientedenvelope: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_perimeter: {
        Args: { "": unknown } | { use_spheroid?: boolean; geog: unknown };
        Returns: number;
      };
      st_perimeter2d: {
        Args: { "": unknown };
        Returns: number;
      };
      st_pointfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_pointfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_pointm: {
        Args: {
          mcoordinate: number;
          srid?: number;
          xcoordinate: number;
          ycoordinate: number;
        };
        Returns: unknown;
      };
      st_pointonsurface: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_points: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_pointz: {
        Args: {
          xcoordinate: number;
          ycoordinate: number;
          srid?: number;
          zcoordinate: number;
        };
        Returns: unknown;
      };
      st_pointzm: {
        Args: {
          xcoordinate: number;
          mcoordinate: number;
          zcoordinate: number;
          ycoordinate: number;
          srid?: number;
        };
        Returns: unknown;
      };
      st_polyfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_polyfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_polygonfromtext: {
        Args: { "": string };
        Returns: unknown;
      };
      st_polygonfromwkb: {
        Args: { "": string };
        Returns: unknown;
      };
      st_polygonize: {
        Args: { "": unknown[] };
        Returns: unknown;
      };
      st_project: {
        Args: { azimuth: number; distance: number; geog: unknown };
        Returns: unknown;
      };
      st_quantizecoordinates: {
        Args: {
          g: unknown;
          prec_m?: number;
          prec_z?: number;
          prec_y?: number;
          prec_x: number;
        };
        Returns: unknown;
      };
      st_reduceprecision: {
        Args: { gridsize: number; geom: unknown };
        Returns: unknown;
      };
      st_relate: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: string;
      };
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number };
        Returns: unknown;
      };
      st_reverse: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_segmentize: {
        Args: { max_segment_length: number; geog: unknown };
        Returns: unknown;
      };
      st_setsrid: {
        Args: { srid: number; geog: unknown } | { srid: number; geom: unknown };
        Returns: unknown;
      };
      st_sharedpaths: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_shiftlongitude: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_shortestline: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_simplifypolygonhull: {
        Args: { is_outer?: boolean; vertex_fraction: number; geom: unknown };
        Returns: unknown;
      };
      st_split: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: unknown;
      };
      st_square: {
        Args: {
          size: number;
          cell_j: number;
          origin?: unknown;
          cell_i: number;
        };
        Returns: unknown;
      };
      st_squaregrid: {
        Args: { size: number; bounds: unknown };
        Returns: Record<string, unknown>[];
      };
      st_srid: {
        Args: { geog: unknown } | { geom: unknown };
        Returns: number;
      };
      st_startpoint: {
        Args: { "": unknown };
        Returns: unknown;
      };
      st_subdivide: {
        Args: { gridsize?: number; geom: unknown; maxvertices?: number };
        Returns: unknown[];
      };
      st_summary: {
        Args: { "": unknown } | { "": unknown };
        Returns: string;
      };
      st_swapordinates: {
        Args: { ords: unknown; geom: unknown };
        Returns: unknown;
      };
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number };
        Returns: unknown;
      };
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_tileenvelope: {
        Args: {
          margin?: number;
          zoom: number;
          x: number;
          y: number;
          bounds?: unknown;
        };
        Returns: unknown;
      };
      st_touches: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_transform: {
        Args:
          | { to_proj: string; from_proj: string; geom: unknown }
          | { to_proj: string; geom: unknown }
          | { to_srid: number; geom: unknown; from_proj: string };
        Returns: unknown;
      };
      st_triangulatepolygon: {
        Args: { g1: unknown };
        Returns: unknown;
      };
      st_union: {
        Args:
          | { "": unknown[] }
          | { geom2: unknown; geom1: unknown }
          | { gridsize: number; geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_voronoilines: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown };
        Returns: unknown;
      };
      st_voronoipolygons: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number };
        Returns: unknown;
      };
      st_within: {
        Args: { geom2: unknown; geom1: unknown };
        Returns: boolean;
      };
      st_wkbtosql: {
        Args: { wkb: string };
        Returns: unknown;
      };
      st_wkttosql: {
        Args: { "": string };
        Returns: unknown;
      };
      st_wrapx: {
        Args: { wrap: number; geom: unknown; move: number };
        Returns: unknown;
      };
      st_x: {
        Args: { "": unknown };
        Returns: number;
      };
      st_xmax: {
        Args: { "": unknown };
        Returns: number;
      };
      st_xmin: {
        Args: { "": unknown };
        Returns: number;
      };
      st_y: {
        Args: { "": unknown };
        Returns: number;
      };
      st_ymax: {
        Args: { "": unknown };
        Returns: number;
      };
      st_ymin: {
        Args: { "": unknown };
        Returns: number;
      };
      st_z: {
        Args: { "": unknown };
        Returns: number;
      };
      st_zmax: {
        Args: { "": unknown };
        Returns: number;
      };
      st_zmflag: {
        Args: { "": unknown };
        Returns: number;
      };
      st_zmin: {
        Args: { "": unknown };
        Returns: number;
      };
      text: {
        Args: { "": unknown };
        Returns: string;
      };
      unlockrows: {
        Args: { "": string };
        Returns: number;
      };
      updategeometrysrid: {
        Args: {
          column_name: string;
          new_srid_in: number;
          table_name: string;
          schema_name: string;
          catalogn_name: string;
        };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null;
        geom: unknown | null;
      };
      valid_detail: {
        valid: boolean | null;
        reason: string | null;
        location: unknown | null;
      };
    };
  };
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      deals: {
        Row: {
          created_at: string;
          desc: string | null;
          expired_at: string | null;
          guide: string | null;
          id: string;
          is_active: boolean;
          items: string[] | null;
          point_earn: number | null;
          rate_score: number | null;
          store_id: string | null;
          title: string | null;
          voucher_code: string | null;
        };
        Insert: {
          created_at?: string;
          desc?: string | null;
          expired_at?: string | null;
          guide?: string | null;
          id?: string;
          is_active?: boolean;
          items?: string[] | null;
          point_earn?: number | null;
          rate_score?: number | null;
          store_id?: string | null;
          title?: string | null;
          voucher_code?: string | null;
        };
        Update: {
          created_at?: string;
          desc?: string | null;
          expired_at?: string | null;
          guide?: string | null;
          id?: string;
          is_active?: boolean;
          items?: string[] | null;
          point_earn?: number | null;
          rate_score?: number | null;
          store_id?: string | null;
          title?: string | null;
          voucher_code?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "deals_store_id_fkey";
            columns: ["store_id"];
            referencedRelation: "stores";
            referencedColumns: ["id"];
          }
        ];
      };
      points_history: {
        Row: {
          created_at: string;
          deals: Json | null;
          points: number | null;
          status: Database["public"]["Enums"]["enum_point_status"] | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          deals?: Json | null;
          points?: number | null;
          status?: Database["public"]["Enums"]["enum_point_status"] | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          deals?: Json | null;
          points?: number | null;
          status?: Database["public"]["Enums"]["enum_point_status"] | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      saved_deals: {
        Row: {
          created_at: string;
          deals_id: string | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          deals_id?: string | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          deals_id?: string | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "saved_deals_deals_id_fkey";
            columns: ["deals_id"];
            referencedRelation: "deals";
            referencedColumns: ["id"];
          }
        ];
      };
      scan_n_earn: {
        Row: {
          created_at: string;
          id: string;
          irl_checkin_qr: string | null;
          ocr_result: string | null;
          receipt_url: string | null;
          store_name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          irl_checkin_qr?: string | null;
          ocr_result?: string | null;
          receipt_url?: string | null;
          store_name?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          irl_checkin_qr?: string | null;
          ocr_result?: string | null;
          receipt_url?: string | null;
          store_name?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      shopping_lists: {
        Row: {
          created_at: string;
          icon: string | null;
          id: string;
          is_ai_generated: boolean | null;
          item_count: number | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          icon?: string | null;
          id?: string;
          is_ai_generated?: boolean | null;
          item_count?: number | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          icon?: string | null;
          id?: string;
          is_ai_generated?: boolean | null;
          item_count?: number | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      shopping_lists_detail: {
        Row: {
          created_at: string;
          id: string;
          item_name: string | null;
          price: number | null;
          price_symbol: string | null;
          shopping_lists_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          item_name?: string | null;
          price?: number | null;
          price_symbol?: string | null;
          shopping_lists_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          item_name?: string | null;
          price?: number | null;
          price_symbol?: string | null;
          shopping_lists_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "shopping_lists_detail_shopping_lists_id_fkey";
            columns: ["shopping_lists_id"];
            referencedRelation: "shopping_lists";
            referencedColumns: ["id"];
          }
        ];
      };
      stores: {
        Row: {
          created_at: string;
          id: string;
          lat: number | null;
          location: unknown | null;
          long: number | null;
          name: string;
          online_link: string | null;
          photo: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          lat?: number | null;
          location?: unknown | null;
          long?: number | null;
          name?: string;
          online_link?: string | null;
          photo?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          lat?: number | null;
          location?: unknown | null;
          long?: number | null;
          name?: string;
          online_link?: string | null;
          photo?: string | null;
        };
        Relationships: [];
      };
      stores_categories: {
        Row: {
          category_id: string | null;
          store_id: string | null;
        };
        Insert: {
          category_id?: string | null;
          store_id?: string | null;
        };
        Update: {
          category_id?: string | null;
          store_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "stores_categories_category_id_fkey";
            columns: ["category_id"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "stores_categories_store_id_fkey";
            columns: ["store_id"];
            referencedRelation: "stores";
            referencedColumns: ["id"];
          }
        ];
      };
      user_info: {
        Row: {
          count_deals_saved: number | null;
          count_scanned_receipt: number | null;
          created_at: string;
          id: number;
          last_point: number | null;
          user_id: string | null;
        };
        Insert: {
          count_deals_saved?: number | null;
          count_scanned_receipt?: number | null;
          created_at?: string;
          id?: number;
          last_point?: number | null;
          user_id?: string | null;
        };
        Update: {
          count_deals_saved?: number | null;
          count_scanned_receipt?: number | null;
          created_at?: string;
          id?: number;
          last_point?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_nearby_stores: {
        Args: {
          p_limit?: number;
          p_offset?: number;
          p_radius_km?: number;
          p_long: number;
          p_lat: number;
        };
        Returns: {
          id: string;
          name: string;
          photo: string;
          long: number;
          online_link: string;
          lat: number;
          distance_km: number;
        }[];
      };
    };
    Enums: {
      enum_point_status: "approved" | "processing";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          type: Database["storage"]["Enums"]["buckettype"];
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          type?: Database["storage"]["Enums"]["buckettype"];
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          type?: Database["storage"]["Enums"]["buckettype"];
          updated_at?: string | null;
        };
        Relationships: [];
      };
      buckets_analytics: {
        Row: {
          created_at: string;
          format: string;
          id: string;
          type: Database["storage"]["Enums"]["buckettype"];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          format?: string;
          id: string;
          type?: Database["storage"]["Enums"]["buckettype"];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          format?: string;
          id?: string;
          type?: Database["storage"]["Enums"]["buckettype"];
          updated_at?: string;
        };
        Relationships: [];
      };
      iceberg_namespaces: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "iceberg_namespaces_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets_analytics";
            referencedColumns: ["id"];
          }
        ];
      };
      iceberg_tables: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          location: string;
          name: string;
          namespace_id: string;
          updated_at: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id?: string;
          location: string;
          name: string;
          namespace_id: string;
          updated_at?: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          location?: string;
          name?: string;
          namespace_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "iceberg_tables_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets_analytics";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "iceberg_tables_namespace_id_fkey";
            columns: ["namespace_id"];
            referencedRelation: "iceberg_namespaces";
            referencedColumns: ["id"];
          }
        ];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          level: number | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          user_metadata: Json | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          level?: number | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          level?: number | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          }
        ];
      };
      prefixes: {
        Row: {
          bucket_id: string;
          created_at: string | null;
          level: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          bucket_id: string;
          created_at?: string | null;
          level?: number;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          bucket_id?: string;
          created_at?: string | null;
          level?: number;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "prefixes_bucketId_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          }
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          user_metadata: Json | null;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          user_metadata?: Json | null;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          user_metadata?: Json | null;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          }
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
            columns: ["upload_id"];
            referencedRelation: "s3_multipart_uploads";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      add_prefixes: {
        Args: { _bucket_id: string; _name: string };
        Returns: undefined;
      };
      can_insert_object: {
        Args: { name: string; metadata: Json; bucketid: string; owner: string };
        Returns: undefined;
      };
      delete_prefix: {
        Args: { _name: string; _bucket_id: string };
        Returns: boolean;
      };
      extension: {
        Args: { name: string };
        Returns: string;
      };
      filename: {
        Args: { name: string };
        Returns: string;
      };
      foldername: {
        Args: { name: string };
        Returns: string[];
      };
      get_level: {
        Args: { name: string };
        Returns: number;
      };
      get_prefix: {
        Args: { name: string };
        Returns: string;
      };
      get_prefixes: {
        Args: { name: string };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          bucket_id: string;
          size: number;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          max_keys?: number;
          prefix_param: string;
          bucket_id: string;
          delimiter_param: string;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          start_after?: string;
          next_token?: string;
          max_keys?: number;
          delimiter_param: string;
          prefix_param: string;
          bucket_id: string;
        };
        Returns: {
          metadata: Json;
          id: string;
          name: string;
          updated_at: string;
        }[];
      };
      operation: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      search: {
        Args: {
          prefix: string;
          sortorder?: string;
          sortcolumn?: string;
          search?: string;
          offsets?: number;
          levels?: number;
          limits?: number;
          bucketname: string;
        };
        Returns: {
          metadata: Json;
          created_at: string;
          updated_at: string;
          id: string;
          name: string;
          last_accessed_at: string;
        }[];
      };
      search_legacy_v1: {
        Args: {
          limits?: number;
          prefix: string;
          bucketname: string;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
      search_v1_optimised: {
        Args: {
          offsets?: number;
          levels?: number;
          limits?: number;
          sortcolumn?: string;
          search?: string;
          sortorder?: string;
          prefix: string;
          bucketname: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
      search_v2: {
        Args: {
          prefix: string;
          bucket_name: string;
          limits?: number;
          levels?: number;
          start_after?: string;
        };
        Returns: {
          updated_at: string;
          key: string;
          name: string;
          id: string;
          metadata: Json;
          created_at: string;
        }[];
      };
    };
    Enums: {
      buckettype: "STANDARD" | "ANALYTICS";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  tiger: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      daitch_mokotoff: {
        Args: { "": string };
        Returns: string[];
      };
      dmetaphone: {
        Args: { "": string };
        Returns: string;
      };
      dmetaphone_alt: {
        Args: { "": string };
        Returns: string;
      };
      soundex: {
        Args: { "": string };
        Returns: string;
      };
      text_soundex: {
        Args: { "": string };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  tiger_data: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  pgbouncer: {
    Enums: {},
  },
  postgis: {
    Enums: {},
  },
  public: {
    Enums: {
      enum_point_status: ["approved", "processing"],
    },
  },
  storage: {
    Enums: {
      buckettype: ["STANDARD", "ANALYTICS"],
    },
  },
  tiger: {
    Enums: {},
  },
  tiger_data: {
    Enums: {},
  },
} as const;
