import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CourseGuardService } from './course-guard.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
  component:AboutComponent,
  path:'about',
  canActivate:[CourseGuardService]
},
{
  component:UserComponent,
  path:'user/:id'
},
{
  component:HomeComponent,
  path:''
},
{
  component:SearchComponent,
  path:'search'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
