import { Routes } from '@angular/router';
import { Home } from './home';
import { Workforce360CaseStudy } from './workforce360-case-study';

export const routes: Routes = [
  { path: '', component: Home, title: 'Snehal Chauhan | .NET Software Developer' },
  { path: 'case-study', component: Workforce360CaseStudy, title: 'Workforce360 Case Study | Snehal Chauhan' },
  { path: '**', redirectTo: '' },
];
