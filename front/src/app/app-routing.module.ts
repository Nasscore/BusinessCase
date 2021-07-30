import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../app/logicPage/accueil/accueil.component';
import { AnnonceComponent } from '../app/logicPage/annonce/annonce.component';
import { LoginComponent } from '../app/logicPage/login/login.component';
import { NotreEntrepriseComponent } from '../app/logicPage/notre-entreprise/notre-entreprise.component';
import { ProfilComponent } from '../app/logicPage/profil/profil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notreEntreprise', component: NotreEntrepriseComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
