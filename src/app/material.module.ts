import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

  @NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatButtonModule
    ]
  })
  export class MaterialModule {}
