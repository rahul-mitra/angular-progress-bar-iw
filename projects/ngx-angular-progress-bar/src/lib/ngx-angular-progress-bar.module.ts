import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProgressBarComponent } from './ngx-angular-progress-bar.component';



@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProgressBarComponent
  ]
})
export class NgxAngularProgressBarModule { }
