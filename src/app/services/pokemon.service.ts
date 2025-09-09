import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonDetailModel, PokemonResult} from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _http: HttpClient = inject(HttpClient);

  getPokemons(url : string){
    return this._http.get<PokemonResult>(url);
  }

  getPokemonDetail(url : string){
    return this._http.get<PokemonDetailModel>(url);
  }
}
