import { test as base } from "./dapplet-runner";

export enum RegistryTypes {
  Prod = "v3.registry.dapplet-base.eth",
  Test = "test.v3.registry.dapplet-base.eth",
}

export type DappletExecutorOptions = {
  registry: RegistryTypes;
  devServerUrl: string;
  dappletName: string;
  onboarding?: boolean;
};

type ExtendParams = Parameters<typeof base.extend<DappletExecutorOptions>>;

export const fixture: ExtendParams[0] = {
  registry: [RegistryTypes.Prod, { option: true }],
  devServerUrl: ["http://localhost:3001/dapplet.json", { option: true }],
  dappletName: ["", { option: true }],
  onboarding: [false, { option: true }],
  page: async (
    {
      page,
      skipOnboarding,
      enableDevMode,
      enableDevServer,
      enableRegistry,
      activateDapplet,
      registry,
      devServerUrl,
      dappletName,
    },
    use
  ) => {
    await skipOnboarding();
    await enableDevMode();
    await enableRegistry(registry);
    await enableDevServer(devServerUrl);
    await activateDapplet(dappletName, devServerUrl);
    await use(page);
  },
};

export const test = base.extend<DappletExecutorOptions>(fixture);

export const expect = test.expect;
