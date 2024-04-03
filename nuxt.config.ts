// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  modules: ['@nuxt/ui','nuxt-icon','@pinia/nuxt','@vueuse/nuxt'],
  runtimeConfig:{
    dbUri: process.env.DATABASE_URI,
    dbName: process.env.MONGO_DB,
    dbUser: process.env.DBUSERNAME,
    dbPass: process.env.DBPASSWORD,
    dbAuthSource: process.env.DBAUTHSOURCE
  },
  devServer: {
    // host: '0.0.0.0', // Địa chỉ IP của máy chủ
    // port: 3000 // Cổng của máy chủs
  },
  nitro:
  {
    storage:
    {
      fs:{
        driver:'fs',
        base: './public/imgs',
      }
    }
  }
})
