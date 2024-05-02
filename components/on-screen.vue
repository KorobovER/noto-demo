<template>
  <h3 class="mt-8 text-xl font-bold dark:text-white">Сейчас на экранах</h3>
  <div class="flex justify-between w-full mt-4 relative dark:text-white ">
    <div v-for="card in cardsBase" :key="card.description" class="title">
      <div class="card ml-32 absolute bg-white dark:bg-neutral-900 h-42 w-76 rounded-r-lg ">
        <div class="mt-2 w-full">
          <div class="flex w-full justify-between border-b-2 border-[#EDECEC] dark:border-neutral-500">
            <div class="ml-3">
              <div class="text-base w-48 whitespace-nowrap overflow-x-hidden text-ellipsis">{{ card.title }}</div>
              <div class="text-sm font-medium mb-3 whitespace-nowrap overflow-x-hidden text-ellipsis">{{ card.title_rus }}
              </div>
            </div>
            <div class="flex mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                class="w-6 h-6 stroke-current text-yellow-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <p class="ml-2">{{ card.rating }}</p>
            </div>
          </div>
          <div class="flex flex-col justify-around h-32 ml-2">
            <div class="text-xs font-medium">{{ card.statistic }}</div>
            <div class="text-xs font-medium">{{ card.genre }}</div>
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm font-medium flex items-center ml-1">{{ card.status }}</p>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="/title">
        <div class="flex-row w-32">
          <img :src="card.img" alt="#" class="h-48 rounded-md">
          <div class="text-sm font-semibold mt-2">{{ card.title }}</div>
          <div class="text-xs mt-1">{{ card.studio }}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "on-screen",
  data: () => {
    return {
      cardsBase: [
        {
          title: 'Chainsaw Man',
          title_rus: 'Человек Бензопила',
          studio: 'Mappa',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.9',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'


        },
        {
          title: 'Kage no Jitsuryoku sha no Nariakutte',
          title_rus: 'Каге но Дзицуреку ша но Нариакутте',
          studio: 'Nexus',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '3.9',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://ip1.anime-pictures.net/direct-images/ad6/ad63daa9889f8068a55bb65cdacff617.png?if=ANIME-PICTURES.NET_-_787427-6680x4700-original-muka+tsuku-single-long+hair-looking+at+viewer-blush.png'
        },
        {
          title: 'One Piece',
          title_rus: 'Ван Пис',
          studio: 'Toei Animation',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.1',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://ip1.anime-pictures.net/direct-images/6e4/6e43aa85574d5a47513eeeab79611db5.jpg?if=ANIME-PICTURES.NET_-_787501-2716x1920-original-toosaka+asagi-single-long+hair-fringe-highres.jpg'
        },
        {
          title: 'SPY×FAMILY Pt. 2',
          studio: 'Studio Wit',
          title_rus: 'Шпионская Семья',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.9',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Bocchi the Rock!',
          studio: 'CloverWorks',
          title_rus: 'Бокки- скала',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '2.1',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Blue Lock',
          studio: '8-bit',
          title_rus: 'Синий Замок',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.3',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Boku no Hero Academia 6',
          studio: 'bones',
          title_rus: 'Боку но Герой Академии',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '3.2',
          statistic: 'TV • ОНГОИНГ • 11 ЭПИЗОДОВ ИЗ 12 ',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },

      ]
    }

  }
}
</script>


<style scoped>
.card {
  visibility: hidden;
}

.title:hover .card {
  visibility: visible;
}
</style>