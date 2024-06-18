import { Component } from '@angular/core';
import { MeComponentComponent } from '../me-component/me-component.component';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [MeComponentComponent],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.css'
})
export  class ProfileComponentComponent {

  goToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/jhon-alexander-hernandez-bernal-baska/';
  }

  goToSuperprof(){
    window.location.href= 'https://www.superprof.co/estudiante-ingenieria-sistemas-7mo-semestre-desarrollador-full-stack-java-spring-react-apasionado-por-ensenar.html';
  }

  goToGitHub(){
    window.location.href= 'https://github.com/BaskaDev';
  }
  goToYoutube(){
    window.location.href= 'https://www.youtube.com/channel/UCoL2McJfiCqo46WZQgCcdYQ';
  }
}
