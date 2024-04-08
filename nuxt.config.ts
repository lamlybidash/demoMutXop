import { _height } from "#tailwind-config/theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  modules: ['@nuxt/ui','nuxt-icon','@pinia/nuxt','@vueuse/nuxt','@nuxt/image',],
  runtimeConfig:{
    public:{
      dbUri: process.env.DATABASE_URI,
      dbName: process.env.MONGO_DB,
      // dbUser: process.env.DBUSERNAME,
      // dbPass: process.env.DBPASSWORD,
      // dbAuthSource: process.env.DBAUTHSOURCE
    },
    private :{
      NUXT_ENV_MONGO_URI: process.env.NUXT_ENV_MONGO_URI,
      NUXT_ENV_MONGO_DB: process.env.NUXT_ENV_MONGO_DB,
    }
  },
  devServer: {
    // host: '0.0.0.0', // Địa chỉ IP của máy chủ
    // port: 3000 // Cổng của máy chủs
  },
  build:
  {
    transpile: ['vuetify'],
  }
  ,
  nitro:
  {
    plugins:["~/server/plugins/dbconnection.ts"],
    storage:
    {
      fs:{
        driver:'fs',
        base: './public/imgs',
      }
    }
  },
  ssr: true,
})