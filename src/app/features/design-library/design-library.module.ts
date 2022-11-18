import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLibraryRoutingModule } from './design-library-routing.module';
import { DesignLibraryComponent } from './design-library.component';


@NgModule({
  declarations: [
    DesignLibraryComponent
  ],
  imports: [
    CommonModule,
    DesignLibraryRoutingModule
  ]
})
export class DesignLibraryModule { }
