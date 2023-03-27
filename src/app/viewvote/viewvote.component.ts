import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-viewvote',
  templateUrl: './viewvote.component.html',
  styleUrls: ['./viewvote.component.css']
})
export class ViewvoteComponent {
  public  Votazione : string | any; 

  constructor(private web3: Web3Service) { }


  async viewVotations(){
    this.Votazione="";
    let num=await this.web3.getNumVotazioni();
    for(let i=0;i<num;i++){
      this.Votazione+=" Votazione "+(i)+await this.web3.viewVotation(i);
    }

    
  }
}
