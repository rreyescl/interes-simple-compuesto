
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  totalSimple: number = 0;
  totalCompuesto: number = 0;
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      capital: [0],
      interes: [0],
      periodo: [0]
    });
   }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe((value) => {
      console.log('value ',value);
      let i = parseFloat(value.interes)/100;
      this.totalSimple = Math.round(parseFloat(value.capital)*((1+parseInt(value.periodo))*i));
      this.totalCompuesto =  Math.round(parseFloat(value.capital)*Math.pow( (1+i),parseInt(value.periodo)));

    });
  }

}
