import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

  salvarProduto() {
    this.cadastro.produtoAtualizar(this.produto, this.produto.id).subscribe(() => {
      this.router.navigate(['/produtos/']);
    });
  }

}
