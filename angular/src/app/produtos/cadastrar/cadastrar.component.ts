import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private cadastro: CadastroService, private router: Router) { }

  ngOnInit(): void { }

  salvarProduto() {
    this.cadastro.produtoIncluir(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

}
