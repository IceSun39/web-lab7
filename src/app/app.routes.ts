import { Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals';
import { ArrayOne } from './array-one/array-one';
import { ArrayTwo } from './array-two/array-two';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lab6' },
  { path: 'lab6', component: AnimalsComponent },
  { path: 'array-one', component: ArrayOne },
  { path: 'array-two', component: ArrayTwo },
  { path: '**', redirectTo: 'lab6' },
];
