import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.css']
})
export class UpdatePessoaComponent implements OnInit {

  codigo: number;
  pessoa: Pessoa;
  constructor(private service: AppService,private route: ActivatedRoute ,private router: Router,) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.codigo = this.route.snapshot.params['codigo']; 

    this.service.getPessoa(this.codigo).subscribe(resposta => {
      console.log(resposta)
      this.pessoa = resposta;
    }, error => console.log(error));

  }

  update(){
    this.service.updatePessoa(this.codigo, this.pessoa).subscribe(resposta =>{
      console.log(resposta), error => console.log(error);
      this.pessoa = new Pessoa();
      this.gotoList();
    })

  }
  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['']);
  }

   
   


}
