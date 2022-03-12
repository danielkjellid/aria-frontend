<template>
  <section>
    <a-image
      name="Example"
      width="full"
      :loading="false"
      :images="images"
      @on-navigate-to-content="() => console.log('on-navigate')"
    />
    <p>{{ images }}</p>
  </section>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~~/store/categories'

// const c = await apiService('categories/')

const c = await performGet('categories/')
console.log('cat', c)

// const t = await performPost('categories/', { someCamelCaseName: 'data' })
//
// console.log('t', t)

const categoriesStore = useCategoriesStore()
categoriesStore.fetchNavbarCategories()

let categories

const images = {
  applyFilter: false,
  image512x512: 'https://source.unsplash.com/random',
  image640x275: 'https://source.unsplash.com/random',
  image1024x1024: 'https://source.unsplash.com/random',
  image1024x575: 'https://source.unsplash.com/random',
  image1536x860: 'https://source.unsplash.com/random',
  image2048x1150: 'https://source.unsplash.com/random',
}
</script>
