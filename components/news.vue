<template>
    <div class="mt-8 text-xl font-semibold dark:text-white">Новости</div>
    <div class="flex w-full justify-between mt-3 dark:text-white">
        <div v-for="news in newsBase" :key="news" class="w-1/3">
            <img :src="news.img" alt="image" class="h-48 w-96 rounded-lg">
            <div class="mt-3">
                <div class="text-xs">{{ news.date }} • {{ news.count_coms }} </div>
                <div class="mt-2 text-base font-semibold w-96 mb-96">{{ news.title_news }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            newsBase: [
                {
                    title_news: 'Авторский состав аниме FLCL объявил дальнейшие планы по развитию франшизы',
                    date: '12 марта 2023',
                    count_coms: '7 коментариев',
                    img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
                },
                {
                    title_news: 'Инагава Дзюн: большое интервью перед началом показа MAHOU SHOUJO DEMONIC...',
                    date: '15 февраля 2023',
                    count_coms: '10 комментариев',
                    img: 'https://ip1.anime-pictures.net/direct-images/ad6/ad63daa9889f8068a55bb65cdacff617.png?if=ANIME-PICTURES.NET_-_787427-6680x4700-original-muka+tsuku-single-long+hair-looking+at+viewer-blush.png'
                },
                {
                    title_news: 'Тут обязательно будет новость, Лёха что-то сплоховал....',
                    date: '5 марта 2023',
                    count_coms: '1 комментарий',
                    img: 'https://ip1.anime-pictures.net/direct-images/6e4/6e43aa85574d5a47513eeeab79611db5.jpg?if=ANIME-PICTURES.NET_-_787501-2716x1920-original-toosaka+asagi-single-long+hair-fringe-highres.jpg'
                }
            ]
        }
    }
}
</script>

<style></style>