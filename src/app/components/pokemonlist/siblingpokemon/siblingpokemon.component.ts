import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonapiService } from '../../../services/pokemonapi.service';

@Component({
  selector: 'app-siblingpokemon',
  templateUrl: './siblingpokemon.component.html',
  styleUrls: ['./siblingpokemon.component.css']
})
export class SiblingpokemonComponent implements OnInit {

  // Both @Input and @Output bindings are used to receive and send data between 
  // components
  // @Input receives data from the parent pokemonlistComponent, getting 
  // currently selected Pokemon details, and fetching the previous and next
  //  Pokemon from the Pokedex entries in the getSiblingPokemon method
  @Input() pokemonData: Object;
  // @Output binding sends data back to pokemonlistComponent when a previous
  // or next Pokemon card is clicked, updating the main Pokemon entry (via
  // the sendPokemon method)
  @Output() sendPokemonToParent = new EventEmitter<Object>();

  public prevPokemon: Object;
  public nextPokemon: Object;
  currentGameIndex: number;

  // pokeApi is an Angular Service class which handles the API HTTP calls
  // the service is called when the Pokemon listing is updated
  constructor(private pokeApi: PokemonapiService) { }

  ngOnInit() {
    this.getSiblingPokemon();
  }

  ngOnChanges() {
    this.getSiblingPokemon();
  }

  getSiblingPokemon() {
    // get the Pokedex entry for the current Pokemon. If the Pokedex
    // entry is 1 or 807, then prevPokemon and nextPokemon should return
    // null respectively.
    this.currentGameIndex = this.pokemonData['id'];
    if (this.currentGameIndex === 1) {
      this.prevPokemon = null;
    } else {
      this.pokeApi.getPokemon(this.currentGameIndex-1).subscribe(data => this.prevPokemon = data);
    };
    if (this.currentGameIndex === 807) {
      this.nextPokemon = null;
    } else {
      this.pokeApi.getPokemon(this.currentGameIndex+1).subscribe(data => this.nextPokemon = data);  
    }  
  }

  sendPokemon(pokemon: Object) {
    this.sendPokemonToParent.emit(pokemon);
  }

}
