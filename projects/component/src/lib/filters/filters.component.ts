import { Component, Input, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FilterComp, FilterCompType } from '../model/filters.model';
import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'lib-filters',
  standalone: true,
  imports: [InputTextModule,JsonPipe,ReactiveFormsModule,InputNumberModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
  
  @Input() filters: FilterComp[];
  FilterCompType = FilterCompType
  
  ngOnInit(): void {
    
    //Filtros mokeados
    this.filters = [
      {
        label: "Filtro de tipo texto",
        attribute: "productName",
        type: FilterCompType.STRING,
        searchParam: "productName"
      },
       {
        label: "Filtro de tipo number",
        attribute: "productName",
        type: FilterCompType.NUMBER,
        searchParam: "productName"
      }
    ]
  }





  

}
