import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokeModel, PokemonSpeciesModel } from '../pokemonModel';
import { Observable } from 'rxjs';

// In keeping with Angular's architectural philosophy of separating data logic
// from data presentation, this Service makes the HTTP calls to the API, and
// is accessed from the pokemonlistComponent and siblingpokemonComponent.
// The HTTP call returns an Observable, which is cast to a corresponding
// Model (pokemonModel.ts)
@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {

  pokemonBaseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonSpeciesBaseUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) { }

  getPokemon(pokemon): Observable<PokeModel> {
    return this.http.get<PokeModel>(`${this.pokemonBaseUrl}${pokemon}`);
  }
  getPokemonSpecies(pokemon): Observable<PokemonSpeciesModel> {
    return this.http.get<PokemonSpeciesModel>(`${this.pokemonSpeciesBaseUrl}${pokemon}`)
  }
}
