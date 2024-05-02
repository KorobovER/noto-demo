<template>
  <div
    class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
      class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <div class="w-full">
        <img class="w-full" src="~/assets/img/listbg.png" alt="Discover Nuxt 3" />
      </div>
      <div class="flex mt-5">
        <filter-list-page></filter-list-page>
        <looking></looking>
      </div>
    </main>
  </div>
</template>

<script>
import looking from "~~/components/looking.vue";
import Filter from "~~/components/filter-list-page.vue";
export default {
  name: "catalog",
  components: Filter,

}
</script>

<style scoped></style>
