<template>
    <div class="flex fixed z-10 inset-0 justify-center backdrop-opacity-5 backdrop-invert dark:bg-neutral-900/80 bg-white/80">
        <div class="reg flex mt-[10%] h-1/3">
            <div class="block w-96 rounded-l-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <div class="flex justify-between">
                    <h2 class="mb-6 ml-3 text-lg font-semibold">Авторизация</h2>
                    <a href="#">
                        <svg  @click="$emit('close-modal')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                </div>
                <form>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="login"
                            v-model="user.login"
                            class="peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleLogin" aria-describedby="loginHelp" placeholder="Введите логин" />
                        <label for="exampleInputLogin"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Логин
                        </label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input type="password" autocomplete="off"
                            v-model="user.password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputPassword1" placeholder="Пароль" />
                        <label for="exampleInputPassword1"
                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">Пароль</label>
                    </div>
                    <div class="flex">
                        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.4rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none cursor-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] indeterminate:border-primary dark:indeterminate:border-primary indeterminate:bg-primary dark:indeterminate:bg-primary indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.125rem] indeterminate:after:border-t-0 indeterminate:after:border-l-0 indeterminate:after:border-solid indeterminate:after:border-white hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexCheckIndeterminate">
                                Сохранить сессию
                            </label>
                        </div>
                    </div>
                    <button type="button"
                        class="w-full mt-44 m-0 rounded bg-violet-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-600 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        data-te-ripple-init data-te-ripple-color="light"
                        @click.prevent="login">
                        Войти
                    </button>

                    <a @click="$emit('go-to-register')" class="flex justify-center w-full text-violet-700 mt-5" href="#">Создать аккаунт</a>
                </form>
            </div>
            <img src="~/assets/img/reg_pic.png" alt="reg_pic">
            
        </div>
    </div>
</template>
  
<script setup>
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const {authenticateUser} = useAuthStore()
const user = ref({
    login: 'test', 
    password: 'test',
});
const router = useRouter();
const login = async () => {
  const auth = await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage
    router.go()
};
</script>
  
<style scoped></style>