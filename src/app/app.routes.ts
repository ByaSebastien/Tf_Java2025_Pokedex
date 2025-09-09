import { Routes } from '@angular/router';
import {pokemonListResolver} from './resolvers/pokemon-list.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent:() => import('./pages/pokedex-index/pokedex-index').then(m => m.PokedexIndex),
    resolve: {
      resolvedPokemonResult: pokemonListResolver
    }
  }
];
