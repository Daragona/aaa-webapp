import { Component } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-viewvote',
  templateUrl: './viewvote.component.html',
  styleUrls: ['./viewvote.component.css']
})
export class ViewvoteComponent {
  public  Votazione : string | any; 
  htmlToAdd: string | undefined;

  constructor(private web3: Web3Service) { }
  list: string[] = [];
  async viewVotations(){
  let list = document.getElementById("list");
  if(list!=null) list.innerHTML='';

  for(let i=0;i<10;i++){
      let [title,option,voto]= await this.web3.viewVotation(i);
    if(title=="") title="-Titolo assente-";
    const h2=document.createElement("h2");
    h2.textContent=title;
    list?.appendChild(h2);

    const table = document.createElement("table");
    table.setAttribute("border","1px");
    const thead = document.createElement("thead");
    for(let i=0;i<option.length;i++){
      let td=document.createElement("td");
      td.textContent=option[i];
      thead?.appendChild(td);
    }
    const tbody = document.createElement("tbody");
    for(let i=0;i<voto.length;i++){
      let td=document.createElement("td");
      td.textContent=voto[i];
      tbody?.appendChild(td);
    }

    table?.appendChild(thead);
    table?.appendChild(tbody);
    list?.appendChild(table);
    
  }
  }
/*<tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>*/
  createRange(number: string){
    var items: number[] = [];
    for(var i = 1; i <= parseInt(number); i++){
       items.push(i);
    }
    return items;
  }
}
