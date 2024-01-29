const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
            search: null,
            // message: "Hello Vue!",
            //message = propiedad reactiva dentro del modelo
            result: null,
            error: null,
        }
    },
    methods: {
        async doSearch() {
            this.result = this.error = null
            //comenzamos doSearch limpiando todo y dejándolo listo para lo que pueda suceder
            try {
                const response = await fetch(API + this.search)
                if (!response.ok) { //si la respuesa no es OK (campo en consola)
                    throw Error("User not found.")
                }
                const data = await response.json()
                console.log(data)
                this.result = true
            } catch (error) {
                this.error = error
            } finally {
                this.search = null
            }
        }
    }
})
