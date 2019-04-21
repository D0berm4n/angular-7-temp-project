import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    providers: [ ]
  })
  export class MaterialModule {}
