import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';
import { create } from 'domain';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private web3: Web3Service, private fb:FormBuilder) { }

  
  ngOnInit(): void {

    this.createmenu();
  }

  async createmenu(){
    const select = document.getElementById("mySelect");
    if(select==null) return;
    for(let i=0;i<10;i++){
      let [title,option,voto]= await this.web3.viewVotation(i);
      if(title=="") title="-Titolo assente-";
        const newOpt = document.createElement("option");
      newOpt.value =i.toString();
      newOpt.text = title;
      select.appendChild(newOpt);

    }

    
  }
  boxname = "";
  result="";


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
