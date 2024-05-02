<template>
    <div
        class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
        <navbar></navbar>
        <main
            class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
            <search></search>
            <div>
                <div class="flex">
                    <h3 class="text-lg font-semibold mt-5 dark:text-white w-1/6">Настройки</h3>
                    <div class="mt-5">
                        <div class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-data" role="tabpanel" aria-labelledby="tabs-data-tab" data-te-tab-active>
                            <data-settings></data-settings>
                        </div>
                        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-appearance" role="tabpanel" aria-labelledby="tabs-appearance-tab">
                            <appearance-settings></appearance-settings>
                        </div>
                        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-language" role="tabpanel" aria-labelledby="tabs-language-tab">
                            <language-settings></language-settings>
                        </div>
                        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-list" role="tabpanel" aria-labelledby="tabs-list-tab">
                            <list-settings></list-settings>
                        </div>
                    </div>
                </div>
                <div class="flex items-start mt-5 dark:text-white">
                    <ul class="flex flex-col" role="tablist" data-te-nav-ref>
                        <li role="presentation" class="flex-grow mb-1">
                            <a href="#tabs-data" data-te-toggle="pill" data-te-target="#tabs-data" data-te-nav-active
                                role="tab" aria-controls="tabs-data" aria-selected="true">Личные данные</a>
                        </li>
                        <li role="presentation" class="flex-grow mb-1">
                            <a href="#tabs-appearance" data-te-toggle="pill" data-te-target="#tabs-appearance" role="tab"
                                aria-controls="tabs-appearance" aria-selected="false">Внешний вид</a>
                        </li>
                        <li role="presentation" class="flex-grow mb-1">
                            <a href="#tabs-language" data-te-toggle="pill" data-te-target="#tabs-language" role="tab"
                                aria-controls="tabs-language" aria-selected="false">Язык</a>
                        </li>
                        <li role="presentation" class="flex-grow mb-1">
                            <a href="#tabs-list" data-te-toggle="pill" data-te-target="#tabs-list" role="tab"
                                aria-controls="tabs-list" aria-selected="false">Список</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import dataSettings from '~~/components/data-settings.vue';
import appearanceSettings from '~~/components/appearance-settings.vue';
import languageSettings from '~~/components/language-settings.vue';
import listSettings from '~~/components/list-settings.vue';
export default {
    name: "settings",
    components: dataSettings, appearanceSettings, languageSettings, listSettings
}
</script>
  
<style scoped>
</style>
  