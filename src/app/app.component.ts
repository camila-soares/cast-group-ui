import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pessoas: Array<any>;
  pessoa: any;

  unidades: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.pessoa = {};

    this.service.listar()
      .subscribe(resposta => this.pessoas = resposta);

      this.service.listarUnidade()
    .subscribe(resposta => this.unidades = resposta);
  }

  criar(frm: FormGroup) {
    this.service.criar(this.pessoa).subscribe(resposta => { 
      this.pessoas.push(resposta);

      frm.reset();
    });
  }

 
}


