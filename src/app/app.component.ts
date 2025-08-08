import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WorklistComponent, InteComponentComponent } from '../../projects/component/src/public-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InteComponentComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scp-components';
  data: any;

  constructor(private httpClient:HttpClient){

  }
  ngOnInit(): void {
    //Obtenemos la configuración para mostrar
    this.httpClient.get('../assets/config/config-worklist-products.json').subscribe(data=>{
      console.log(data)
    })
  }

  

  


}
