<template>
    <div
        class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
        <Navbar></Navbar>
        <main
            class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
            <search></search>
            <div>
                <input v-model="message" @keyup.enter="saveForm" placeholder="отредактируй меня" />
                <div v-html="markdown"></div>
            </div>
        </main>
    </div>
</template>
  
<script>
import { marked } from 'marked';
import Navbar from '~~/components/Navbar.vue';
import search from '~~/components/search.vue';
export default {
    data() {
        return {
            message:'',
            inputOne: '',
        }
    },
    name: "marked",
    components: Navbar, search,
    computed: {
        markdown() {
            return marked(this.inputOne)
        }
    },
    methods: {
        saveForm() {
            this.inputOne = this.message;
            return this.inputOne
        }
    }
}
</script>
  
<style scoped></style>
  