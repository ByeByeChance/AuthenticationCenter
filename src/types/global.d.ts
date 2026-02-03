/* Vite */
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USER_NODE_ENV: "development" | "production" | "test";
  VITE_GLOB_APP_TITLE: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_REPORT: boolean;
  VITE_ROUTER_MODE: "hash" | "history";
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "gzip,brotli" | "none";
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_API_URL: string;
  VITE_PROXY: [string, string][];
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};

declare module "spark-md5" {
  // SparkMD5 instance interface
  interface SparkMD5Instance {
    append(data: string | ArrayBuffer | null): this;
    end(raw?: boolean): string;
    reset(): void;
  }

  // SparkMD5 constructor interface with static methods
  interface SparkMD5Constructor {
    new (): SparkMD5Instance;
    hash(data: string | ArrayBuffer | null, raw?: boolean): string;
    ArrayBuffer: new () => SparkMD5Instance;
  }

  // Main export
  const SparkMD5: SparkMD5Constructor;
  export default SparkMD5;
}
