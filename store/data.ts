import { defineStore } from "pinia";
export const useDataStore = defineStore("data", {
  state: () => ({}),
  actions: {
    async MangadexFetch(){
      const mangadex = "https://api.mangadex.org/at-home/server/27cd0902-ad4c-490a-b752-ae032f0503c9"
      let mangadex_split = mangadex.split("/")
      let mangadex_chapter = mangadex_split[mangadex_split.length - 1]
      console.log("\n\nMangadex (Английский)")
      console.log("Chapter ID: " + mangadex_chapter)
      let mangadex_resp = await fetch(mangadex)
      let chapters = mangadex_resp.body.chapter.dataSaver
      console.log("Chapter Hash: " + mangadex_resp.body.chapter.hash)
      for (let i = 0; i < chapters.length; i++) {
          console.log("Page "+i+": " + chapters[i])
      }
      console.log("\nПример ссылки на картинку с Мангадекса: https://uploads.mangadex.org/data-saver/"+mangadex_resp.data.chapter.hash+"/"+chapters[0])
    }
  },
});
