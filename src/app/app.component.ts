import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateCitationComponent } from './create-citation/create-citation.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomepageComponent,CreateCitationComponent, FormsModule, NgModule, BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'CitationApp';
}
