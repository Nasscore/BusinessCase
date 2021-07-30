import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './logicPage/login/login.component';
import { AnnonceComponent } from './logicPage/annonce/annonce.component';
import { AccueilComponent } from './logicPage/accueil/accueil.component';
import { NotreEntrepriseComponent } from '../app/logicPage/notre-entreprise/notre-entreprise.component';
import { ProfilComponent } from '../app/logicPage/profil/profil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BackgroundHeaderComponent } from './components/background-header/background-header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnonceComponent,
    AccueilComponent,
    NotreEntrepriseComponent,
    ProfilComponent,
    NavBarComponent,
    BackgroundHeaderComponent,
    WelcomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
