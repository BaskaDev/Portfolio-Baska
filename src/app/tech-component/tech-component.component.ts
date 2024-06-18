import { Component } from '@angular/core';
import { ProfileComponentComponent } from '../profile-component/profile-component.component';

@Component({
  selector: 'app-tech-component',
  standalone: true,
  imports: [ProfileComponentComponent],
  templateUrl: './tech-component.component.html',
  styleUrl: './tech-component.component.css'
})
export default class TechComponentComponent {

}
