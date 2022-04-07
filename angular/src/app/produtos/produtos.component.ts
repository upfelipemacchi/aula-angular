import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void {

    this.cadastro.produtoListar().subscribe(produtos => {
      this.produtos = produtos;
    });
    
  }

}
