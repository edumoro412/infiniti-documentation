// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "INFINITI",
      description: "Documentation for Infiniti project",
      logo: {
        src: "./public/infinito.png",
        alt: "Logo de Infiniti",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/edumoro412/infiniti",
        },
      ],
      sidebar: [
        {
          label: "General",
          items: [
            {
              label: "Introducción",
              link: "/general/introduccion",
            },
            {
              label: "Instalación",
              link: "/general/instalacion",
            },
            {
              label: "Estructura",
              link: "/general/estructura",
            },
            {
              label: "Configuración",
              link: "/general/configuracion",
            },
            {
              label: "Uso de la aplicación",
              link: "/general/uso",
            },
          ],
        },
        {
          label: "Desarrollo",
          autogenerate: { directory: "desarrollo" },
        },
        {
          label: "Componentes",
          autogenerate: { directory: "componentes" },
        },
        {
          label: "Problemas",
          autogenerate: { directory: "problemas" },
        },
      ],
    }),
  ],
});
