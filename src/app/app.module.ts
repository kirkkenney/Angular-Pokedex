import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonapiService } from './services/pokemonapi.service';
import { SiblingpokemonComponent } from './components/pokemonlist/siblingpokemon/siblingpokemon.component';
import { GetspecieslangPipe } from './pipes/getspecieslang.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    HeaderComponent,
    SiblingpokemonComponent,
    GetspecieslangPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokemonapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
