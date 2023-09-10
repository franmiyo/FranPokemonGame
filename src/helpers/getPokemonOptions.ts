import { ref } from "vue";
import pokemonAPI from "../api/pokemonApi";
import { IPokemon } from "../interface/IPokemon";

export let pokemonsReactiveArr = ref<IPokemon[]>([]);
export let pokemonSelected = ref<IPokemon>({ id: 0, name: "" });

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

export const getPokemonsOptions = async () => {
  const mixPokemons = getPokemons().sort(() => Math.random() - 0.5);
  await getPokemonsName(mixPokemons.splice(0, 4));
};

const getPokemonsName = async (pokemonsArr: number[]) => {
  pokemonsArr.forEach(async (pokemonID: number) => {
    const response = await pokemonAPI.get(`/${pokemonID}`);
    if (pokemonsReactiveArr.value.length == 4) {
    } else {
      pokemonsReactiveArr.value.push({
        name: response.data.name,
        id: response.data.id,
      });
      if (pokemonsReactiveArr.value.length == 4) {
        pokemonSelected.value =
          pokemonsReactiveArr.value[Math.floor(Math.random() * 4)];
      }
    }
  });
};
