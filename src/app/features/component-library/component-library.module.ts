import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLibraryRoutingModule } from './component-library-routing.module';
import { ComponentLibraryComponent } from './component-library.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentLibraryComponent
  ],
  imports: [
    CheckboxModule,
    RadioButtonModule,
    CommonModule,
    ComponentLibraryRoutingModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentLibraryModule { }
