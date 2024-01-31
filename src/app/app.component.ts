import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent} from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {  AboutComponent} from './about/about.component';
import { CardsComponent} from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , NavComponent , FooterComponent , BodyComponent ,  
    AboutComponent ,  CardsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
