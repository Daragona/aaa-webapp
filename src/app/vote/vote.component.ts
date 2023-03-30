import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';
import { generateCommitment } from '../../zktree2';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  htmlToAdd: string="";

  constructor(private web3: Web3Service) { }
  commitment="";

  async getCommit(){
    let vote=0;
    let nulli,secret,commit,hash;

    nulli= await generateCommitment();
    console.log(nulli);
    //this.web3.registerCommitment(vote,hash,commit);
  }
}
