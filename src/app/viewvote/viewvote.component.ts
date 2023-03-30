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
    let oldVotazione="1";
    let tmpVotazione="";
    let i=0;
    while( tmpVotazione!=oldVotazione){
      this.Votazione+=" Votazione "+(i-1)+": " + tmpVotazione;
      oldVotazione=tmpVotazione;
      tmpVotazione+= await this.web3.viewVotation(i);

      i++;
    }
    
    /*
    this.Votazione="";
    let num=await this.web3.getNumVotazioni();

    this.Votazione="Num";
    /*if(num==0) this.Votazione="Nessuna votazione presente";
    else 
    for(let i=0;i<num;i++){
      this.Votazione+=" Votazione "+(i)+await this.web3.viewVotation(i);
    }*/
  }
}
