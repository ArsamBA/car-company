// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {      
      charset: 'utf-16',           
      title: 'HHB Group',      
      meta: [              
         { name: 'description', content: '' }      
      ],
      }
   },

   runtimeConfig: {
      public: {
      baseURL: 'http://localhost:8080/api/v1',
      mockData: false,
      },
   },
   //  modules: [
   //  ],
   css: [
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css'
   ],
   build: {
      transpile: ['vuetify'],
   },
})
