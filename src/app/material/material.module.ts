import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class MaterialModule { }
