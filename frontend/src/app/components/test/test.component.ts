import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges{

  @Input() foo? : number;
  @Input() koo? : number;
  @Input() lista? : string[];
  @Input() listaDos? : string[];
  @Input() inpReg? : string;
  @Input() comunas? : string;


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
