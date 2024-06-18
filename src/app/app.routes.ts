import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'' ,
    loadComponent :() => import ('./stack-component/stack-component.component') 
}

];
