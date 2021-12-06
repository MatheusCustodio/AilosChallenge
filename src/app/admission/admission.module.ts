import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionHeaderComponent } from './components/admission-header/admission-header.component';
import { AdmissionPageComponent } from './admission-page/admission-page.component';
import { AdmissionStepperComponent } from './components/admission-stepper/admission-stepper.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AdmissionSearchComponent } from './components/admission-search/admission-search.component';
import { AdmissionFooterComponent } from './components/admission-footer/admission-footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    AdmissionHeaderComponent,
    AdmissionPageComponent,
    AdmissionStepperComponent,
    AdmissionSearchComponent,
    AdmissionFooterComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    AdmissionPageComponent
  ]
})
export class AdmissionModule { }
