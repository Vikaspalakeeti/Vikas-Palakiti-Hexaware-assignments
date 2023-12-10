// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { FrontendComponent } from './components/frontend/frontend.component';

// const routes: Routes = [
//   { path: 'frontend', component: FrontendComponent },
//   // Other routes...
//   { path: '', redirectTo: '/frontend', pathMatch: 'full' }, // Redirect to 'frontend'
//   { path: '**', component: NotFoundComponent } // Handle 404
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './components/frontend/frontend.component';

const routes: Routes = [
  { path: 'frontend', component: FrontendComponent },
  // Other routes...
  { path: '', redirectTo: '/frontend', pathMatch: 'full' }, // Redirect to 'frontend'
  { path: '**', redirectTo: '/frontend' }, // Redirect to 'frontend' for unknown routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







