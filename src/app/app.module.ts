import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { StoreModule } from '@ngrx/store';
import { gameFeature } from './game/store/game.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './game/store/game.effects';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(gameFeature),
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([GameEffects]),
    LetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
