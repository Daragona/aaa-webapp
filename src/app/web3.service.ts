import { Injectable, Provider } from '@angular/core';
import { WalletService } from './wallet.service';
import Web3 from 'web3';
import { provider } from 'web3-core';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private contractAddress = "0x881037F2cC0A8eADCc3f3C991573b988F052fd91";
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
    if (this.walletConnected) {
      let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
      console.log("nuova");
      const contract = new this.web3WalletProvider.eth.Contract(abi.abi, this.contractAddress);
      
      await contract.methods.newVotation(
        20,
        "0x3034cD9FDE929139399743430dF5fe340E77308d",
        "0xE549DD626C1D1D50d9De5A9c2A452544aB978E4b",
        "Campione di Napoli?",
        2,
        ["Maradona","Messi","","","","","","","",""])
      .send({from: this.address[0]})
      .on('transactionHash', function (hash: any) {
        console.log(hash);
      })
      .on('receipt', function (receipt: any) {
        console.log(receipt+"Done!");
      })
      .on('error', console.error)

    }else console.log("wallet not connected");    
  }

  
  async viewVotation(value : number){
    
    let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
    const contract = new this.web3WalletProvider.eth.Contract(
      abi.abi,
      this.contractAddress
    );
    let title=(await contract.methods.getOneTitle(value).call());
    let opzioni=(await contract.methods.getOneOptions(value).call());
    let voti=(await contract.methods.getOneVoti(value).call());
    return [title, opzioni,voti];
  }

  async addValidator(vote:number, value : string){
  
    if (this.walletConnected) {
      let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
      const contract = new this.web3WalletProvider.eth.Contract(abi.abi, this.contractAddress);
      console.log("1");
      await contract.methods.registerOneValidator(vote, value)
        .send({from: this.address[0]})
        .on('transactionHash', function (hash: any) {
          console.log(hash);
        }).on('receipt', function (receipt: any) {
          console.log(receipt+"Done!");
        }).on('error', console.error)
        console.log("2");

    }else
      console.log("wallet not connected");    

  }

  async addWhitelist(vote:number, value : string){
    
    if (this.walletConnected) {
      let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
      const contract = new this.web3WalletProvider.eth.Contract(abi.abi, this.contractAddress);

      await contract.methods.registerOneWhitelist(vote, value)
        .send({from: this.address[0]})
        .on('transactionHash', function (hash: any) {
          console.log(hash);
        }).on('receipt', function (receipt: any) {
          console.log(receipt+"Done!");
        }).on('error', console.error)

    }else console.log("wallet not connected");    
  }

  async getNumVotazioni(){
    let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
    const contract = new this.web3WalletProvider.eth.Contract(
      abi.abi,
      this.contractAddress
    );
    let num=(await contract.methods.getNumVotazioni().call());
    console.log(num);
    //return num;
  }

  async registerCommitment(vote:number, hash: number, commit: number) {
    if (this.walletConnected) {
      let abi= require('contracts/ZKMapVote.sol/ZkMapVote.json')
      const contract = new this.web3WalletProvider.eth.Contract(abi.abi, this.contractAddress);

      await contract.methods.registerOneCommitment(vote,hash,commit,this.address[0])
        .send({from: this.address[0]})
        .on('transactionHash', function (hash: any) {
          console.log(hash);
        }).on('receipt', function (receipt: any) {
          console.log(receipt+"Done!");
        }).on('error', console.error)

    }else console.log("wallet not connected");    
  }


}

