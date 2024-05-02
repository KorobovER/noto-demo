<template>
    <div class="flex h-full fixed inset-0 z-10 justify-center backdrop-opacity-5 backdrop-invert bg-white/80 dark:bg-neutral-900/80">
        <div class="reg flex mt-[10%] h-1/3">
            <div class="block max-w-sm rounded-l-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <div class="flex justify-between">
                    <h2 class="mb-6 ml-3 text-lg font-semibold">Регистрация</h2>
                    <a @click="$emit('close-modal')" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                </div>
                <p class="text-sm ml-3 mb-6">Аккаунт позволяет вести собственные списки,
                    оставлять комментарии, отзывы и многое другое.</p>
                <form>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="login"
                            class="peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleLogin" aria-describedby="loginHelp" placeholder="Введите логин" 
                            v-model="user.login"/>
                        <label for="exampleInputLogin"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Логин
                        </label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputPassword1" placeholder="Пароль"
                            v-model="user.password">
                        <label for="exampleInputPassword1"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Пароль</label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputRepeatPassword" placeholder="Повторить пароль" />
                        <label for="exampleInputRepeatPassword"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Повторить
                            пароль</label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="email"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleEmail" aria-describedby="emailHelp" placeholder="Введите логин"
                            v-model="user.email">
                        <label for="exampleInputEmail"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Адрес
                            электронной почты
                        </label>
                    </div>
                    <button type="submit"
                        class="w-full mt-5 m-0 rounded bg-violet-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-600 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        data-te-ripple-init data-te-ripple-color="light"
                        @click.prevent="register"
                        >
                        Создать аккаунт и настроить
                    </button>
                    <a @click="$emit('go-to-login')" @click.prevent="register" class="flex justify-center w-full text-violet-700 mt-5"
                        href="#">Войти в существующий аккаунт</a>
                </form>
            </div>
            <img src="~/assets/img/reg_pic.png" alt="reg_pic">
        </div>
    </div>
    
</template>
  
<script setup>
const user = ref({
    login: '', 
    email:'',
    password: '',
    password_repeat: ''
});
const router = useRouter();
const register = async () => {
  const auth = await authenticateUser(user.value); 
}

</script>
  
<style scoped></style>