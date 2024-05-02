<template>
  <div
    class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
      class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <div>
        <last-activity></last-activity>
        <slider></slider>
        <on-screen></on-screen>
        <updates-ongoings></updates-ongoings>
        <news></news>
      </div>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
