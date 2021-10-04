import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './general/layout/layout.component';
import { TestInputComponent } from './test-input/test-input.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: '',
        loadChildren: () => import('./location/location.module').then(m => m.LocationModule)
      },
      {
        path: '',
        loadChildren: () => import('./auth/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
