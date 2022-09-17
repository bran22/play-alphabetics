import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { StoreModule } from '@ngrx/store';
import { settingsFeature } from './store/settings.reducer';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestrictNumericDirective } from '../shared/restrict-numeric.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent,
    RestrictNumericDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    StoreModule.forFeature(settingsFeature),
    // EffectsModule.forFeature([]),
  ]
})
export class SettingsModule { }
