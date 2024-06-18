import { Component } from '@angular/core';
import { ProfileComponentComponent } from '../profile-component/profile-component.component';
import TechComponentComponent from '../tech-component/tech-component.component';

@Component({
  selector: 'app-stack-component',
  standalone: true,
  imports: [TechComponentComponent,ProfileComponentComponent],
  templateUrl: './stack-component.component.html',
  styleUrl: './stack-component.component.css'
})
export default class StackComponentComponent {

}
