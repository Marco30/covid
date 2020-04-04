import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/MainView', pathMatch: 'full'},
  { path: 'MainView', loadChildren: () => import('./main-view/main-view.module').then(m => m.MainViewModule) },
  { path: 'Menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'Info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'AboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
