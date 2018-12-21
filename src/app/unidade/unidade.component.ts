import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

  unidades: Array<any>;
  unidade: any;
  constructor(private service: AppService) { }

  ngOnInit() {

    this.unidade = {};
    
    this.service.listarUnidade()
    .subscribe(resposta => this.unidades = resposta);
  }

  criarUnidade(frm: FormGroup){ 
  this.service.criarUnidade(this.unidade).subscribe(resposta => {
  this.unidades.push(resposta);

  frm.reset();
    });
  }


  listarUnidade(){
  this.service.listarUnidade().subscribe(resposta => this.unidades = resposta);
  }
}
