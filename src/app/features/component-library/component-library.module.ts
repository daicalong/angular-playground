import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLibraryRoutingModule } from './component-library-routing.module';
import { ComponentLibraryComponent } from './component-library.component';


@NgModule({
  declarations: [
    ComponentLibraryComponent
  ],
  imports: [
    CommonModule,
    ComponentLibraryRoutingModule
  ]
})
export class ComponentLibraryModule { }
