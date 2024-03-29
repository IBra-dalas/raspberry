import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'user', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
            
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
