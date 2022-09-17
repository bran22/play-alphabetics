import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { StoreModule } from '@ngrx/store';
import { settingsFeature } from './store/settings.reducer';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(settingsFeature),
    // EffectsModule.forFeature([]),
  ]
})
export class SettingsModule { }
