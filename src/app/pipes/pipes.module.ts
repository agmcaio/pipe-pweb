import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { NumberPipe } from './pipe/number.pipe';



@NgModule({
  declarations: [CpfPipe, NumberPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    NumberPipe
  ]
})
export class PipesModule { }
