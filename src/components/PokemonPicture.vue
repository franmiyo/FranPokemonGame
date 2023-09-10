<script setup lang="ts">
const props = defineProps<{
  pokemonId: number | undefined;
  show: boolean;
}>();
</script>

<template>
  <v-container fluid>
    <v-row justify="center"> </v-row>

    <v-row justify="center" class="mb-5 mt-5">
      <img
        v-if="!show"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`"
        alt="pokemon"
        class="hidden-pokemon ml-10"
      />
      <img
        v-if="show"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`"
        alt="pokemon"
        class="fade-in"
      />
    </v-row>
  </v-container>
</template>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
