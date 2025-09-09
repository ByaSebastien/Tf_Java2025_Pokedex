import {Component, inject, input, output, signal, Signal, WritableSignal} from '@angular/core';
import {PokemonResult} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList {

  pokemonResult = input.required<PokemonResult>();
  previous = output();
  next = output();
  selectPokemon = output<string>();
}
