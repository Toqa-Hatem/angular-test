import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  skills = [
    { name: 'HTML', percentage: "95% "},
    { name: 'CSS', percentage: "95%"  },
    { name: 'JavaScript', percentage: "85%" },
    { name: 'TypeScript', percentage: "80%" }
  ];
}

