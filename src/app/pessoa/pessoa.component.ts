import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  unidades: Array<any>;
  pessoas: Array<any>;
  pessoa: any;

  constructor(private service: AppService) { }

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
