import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { StoreModule } from '@ngrx/store';
import { settingsFeature } from './store/settings.reducer';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ClarityModule,
    StoreModule.forFeature(settingsFeature),
    // EffectsModule.forFeature([]),
  ]
})
export class SettingsModule { }
