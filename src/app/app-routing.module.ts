import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'design-library',
    loadChildren: () => import('./features/design-library/design-library.module').then(m => m.DesignLibraryModule)
  },
  {
    path: 'component-library',
    loadChildren: () => import('./features/component-library/component-library.module').then(m => m.ComponentLibraryModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
