import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ContentComponent } from './content/content.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SuccessComponent } from './success/success.component';



const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'',component:ContentComponent},
  {path:'Home',component:ContentComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'success',component:SuccessComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
