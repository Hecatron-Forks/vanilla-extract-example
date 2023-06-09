# Readme

Basic example to show an issue with hmr (hot module reloading) and vanilla extract
when used with nuxt3

This appears to only show up when SSR is enabled.  
As a workaround we set `ssr: false,` for `nuxt.config.ts` for the whole site.  
This prevents use with nuxt themes such as docus however.  
Trying to use `<client-only></client-only>` within the vue control doesn't work.
