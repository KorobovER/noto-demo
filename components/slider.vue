<template>
  <swiper class="w-full h-72 m-auto p-4 mt-10 dark:text-white" :modules="modules" :slides-per-view="1" :space-between="50"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }">
    <swiper-slide v-for="text in swiperTextBase" :key="text.description" class="pb-14 sm-flex sm:justify-evenly">
      <div class="flex w-full h-full ml-52 absolute flex-col justify-center items-center ml-0 text_slider">
        <p class="uppercase font-medium mb-5">{{ text.status }}</p>
        <h1 class="text-2xl font-bold ">{{ text.title }}</h1>
        <p class="mt-1">{{ text.description }}</p>
      </div>
      <img :src="text.img" alt="image">
    </swiper-slide>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>
<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ref } from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        title: 'Touhou Niji Sousaku Doujin Anime: Musou Kakyou',
        status: 'В центре внимания',
        description: 'Опциональный подзаголовок поменьше',
        img: 'https://ip1.anime-pictures.net/direct-images/2ed/2ed71f39cf2a07ed3caff14c11dc4852.jpg?if=ANIME-PICTURES.NET_-_786740-7680x4320-original-oli-long+hair-looking+at+viewer-fringe-highres.jpg'
      },
      {
        title: 'Dosanko Gal wa Namara Menkoi',
        status: 'В центре внимания',
        description: 'Опциональный подзаголовок поменьше',
        img: 'https://ip1.anime-pictures.net/direct-images/ad6/ad63daa9889f8068a55bb65cdacff617.png?if=ANIME-PICTURES.NET_-_787427-6680x4700-original-muka+tsuku-single-long+hair-looking+at+viewer-blush.png'
      },
      {
        title: 'Chainsaw Man',
        status: 'В центре внимания',
        description: 'Опциональный подзаголовок поменьше',
        img: 'https://ip1.anime-pictures.net/direct-images/6e4/6e43aa85574d5a47513eeeab79611db5.jpg?if=ANIME-PICTURES.NET_-_787501-2716x1920-original-toosaka+asagi-single-long+hair-fringe-highres.jpg'
      },
      {
        title: 'Fumetsu no Anata e 2nd Season',
        status: 'В центре внимания',
        description: 'Опциональный подзаголовок поменьше',
        img: 'https://ip1.anime-pictures.net/direct-images/83d/83dc9a05adb0cff8f30440d4dfba9ba6.jpg?if=ANIME-PICTURES.NET_-_787499-2716x1920-original-toosaka+asagi-long+hair-blush-fringe-highres.jpg'
      },

    ])
    return {
      modules: [Navigation, Pagination], swiperTextBase
    };
  },
};
</script>
<style>
.swiper-button-prev:after,
.swiper-button-next:after {
  color: black;
  font-size: 25px
}

.dark .swiper-button-prev:after {
  color: white;
}

.dark .swiper-button-next:after {
  color: white;
}

.text_slider {
  background-blend-mode: overlay;
  background-color: rgba(255, 255, 255, 0.786);
}

.dark .text_slider {
  background-color: rgba(0, 0, 0, 0.786);
}
</style>