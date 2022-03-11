// import { useNuxtApp } from '#app'
import { defineStore } from 'pinia'

// let { $axios } = useNuxtApp()
// const axios = $axios()

export const useCategoriesStore = defineStore('categories', {
  state: () => {
    return { navbarCategories: null }
  },
  actions: {
    async fetchNavbarCategories() {
      try {
        // await axios.get('categories/navigation/').then((res) => (this.navbarCategories = res))
        console.log(this.navbarCategories)
      } catch (error) {}
    },
  },
})
