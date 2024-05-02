<template>
  <div
  class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
  <navbar></navbar>
  <main
      class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <search></search>
      <div>Страница манги</div>
      <button @click.prevent="clean">CLEAN</button>
      <div> 
        <button @click.prevent="readMangaGetList">
          Fetch readmangalist
        </button>
        <button @click.prevent="mangadexGetChapter">
          Fetch mangadex
        </button>
        <br><br>
        <button @click.prevent="readManga()">
          Fetch readmanga
        </button>
        <div v-for="manga in img" :key="manga">
          <img class="object-scale-down h-full w-96" :src="manga" alt="gg">
        </div>
        <br><br>
        <div> Fetched data <br><br>
          <div v-for="chapter in chapters" :key="chapter">
            <button @click.prevent="getManga(chapter.id)">{{ chapter.title }}</button>
            <p>Chapter {{ chapter.chapter }}</p>
            <p>Language {{ chapter.lang }}</p>
            <br>
          </div>
          <div v-for="chapter in readMangaChapters" :key="chapter">
            <button @click.prevent="readMangaImg(chapter.link)">Глава {{ chapter.chapter }}</button>
            <br>
          </div>
        </div>
    </div>
  </main>
</div>
    
</template>

<script>
import axios from "axios";
import cheerio from "cheerio";
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      'img': [],
      'chapters':[],
      'readMangaChapters':[]
    }
  },
  methods: {
    clean() {
      this.img = []
      this.chapters = []
      this.readMangaChapters = []
    },
    async mangadexGetChapter() {
      // Сюда вставлять ссылку
      const {data:resp} = await useFetch('https://api.mangadex.org/manga/d773c8be-8e82-4ff1-a4e9-46171395319b/feed')
      for (let i = 0; i < resp.value.data.length; i++) {
      this.chapters.push({
        chapter: resp.value.data[i].attributes.chapter,
        lang: resp.value.data[i].attributes.translatedLanguage,
        title: resp.value.data[i].attributes.title,
        id:resp.value.data[i].id
      })
      this.chapters.sort(function(a,b){ 
      return a.chapter - b.chapter})
      }},
    async getManga(mainUrl){
      const mangadex = "https://api.mangadex.org/at-home/server/"+mainUrl
      const mangadex_split = mangadex.split("/")
      const mangadex_chapter = mangadex_split[mangadex_split.length - 1]
      console.log("\n\nMangadex (Английский)")
      console.log("Chapter ID: " + mangadex_chapter)
      const mangadex_resp = await axios.get(mangadex)
      const chapters = mangadex_resp.data.chapter.dataSaver
      console.log("Chapter Hash: " + mangadex_resp.data.chapter.hash)
      this.img = []
      for (let i = 0; i < chapters.length; i++) {
          //console.log("Page "+i+": " + chapters[i])
      }
      for (let i = 0; i < chapters.length; i++) {
          this.img.push(`https://uploads.mangadex.org/data-saver/${mangadex_resp.data.chapter.hash}/${chapters[i]}`)
      }
      //console.log("\nПример ссылки на картинку с Мангадекса: https://uploads.mangadex.org/data-saver/"+mangadex_resp.data.chapter.hash+"/"+chapters[0])
     },
    async readManga() {
      //Сюда вставлять ссылку
      const response = await axios.get("https://readmanga.live/siniaia_tiurma__bliu_lok__A5664");
      const html = response.data;
      const query = cheerio.load(html);
      let chapterlist = query("table > tbody > tr > td.item-title > a").contents();
      let chapterlinks = query("table > tbody > tr > td.item-title > a").attr(['href']);
      for (let i = 0; i < chapterlist.length; i++) {
        this.readMangaChapters.push({
          chapter:chapterlist[i].data.trim(),
          link:chapterlinks[i].attribs.href
        }) 
      }
    },
    async readMangaImg(mainUrl){
      const response = await axios.get(`https://readmanga.live${mainUrl}`);
      const html = response.data;
      const q = cheerio.load(html);
      let purl2 = q(".reader-controller.pageBlock.container > script").text();
      let counterstart = 0
      for (let i = 0; i < purl2.length, purl2[i] != "["; i++) {
          counterstart++;
      }
      purl2 = purl2.substring(counterstart+2)
      purl2 = purl2.split("],[")
      purl2[purl2.length - 1] = purl2[purl2.length-1].split("]]")
      purl2[purl2.length - 1] = purl2[purl2.length-1][0]
      let readmanga_url = purl2[0].split(",")
      readmanga_url = readmanga_url[0]
      console.log("Readmanga Storage URL: " + readmanga_url)
      this.img = []
      for (let i = 0; i < purl2.length; i++) {
          purl2[i] = purl2[i].split(",")
          let cache = purl2[i][2].split("?")
          purl2[i] = cache[0].substring(1)
          this.img[i]= 'https://one-way.work/'+ purl2[i]
      }
      console.log(purl2)
      }
  }
})
</script>

<style scoped>

</style>