/// <reference types="vite/client" />

//  define import.meta.env  intelligence
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly APP__name: string;
  readonly APP__canister_type: string;
  readonly APP__canister_id: string;
  readonly APP__ACCESSKEY: string;
  readonly APP__SECRETKEY: string;
  // readonly xxxx:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace process {
  const env: Record<string, string>;
}

// declare global {
//   interface process {
//     env: Record<string, string>;
//   }
//   interface ic {
//     plug: {
//       requestConnect: (whitelist: string[], host?: string, timeout?: number) => string;
//     };
//   }
// }

declare module 'ic-stoic-identity' {
  const StoicIdentity: any;
  const load: (any) => any;
}
declare module '@mui/material/esm';
