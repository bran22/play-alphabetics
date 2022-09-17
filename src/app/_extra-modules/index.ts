import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// stashing the StoreDevtoolsModule in here, so that it can be excluded from PROD builds following this recipe:
// https://ngrx.io/guide/store-devtools/recipes/exclude
export const ExtraModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 50, // how many states to retain
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }),
];
