import { Component,OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-createvote',
  templateUrl: './createvote.component.html',
  styleUrls: ['./createvote.component.css']
})
export class CreatevoteComponent {
  constructor(private web3: Web3Service) { }
  passengersData: string[] = ["opz1","opz2","","","","","","","",""];

async CreateVotation(title: string, num : string) {
  console.log(this.passengersData)
  await this.web3.newVotation(title,parseInt(num),this.passengersData);
}
 


createRange(number: string){
  var items: number[] = [];
  for(var i = 1; i <= parseInt(number); i++){
     items.push(i);
  }
  return items;
}

}
