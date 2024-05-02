<template>
  <div
    class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
      class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <div>
          <div v-for="manga in mangaList" :key="manga.title" class="flex justify-between w-full mt-4 relative dark:text-white ">
            <div class="title">
              <div class="card ml-32 absolute bg-white dark:bg-neutral-900 h-42 w-76 rounded-r-lg ">
                <div class="mt-2 w-full">
                  <div class="flex w-full justify-between border-b-2 border-[#EDECEC] dark:border-neutral-500">
                    <div class="ml-3">
                      <div class="text-base w-48 whitespace-nowrap overflow-x-hidden text-ellipsis">
                        {{ manga.title }}
                      </div>
                      <div class="text-sm font-medium mb-3 whitespace-nowrap overflow-x-hidden text-ellipsis">
                      </div>
                    </div>
                    <div class="flex mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        class="w-6 h-6 stroke-current text-yellow-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      <p class="ml-2"></p>
                    </div>
                  </div>
                  <div class="flex flex-col justify-around h-32 ml-2">
                    <div class="text-xs font-medium"></div>
                    <div class="text-xs font-medium"></div>
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p class="text-sm font-medium flex items-center ml-1"></p>
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link :url="manga.href" :to="`/catalog/${manga.link}`">
                <div class="flex-row w-32">
                  <img :src="`${manga.img}`" alt="#" class="h-48 rounded-md">
                  <div class="text-sm font-semibold mt-2"></div>
                  <div class="text-xs mt-1"></div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
    </main>
  </div>
</template>
  
<script >
import axios from "axios"
import cheerio from "cheerio"
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  data() {
    return {
      mangaList: [],
    }
  },
  mounted(){
    this.readMangaGetList()
  },
  methods: {
    async readMangaGetList() {
      const response = await axios.get(`https://readmanga.live/list/another/on_screens`);
      const html = response.data;
      const query = cheerio.load(html);
      let mangalist = query("div.tiles.row > div > div.desc > h3").contents();
      let mangalistImg = query("div.tiles.row > div > div.img > a").contents();
      for (let i = 0; i < mangalist.length; i++) {
        if (mangalist[i].attribs != undefined || mangalistImg[i].name != undefined) {
          this.mangaList.push(
            {
              img: mangalistImg[i].attribs['data-original'],
              title: mangalist[i].attribs.title,
              link: mangalist[i].attribs.href.slice(1, mangalist[i].attribs.href.length)
            })
         }
      }
    }
  }
},
)
</script>
  
<style scoped>
.card {
  visibility: visible;
}

.title:hover .card {
  visibility: visible;
}
</style>
  