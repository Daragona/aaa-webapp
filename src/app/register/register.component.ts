import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  boxname = "";
  result="";
  constructor(private web3: Web3Service) { }


  addValidator(vote: string, value: string) {
    if(this.check(value)){
      let num :number;
      num=parseInt(vote);
      this.web3.addValidator(num, value);
    }else
    this.result="Indirizzo non valido";
  }

  addWhitelist(vote: string, value: string) {
    if(this.check(value)){
      let num :number;
      num=parseInt(vote);
      this.web3.addWhitelist(num, value);
    }else
    this.result="Indirizzo non valido";

  }

  check(address: string){
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
  }
}
