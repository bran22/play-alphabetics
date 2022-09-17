import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { ExtraModules } from './_extra-modules';
import { EffectsModule } from '@ngrx/effects';
import { GameModule } from './game/game.module';
import { SettingsModule } from './settings/settings.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    StoreModule.forRoot({}),
    ExtraModules,
    EffectsModule.forRoot([]),
    GameModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
