import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admission-search',
  templateUrl: './admission-search.component.html',
  styleUrls: ['./admission-search.component.css']
})
export class AdmissionSearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.cpfForm = this.formBuilder.group({
      cpf: ['',[Validators.required, Validators.minLength(11), this.validateCPF]]
    })
   }

  cpfForm: FormGroup

  cpfSearchResult = {
    found: false,
    name: 'Mariane de Souza Oliveira',
    situationOk: true
  }

  ngOnInit(): void {
    this.cpfForm.updateValueAndValidity()
  }

  onSubmit(): void {
      this.cpfForm.updateValueAndValidity()
      setTimeout(()=>{
        this.cpfSearchResult.found=this.cpfForm.valid
        console.log(this.cpfForm.get('cpf')?.errors)
      },500)
  }

  validateCPF(control: AbstractControl) {
    let strCPF = control.value
    var Soma = 0;
    if (strCPF.length == 11) {
      if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' ||
        strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' || strCPF === '88888888888' ||
        strCPF === '99999999999' || strCPF.length !== 11) {
        return { invalidCPF: true };
      }
      for (let i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      }

      var Resto = (Soma * 10) % 11;
      if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
      }

      if (Resto !== parseInt(strCPF.substring(9, 10))) {
        return { invalidCPF: true };
      }

      Soma = 0;
      for (let k = 1; k <= 10; k++) {
        Soma = Soma + parseInt(strCPF.substring(k - 1, k)) * (12 - k)
      }

      Resto = (Soma * 10) % 11;
      if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
      }

      if (Resto !== parseInt(strCPF.substring(10, 11))) {
        return { invalidCPF: true };
      }
    }
    return null;
  }

}
