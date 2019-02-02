import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { expectedUserLevel: 0 } },
  { path: 'contact', component: ContactComponent },
  // { path: 'blog/:slug', component: BlogPostComponent },
  // { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
