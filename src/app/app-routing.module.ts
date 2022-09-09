import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PadreComponent } from './components/padre/padre.component';

// creamos el modulo de ruteo
//  ng g module --route comprar
// le agregamos el compnente  principal
//  ng g component comprar --module comprar

const routes: Routes = [
{path : 'comprar', loadChildren: () => import('./comprar/comprar.module').then(p=>p.ComprarModule)},
    {path:'padre',  component:PadreComponent},
    {path:'**', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
