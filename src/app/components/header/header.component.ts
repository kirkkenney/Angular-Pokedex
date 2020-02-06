import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchValue = '';

  // Output event is called on the searchPokemon method
  // this emits an event up to the parent component, sending the searchedPokemon
  // data with it. From the parent component, it is then passed down to 
  // pokemonlistComponent to fetch/display results from HTTP request
  @Output() sendPokemonSearch = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  // method is called from HTML, passing in the search field value
  // @Output event above is then called, emitting data up to parent
  // and then down to pokemonlistComponent
  searchPokemon(searchVal: string) {
    if (searchVal.length === 0) {
      return
    }
    this.searchValue = searchVal;
    this.sendPokemonSearch.emit(this.searchValue);
  }

}
