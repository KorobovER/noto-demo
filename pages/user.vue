<template>
  <div class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
        class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <div>Пользователь</div>
      <section class="w-64 mx-auto bg-neutral-700 rounded-2xl px-8 py-6 shadow-lg">
        <div class="flex items-center justify-between">
            <span class="text-gray-400 text-sm">2d ago</span>
            <span class="text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">Username:<br/> {{ user.login }} </h2>
        </div>
        <p class="text-sky-300 font-semibold mt-2.5" >
            Email: {{ user.email }}
        </p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-sky-700 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
        </div>

    </section> 
    </main>
  </div>
</template>
<script setup>
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const { getUser } = useAuthStore();
const user = await getUser();
</script>

<style scoped>

</style>
