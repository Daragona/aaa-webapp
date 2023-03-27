import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-createvote',
  templateUrl: './createvote.component.html',
  styleUrls: ['./createvote.component.css']
})
export class CreatevoteComponent {
  constructor(private web3: Web3Service) { }

  box1name = 'Angular';
  box2name = 'Angular2';

  Character(value: string) {
  this.box1name="print this for box1 :" + value;
  console.log(this.box1name);
}

  onEnter(value: string) {
  this.box2name="print this for box2: " + value;
  console.log(this.onEnter);
}

async CreateVotation() {
  this.web3.newVotation();
}
 
async getInfoVotation(){
}
}
