import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-viewvote',
  templateUrl: './viewvote.component.html',
  styleUrls: ['./viewvote.component.css']
})
export class ViewvoteComponent implements OnInit{
  public  Votazione : string | any; 
  htmlToAdd: string | undefined;

  constructor(private web3: Web3Service) { 
  }

  ngOnInit(){

    this.viewVotations() ;

  }

  list: string[] = [];
  async viewVotations(){
    let list = document.getElementById("list");
    if(list!=null) list.innerHTML='';

    for(let i=0;i<10;i++){
      const div=document.createElement("div");
      div.style.borderRadius="5px";
      div.style.boxShadow= "0 2px 4px rgba(1,1,1,1)";
      div.style.padding="20px";
      div.style.margin="auto";
      div.style.marginBottom="20px";
      //div.style.width="80%";
    

      let [title,option,voto]= await this.web3.viewVotation(i);
      if(title=null) return;
      if(title=="") title="-Titolo assente-";
      
      list?.appendChild(div);

      const h2=document.createElement("h2");
      h2.textContent=title;
      h2.style.textAlign="center";
      h2.style.fontSize="1.1em";
      div?.appendChild(h2);
      const table = document.createElement("table");
      table.setAttribute("border","1px");
      table.style.margin="auto";  
    
      const thead = document.createElement("thead");
      thead.style.backgroundColor="#4CAF50";
      thead.style.color="white";
      thead.style.fontWeight="bold";
      for(let i=0;i<option.length;i++){
        let td=document.createElement("td");
        td.textContent=option[i];
        td.style.padding="15px";
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
      div?.appendChild(table);
      
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
