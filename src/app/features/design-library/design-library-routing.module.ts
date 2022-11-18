import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignLibraryComponent } from './design-library.component';

const routes: Routes = [{ path: '', component: DesignLibraryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignLibraryRoutingModule { }
