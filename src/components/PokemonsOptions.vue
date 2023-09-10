<script setup lang="ts">
import { IPokemon } from "../interface/IPokemon";

const props = defineProps<{
  pokemons: IPokemon[];
}>();

const emits = defineEmits<{
  (evento: "pokemonmClickado", value: IPokemon): void;
}>();
</script>

<template>
  <v-container>
    <v-row
      v-if="pokemons"
      v-for="pokemon in props.pokemons"
      :key="pokemon.id"
      justify="center"
    >
      <v-col cols="12">
        <v-row justify="center" class="mb-3">
          <v-btn
            elevation="4"
            @click="emits('pokemonmClickado', pokemon)"
            color="blue"
            >{{ pokemon.name }}</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
