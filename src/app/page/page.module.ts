import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper'; 
import {MatNativeDateModule} from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageRoutingModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MaterialModule,
    MaterialModule,
    MatStepperModule, 
    MatNativeDateModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PageModule { }
