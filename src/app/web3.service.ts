import { Injectable, Provider } from '@angular/core';
import { WalletService } from './wallet.service';
import Web3 from 'web3';
import { provider } from 'web3-core';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
    private provider!: provider;
  private address!: string[];
  private web3WalletProvider: Web3;
  private m_wallet: WalletService;
  private readonly infuraHTTPProvider: string =
    'https://sepolia.infura.io/v3/1caadfe504ce4531b041de4bc8927ceb';
  private walletConnected: boolean = false;

  constructor() {
    this.m_wallet = new WalletService();
    this.web3WalletProvider = new Web3(
      new Web3.providers.HttpProvider(this.infuraHTTPProvider)
    );

    this.IsWalletConnected();
  }

  public getAddress() {
    return this.address[0];
  }

  public async getBalance() {
    const balance = await this.web3WalletProvider.eth.getBalance(this.address[0]);
    return Web3.utils.fromWei(balance);
  }

  async IsWalletConnected() {
    this.walletConnected = await this.m_wallet.isConnected();
    if (this.walletConnected) {
      this.ConnectWallet();
    }
  }

  async ConnectWallet() {
    this.provider = await this.m_wallet.Connect();
    if (this.provider) {
      this.web3WalletProvider = new Web3(this.provider);
      this.address = await this.web3WalletProvider.eth.getAccounts();
      console.log(this.address[0]);

      const balance = await this.web3WalletProvider.eth.getBalance(
        this.address[0]
      );

      this.walletConnected = true;
      console.log(Web3.utils.fromWei(balance));
    }
  }

  async newVotation(){
    
  }

  
}

