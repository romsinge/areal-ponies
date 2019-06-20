import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
