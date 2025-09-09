import {Component, inject} from '@angular/core';
import {PokemonDetail} from '../../components/pokemon-detail/pokemon-detail';
import {PokemonList} from '../../components/pokemon-list/pokemon-list';
import {PokemonService} from '../../services/pokemon.service';
import {PokemonDetailModel, PokemonResult} from '../../models/pokemon';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pokedex-index',
  imports: [
    PokemonDetail,
    PokemonList,
    FormsModule
  ],
  templateUrl: './pokedex-index.html',
  styleUrl: './pokedex-index.scss'
})
export class PokedexIndex {

  private readonly _pokemonService: PokemonService = inject(PokemonService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);

  pokemonResult!: PokemonResult;
  pokemonDetail?: PokemonDetailModel;

  idInput?: number;

  constructor() {

    this._ar.data.subscribe((p: any) => {
      this.pokemonResult = p.resolvedPokemonResult;
    });
  }

  loadPokemons(url: string) {
    this._pokemonService.getPokemons(url).subscribe(
      data => this.pokemonResult = data
    );
  }

  previous() {
    if( !this.pokemonResult.previous){
      return;
    }
    this.loadPokemons(this.pokemonResult.previous)
  }

  next() {
    if( !this.pokemonResult.next){
      return;
    }
    this.loadPokemons(this.pokemonResult.next)
  }

  getPokemon(url: string) {
    this._pokemonService.getPokemonDetail(url).subscribe(
      (data) => this.pokemonDetail = data
    );
  }

  getPokemonById() {
    if(!this.idInput){
      return;
    }
    this._pokemonService.getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${this.idInput}/`).subscribe(
      (data) => this.pokemonDetail = data
    );
  }
}
