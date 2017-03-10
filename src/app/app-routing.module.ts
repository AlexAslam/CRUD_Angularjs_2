import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppViewComponent} from './app-view/app-view.component';
import { AppEditComponent} from './app-edit/app-edit.component';

const routes: Routes = [
  {path: 'view',component:AppViewComponent},
  {path: 'edit',component:AppEditComponent},
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
