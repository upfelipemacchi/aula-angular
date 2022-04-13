import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private cadastro: CadastroService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.cadastro.produtoBuscarPorId(Number(str)).subscribe((produto) => {
      this.produto = produto;
    });  
  }

  excluirProduto() {
    this.cadastro.produtoExcluir(this.produto.id).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

}
