import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';

  public searchPokemon: string;

  pokemonSearch(searchVal: string) {
    this.searchPokemon = searchVal;
  }
}
