import { ResolveFn } from '@angular/router';
import {PokemonResult} from '../models/pokemon';
import {PokemonService} from '../services/pokemon.service';
import {inject} from '@angular/core';

export const pokemonListResolver: ResolveFn<PokemonResult> = (route, state) => {
  const _pokemonService: PokemonService = inject(PokemonService);
  return _pokemonService.getPokemons('https://pokeapi.co/api/v2/pokemon?offset=0&limit=12');
};
