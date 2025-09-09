import {Component, input} from '@angular/core';
import {PokemonDetailModel} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss'
})
export class PokemonDetail {

  pokemonDetail = input<PokemonDetailModel>();
}
