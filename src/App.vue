<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGeneralStore } from "./stores/GeneralStore.ts";
const store = useGeneralStore();
const { getPoints } = storeToRefs(store);
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Pokemon App">
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="getPoints"
            label="Puntuación: "
            placeholder="0"
            type="number"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-img
          max-height="200"
          class="pa-5 ma-5"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Vw_KuEL919GZpSbyoeXw9gHaEK%26pid%3DApi&f=1&ipt=a699168dff39e2a94b66c404d1956923215587f0179fc847fcb818269bf40ad3&ipo=images"
        ></v-img>
      </v-row>
      <v-row justify="center">
        <RouterView />
      </v-row>
    </v-container>
  </v-layout>
</template>

<style scoped></style>
