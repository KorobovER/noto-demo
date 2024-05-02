<template>
  <div
    class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
      class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <button @click.prevent="clean">CLEAN</button>
      <div v-for="manga in img" :key="manga">
        <div v-if="chapterList">
          <img class="object-scale-down h-full w-full" :src="manga" alt="gg">
        </div>
      </div>


  <ul v-if="!chapterList" class="max-w-xl divide-y divide-gray-200 dark:divide-gray-700">
     <li v-for="chapter in readMangaChapters" :key="chapter" class="py-3 sm:py-4">
        <div class="cursor-pointer flex items-center space-x-4">
           <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://picsum.photos/600/400/?random" alt="Neil image">
           </div>
           <div @click.prevent="chapterList = true; readMangaImg(chapter.link)" class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                 {{ chapter.chapter }}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                 {{ chapter.translater }}
              </p>
           </div>
        </div>
     </li>
  </ul>


    </main>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from "axios";
import cheerio from "cheerio";

export default defineComponent({
  data() {
    return {
      'img': [],
      'chapters':[],
      'readMangaChapters': [],
      'chapterList':false
    }
  },
  mounted() {
    this.readManga()
  },
  methods: {
    clean(){
      this.img = []
      this.chapterList = false
    },
    async readManga() {
      const url = this.$route.params.id
      const response = await axios.get("https://readmanga.live/"+url);
      const html = response.data;
      const query = cheerio.load(html);
      let chapterlist = query("table > tbody > tr > td.item-title > a").contents();
      let chapterlinks = query("table > tbody > tr > td.item-title > a").attr(['href']);
      for (let i = 0; i < chapterlist.length; i++) {
        this.readMangaChapters.push({
          id: i,
          chapter: chapterlist[i].data.trim(),
          link: chapterlinks[i].attribs.href,
          translater: chapterlinks[i].attribs.title
        })
      }
    },
    async readMangaImg(url) {
      const response = await axios.get(`https://readmanga.live${url}`);
      const html = response.data;
      const q = cheerio.load(html);
      let purl2 = q(".reader-controller.pageBlock.container > script").text();
      let counterstart = 0
      for (let i = 0; i < purl2.length, purl2[i] != "["; i++) {
        counterstart++;
      }
      purl2 = purl2.substring(counterstart + 2)
      purl2 = purl2.split("],[")
      purl2[purl2.length - 1] = purl2[purl2.length - 1].split("]]")
      purl2[purl2.length - 1] = purl2[purl2.length - 1][0]
      let readmanga_url = purl2[0].split(",")
      readmanga_url = readmanga_url[0]
      console.log("Readmanga Storage URL: " + readmanga_url)
      this.img = []
      for (let i = 0; i < purl2.length; i++) {
        purl2[i] = purl2[i].split(",")
        let cache = purl2[i][2].split("?")
        purl2[i] = cache[0].substring(1)
        this.img[i] = 'https://one-way.work/' + purl2[i]
      }
      console.log(purl2)
    }
  },
})
</script>


<style></style>