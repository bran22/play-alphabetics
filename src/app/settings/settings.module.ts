import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { StoreModule } from '@ngrx/store';
import { settingsFeature } from './store/settings.reducer';
import { ClarityModule } from '@clr/angular';
import { RestrictNumericDirective } from '~shared/restrict-numeric.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent,
    RestrictNumericDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    StoreModule.forFeature(settingsFeature),
    // EffectsModule.forFeature([]),
  ]
})
export class SettingsModule { }
