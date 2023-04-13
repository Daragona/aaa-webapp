import { Component,OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-createvote',
  templateUrl: './createvote.component.html',
  styleUrls: ['./createvote.component.css']
})
export class CreatevoteComponent {
  error : string="";  
  constructor(private web3: Web3Service) { }
  passengersData: string[] = ["","","","","","","","","",""];


  async CreateVotation(title: string, num : string) {
    let no=false;
    if(parseInt(num)>1){
      for(let i=0;i<parseInt(num);i++){
        if(this.passengersData[i]=="") no=true;
      }
      if(!no)
        await this.web3.newVotation(title,parseInt(num),this.passengersData);
      else this.error="Riempire tutti i campi!!";
    }else
    this.error="Inserire almeno 2 opzioni";
  }
  


  createRange(number: string){
    var items: number[] = [];
    for(var i = 1; i <= parseInt(number); i++){
      items.push(i);
    }
    return items;
}

}
