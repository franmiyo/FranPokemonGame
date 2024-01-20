import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore("general store", () => {
  //states
  let points = ref<number>(0);

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
    //actions
    acierto,
    reiniciaJuego,
  };
});
