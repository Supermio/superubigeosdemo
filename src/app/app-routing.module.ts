import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'form1',
    loadChildren: './form1/form1.module#Form1Module'
  },
  {
    path: 'form2',
    loadChildren: './form2/form2.module#Form2Module'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
