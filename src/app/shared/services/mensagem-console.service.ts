import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem {

  constructor() { super() }

  erro(mensagem: string): void {
    console.log('error');
  }

  info(mensagem: string): void {
  }

  sucesso(mensagem: string): void {
    console.log('sucesso');
  }
}
