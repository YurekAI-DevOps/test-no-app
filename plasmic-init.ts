import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "cq6jafJm5bphupJFTybxA1",
      token: "eZKKsRLwBUu80klQjcMMRrkGW3oqVjFiqm6XrFzL20Y1MaUbXFwTWVTuhKWadTe9O2Rfc2bhd9sUNby5Eibw",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
