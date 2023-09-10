import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGeneralStore = defineStore("general store", () => {
  //states
  let points = ref<number>(0);

  //getters
  const getPoints = computed(() => {
    return points.value;
  });

  //actions
  const acierto = () => {
    points.value++;
  };

  const reiniciaJuego = () => {
    points.value = 0;
  };

  return {
    //states
    points,
    //getters
    getPoints,
    //actions
    acierto,
    reiniciaJuego,
  };
});
