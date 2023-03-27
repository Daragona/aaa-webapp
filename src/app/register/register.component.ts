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
    let num :number;
    num=parseInt(vote);
    this.web3.addValidator(num, value);

    this.result= "Fatto DajeRoma";
  }

  addWhitelist(vote: string, value: string) {
    let num :number;
    num=parseInt(vote);
    this.web3.addWhitelist(num, value);

    this.result= "Fatto DajeRoma";
  }
}
