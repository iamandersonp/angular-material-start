import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BaseLayaoutComponent } from './shared/layouts/base-layaout/base-layaout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayaoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
