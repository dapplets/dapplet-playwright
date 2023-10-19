interface DappletsServiceWorker {
  enableDevMode(): Promise<void>;
  disableDevMode(): Promise<void>;
  setIsFirstInstallation(value: boolean): Promise<void>;
  addRegistry(url: string, isDev: boolean): Promise<void>;
  removeRegistry(url: string): Promise<void>;
  enableRegistry(url: string): Promise<void>;
  disableRegistry(url: string): Promise<void>;
  activateDapplet(params: {
    name: string;
    registryUrl: string;
    version?: string;
    hostnames?: string[];
    order?: number;
    tabId?: number;
  }): Promise<void>;
  deactivateDapplet(params: {
    name: string;
    registryUrl: string;
    version?: string;
    hostnames?: string[];
    order?: number;
    tabId?: number;
  }): Promise<void>;
}

declare module globalThis {
  var dapplets: DappletsServiceWorker;
}
