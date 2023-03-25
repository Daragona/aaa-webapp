import { Component } from '@angular/core';
import { Web3Service } from './web3.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webappmodular';

  constructor(private web3: Web3Service,private router: Router) { }


  async ConnectMetamask() {
    this.web3.ConnectWallet();
  }
}
