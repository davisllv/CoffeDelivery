interface ImportMetaEnv {
  readonly VITE_KEY_API_TOM_TOM: string;
  readonly VITE_API_ORIGIN_LATITUDE: number;
  readonly VITE_API_ORIGIN_LONGITUDE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
