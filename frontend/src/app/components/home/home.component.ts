import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  title = "Detecting Property changes in ngOnChanges";
  foo = 9;
  koo = 12;

  inputRegion:string = "";

  lista:string[] = ["Santiago"];
  listaDos:string[] = ["Temuco"];
  listaTres:string[] = ["Santiago"];

  regiones:string[] = ["Metropolitana", "Araucania", "Coquimbo", "Antofagasta", "BioBío", "Los Lagos"];
  listaVacia:string[] = [];
  inpReg:string = "";
  comunas:string = "";

  redirect(){
    this.router.navigate(['/sales']);
  }

  changeFoo() {
    this.foo+=1;
  }

  changeKoo() {
    this.koo+=2;
  }

  changeRegion() {
    if(this.inputRegion == "Sur"){
      this.lista = this.listaDos;
    }else if(this.inputRegion == "Metropolitana"){
      this.lista = this.listaTres;
    }
  }

  change() {
    if(this.inpReg == "Araucania"){
      this.comunas = "Temuco"
    }else if(this.inpReg == "Metropolitana"){
      this.comunas = "Santiago";
    }
  }
}
