import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionPageComponent } from './admission/admission-page/admission-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
