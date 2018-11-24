import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component'
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'hello', 
    component: ListUserComponent
},
{
  path: 'edit-user', 
  component: EditUserComponent
},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
