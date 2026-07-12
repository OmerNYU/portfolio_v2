import vinext from "vinext";
import { defineConfig } from "vite";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./build/sites-vite-plugin";

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";

const { d1, r2 } = hostingConfig;

const isCodexSeatbeltSandbox =
  process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "site-creator-d1",
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: "site-creator-r2",
        },
      ]
    : [],
};

export default defineConfig(async () => {
  const isVercelBuild =
    process.env.VERCEL === "1" ||
    process.env.NITRO_PRESET === "vercel";

  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  const platformPlugin = isVercelBuild
    ? (await import("nitro/vite")).nitro()
    : (
        await import("@cloudflare/vite-plugin")
      ).cloudflare({
        viteEnvironment: {
          name: "rsc",
          childEnvironments: ["ssr"],
        },
        inspectorPort: false,
        config: localBindingConfig,
      });

  // Nitro + Vite's built-in postcss-import resolve `@import "tailwindcss"` as a
  // relative file before `@tailwindcss/postcss` can handle it. Use the Vite
  // Tailwind plugin for Vercel builds only; Cloudflare keeps postcss.config.mjs.
  const vercelCssPlugins = isVercelBuild
    ? [(await import("@tailwindcss/vite")).default()]
    : [];

  return {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
      ...(isCodexSeatbeltSandbox
        ? {
            watch: {
              useFsEvents: false,
              usePolling: true,
            },
          }
        : {}),
    },

    plugins: [
      vinext(),
      sites(),
      ...vercelCssPlugins,
      platformPlugin,
    ],
  };
});
