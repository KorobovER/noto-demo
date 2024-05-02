import { defineStore } from "pinia";
interface UserPayloadInterface {
  login: string;
  email:string;
  password: string;
}
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),

  actions: {
    async authenticateUser({ login, password }: UserPayloadInterface) {
      // Логика авторизации
      const {data:resp} = await useFetch('https://apiv1.noto.moe/account/login',
      {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        redirect:'manual',
        body: {
          login,password
        }

      })
      if(resp.value.message=='success'){
        this.authenticated = true
      }
    },
    async logUserOut() {
      const {data} = await useFetch("https://apiv1.noto.moe/account/logout", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.authenticated = false; // set authenticated  state value to false
    },
    async register({ login,email, password }: UserPayloadInterface) {
      // Логика авторизации
      const {data} = await useFetch('https://apiv1.noto.moe/account/register',
      {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          login: login,
          email: email,
          password: password,
        },
        credentials:'include'
      })
    },
    persist: true,
  },
});
