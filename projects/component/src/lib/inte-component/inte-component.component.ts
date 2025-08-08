import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config } from '../model/config.model';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'lib-inte-component',
  standalone: true,
  imports: [CommonModule, FiltersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './inte-component.component.html',
  styleUrl: './inte-component.component.css'
})
export class InteComponentComponent implements OnInit {
  @Input() config:Config;

  /** Desde aqui se realizarán se llamara a la configuración de los filtro para mostrar el worklist
   * 
   * 
   * 
   */

  ngOnInit(): void {
    
  }

}
