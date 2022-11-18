import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentLibraryComponent } from './component-library.component';

const routes: Routes = [{ path: '', component: ComponentLibraryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibraryRoutingModule { }
