app.component('app-profile', {
  props: ["result", "isFavorite"],
  methods: {
    addFavorite() {
        this.$emit('add-favorite')
    },
    removeFavorite() {
        this.$emit('remove-favorite')
    }
  },
  template:
    /* html */
    `
    <div class="result">
        <a v-if="isFavorite" href="#" class="result__toggle-favorite" @click="removeFavorite">Remove Favorite
            ⭐</a>
        <a v-else href="#" class="result__toggle-favorite" @click="addFavorite">Add Favorite ⭐</a>
        <h2 class="result__name">{{ result.name }}</h2>
        <img v-bind:src="result.avatar_url" :alt="result.name" class="result__avatar" />
                <!-- no hace falta usar v-bind si a continuación lo vas a seguir usando. Con poner los : y su atributo es suficiente. -->
        <p class="result__bio"> {{ result.bio }} <br />
            <a v-bind:href="result.blog" target="_blank" class="result__blog">{{ result.blog }}</a>
        </p>
    </div>
    `
});
