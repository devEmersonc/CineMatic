import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }


  regiones:string[] = ["Metropolitana", "Araucania", "Coquimbo", "Antofagasta", "BioBío", "Los Lagos"];
  inpReg:string = "";
  comunas:string = "";

  change() {
    if(this.inpReg == "Araucania"){
      this.comunas = "Temuco"
    }else if(this.inpReg == "Metropolitana"){
      this.comunas = "Santiago";
    }
  }

  redirect() {
    this.router.navigate(['/tickets']);
  }
}
