<script>
import axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      callsNumber: null,
      randomSentence: [],
    };
  },
  methods: {
    callApi(url) {
      this.randomSentence = [];
      for (let i = 0; i < this.callsNumber; i++) {
        axios
          .get(url)
          .then((response) => {
            console.log(response.data.response);
            this.randomSentence.push(response.data.response);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      this.randomSentence.join("");
    },
  },
};
</script>

<template>
  <h1>Random Sentence</h1>
  <label for="">Choose a number of words</label>
  <input type="number" class="number" v-model="callsNumber" min="1" />
  <button
    class="btn btn-primary"
    @click="callApi('https://flynn.boolean.careers/exercises/api/random/word')"
  >
    Generate random sentence
  </button>
  <p>{{ randomSentence.join(" ") }}</p>
</template>

<style scoped lang="scss"></style>

<!-- Ci viene chiesto di creare e stampare in console una frase contenente N parole (dove il valore di N è definito in una costante) sfruttando una API e che genera parole casuali. -->
