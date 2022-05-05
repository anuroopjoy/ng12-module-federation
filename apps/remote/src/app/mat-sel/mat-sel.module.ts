import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelComponent } from './mat-sel.component';
import { REMOTE_ROUTES } from './remote.routes';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MatSelComponent],
  imports: [
    RouterModule.forChild(REMOTE_ROUTES),
    MatSelectModule,
    CommonModule,
  ],
  providers: [],
  exports: [MatSelComponent],
})
export class MatSelModule {}
