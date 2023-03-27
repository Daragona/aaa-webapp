import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';
//import { generateCommitment } from '../../../../aaa/src/zktree'
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
    console.log("dio");

    this.htmlToAdd = '<div class="two">two</div>';

    let nulli,secret,commit,hash;
    /*nulli=(await generateCommitment()).nullifier;
    secret=(await generateCommitment()).secret;
    commit=(await generateCommitment()).commitment;
    hash=(await generateCommitment()).nullifierHash;
    this.commitment=nulli+secret+commit+hash;
    */
  }
}
