//Imports Necesarios
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { PointsComponent } from './components/points/points.component';


//definir rutas

const routes: Routes = [
           {path:'',redirectTo:'/home',pathMatch:'full'},
           {path:'home', component:HomeComponent},
           {path: 'register', component: RegisterComponent},
           {path: 'login', component: LoginComponent},
           {path: 'puntos', component: PointsComponent},
           {path: '**', component: ErrorComponent},

];onent:HomeComponent

//exportar todo para que se tome por parte ANGULAR

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }