<script setup lang="ts">
import { onMounted, ref } from "vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonsOptions from "../components/PokemonsOptions.vue";
import { getPokemonsOptions } from "../helpers/getPokemonOptions";
import {
  pokemonsReactiveArr,
  pokemonSelected,
} from "../helpers/getPokemonOptions";
import { IPokemon } from "../interface/IPokemon";
import { useGeneralStore } from "../stores/GeneralStore.ts";

const store = useGeneralStore();

let showDialog = ref<boolean>();
let answerMessage = ref<string>();
let showVictory = ref<boolean>(false);
let done = ref<boolean>(false);

onMounted(async () => {
  await getPokemonsOptions();
});

async function checkRespuesta(pokemonClicked: IPokemon) {
  if (pokemonSelected.value === pokemonClicked) {
    store.acierto();
    answerMessage.value = "¡Has acertado!";
    showDialog.value = true;
    showVictory.value = true;
    done.value = true;
  } else {
    store.reiniciaJuego();
    answerMessage.value = "¡Has fallado!";
    showDialog.value = true;
    showVictory.value = false;
    done.value = true;
  }
}

function cerrar() {
  showDialog.value = false;
}

async function reiniciar() {
  pokemonsReactiveArr.value = [];
  pokemonSelected.value = { id: 0, name: "" };
  showVictory.value = false;
  done.value = false;
  await getPokemonsOptions();
}
</script>

<template>
  <v-container>
    <template v-if="done">
      <v-row justify="center">
        {{ answerMessage?.toLocaleUpperCase() }}
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field
            v-if="showVictory"
            color="black"
            single-line
            variant="solo-filled"
            readonly
          >
            <h2>{{ pokemonSelected.name }}</h2>
          </v-text-field>
        </v-col>
        <PokemonPicture :pokemonId="pokemonSelected.id" :show="showVictory" />
      </v-row>
      <v-row justify="center">
        <v-btn @click="reiniciar">Reiniciar</v-btn>
      </v-row>
    </template>
    <template v-else>
      <v-row justify="center">
        <h1 v-if="!pokemonSelected">Cargando pokemon...</h1>

        <div v-else>
          <div v-if="pokemonSelected.id != 0">
            <h1>¿Quién es este pokemon?</h1>
            <PokemonPicture
              :pokemonId="pokemonSelected.id"
              :show="showVictory"
            />
          </div>
        </div>
      </v-row>
      <v-row justify="center">
        <PokemonsOptions
          :pokemons="pokemonsReactiveArr"
          @pokemonmClickado="checkRespuesta($event)"
        />
      </v-row>
    </template>

    <v-dialog v-model="showDialog" persistent width="auto">
      <v-card>
        <v-card-title>
          {{ answerMessage }}
        </v-card-title>
        <v-card-subtitle> tienes {{ store.points }} punto/s </v-card-subtitle>
        <v-card-actions>
          <v-row justify="center">
            <v-btn @click="cerrar">OK</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
