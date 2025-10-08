declare namespace NodeJS {
  interface ProcessEnv {
    BUILD_TIMESTAMP?: string;
    NEXT_PUBLIC_GA_ID?: string;
    NODE_ENV?: 'development' | 'test' | 'production';
  }
}


