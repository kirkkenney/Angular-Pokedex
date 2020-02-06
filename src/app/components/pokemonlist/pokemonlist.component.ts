import { Component, OnInit, Input } from '@angular/core';
import { PokemonapiService } from '../../services/pokemonapi.service';
import { PokeModel, PokemonSpeciesModel } from '../../pokemonModel';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  // pokemon and pokemonSpecies properties are used to hold the data
  // from API calls
  public pokemon: PokeModel;
  public pokemonSpecies: PokemonSpeciesModel;

  // randomPokemon is assigned a random integer on the ngOnInit method,
  // used to generate a random Pokemon listing on page load
  public randomPokemon: number;

  // hex values for the different Pokemon types. These are dynamically
  // applied as background colours 
  pokemonTypes: {} = {'bug': '#A8B820', 'dark': '#705848', 'dragon': '#7038F8', 'electric': '#F8D030', 'fairy': '#EE99AC', 'fighting': '#C03028', 'fire': '#F08030', 'flying': '#A890F0', 'ghost': '#705898', 'grass': '#78C850', 'ground': '#E0C068', 'ice': '#98D8D8', 'normal': '#A8A878', 'poison': '#A040A0', 'psychic': '#F85888', 'rock': '#B8A038', 'steel': '#B8B8D0', 'water': '#6890F0'};

  // receivedPokemon = data received from child siblingPokemonComponent
  receivedPokemon: PokeModel;
  error: string = '';

  // @Input binding receives data from the HeaderComponent search field
  @Input() searchedPokemon: string;

  // pokeApi is a shared Angular Service that makes the HTTP calls to the 
  // Pokedex API
  constructor(private pokeApi: PokemonapiService) { }

  // on page load, generate a random integer, and fetch the corresponding
  // Pokemon from the API
  ngOnInit() {
    let rand = Math.floor(Math.random()*807);
    this.randomPokemon = rand;
    this.getPokemon(this.randomPokemon);
  }

  // detech changes in the HeaderComponent (search field) and update
  // Pokemon listing accordingly
  ngOnChanges() {
    if (!this.searchedPokemon) {
      return
    }
    this.getPokemon(this.searchedPokemon);
  }

  // main method to update the Pokemon displayed in the main listing
  getPokemon(pokemon) {
    this.pokeApi.getPokemon(pokemon).subscribe(data => this.pokemon = data, error => window.alert('An error ocurred'));
    this.pokeApi.getPokemonSpecies(pokemon).subscribe(data => this.pokemonSpecies = data);
  }

  // method called in the template via the [ngStyle] attribute directive
  // to return hex values for the corresponsing Pokemon type
  getPokemonTypeColor(type: string) {
    return this.pokemonTypes[type];
  }

  // method to receive data from the siblingpokemonComponent when
  // prev or next Pokemon cards are clicked
  getPokemonFromChild(pokemon: PokeModel) {
    this.receivedPokemon = pokemon;
    this.pokemon = this.receivedPokemon;
    this.getPokemon(this.pokemon['id']);
  }

}
