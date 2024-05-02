<template>
  <div>
    <input v-model="search" type="search"
    class="block p-2 m-auto mt-1 text-sm mb-1 max-sm:w-full w-3/6 focus:outline-slate-500 focus:text-slate-500 dark:bg-neutral-800"
    placeholder="&#x1F50D;&#xFE0E;  Начните печатать для поиска...">
    <div v-if="search !='' && title !=''" class="block p-2 m-auto text-sm mb-1 max-sm:w-full w-3/6 bg-white border dark:bg-neutral-800 border-slate-500 mt-2 ">
     <ul v-for="results in title" >
         <li class="cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
             <nuxt-link :to="`/catalog/${results.slug}`">
               <b>{{results.slug}}</b>
             </nuxt-link>
         </li>
     </ul>
    </div>
  </div>
  
          
</template>

<script >
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  data() {
    return {
      search: '',
      title: undefined,
    }
  },
  watch: {
    search(value) {
      this.doSearch(value);
    },
    
  },
  methods: {
    async doSearch(value) {
      const { data: fetched } = await useFetch(
        `https://apiv1.noto.moe/anime/?slug=${this.search}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
          },
        },)
      this.title = fetched.value.data
    },
  }
  
}
)

</script>

<style scoped>

</style>