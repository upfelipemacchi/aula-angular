import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3001/produtos";

  produtoListar() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  produtoBuscarPorId(id : number) : Observable<Produto> {
    return this.http.get<Produto>(`${this.URL}/${id}`)
  }

  produtoIncluir(produto : Produto) {
    this.http.post(this.URL, produto);
  }

  produtoAtualizar(produto : Produto, id : number) {
    this.http.put(`${this.URL}/${id}`, produto);
  }

  produtoExcluir(id : number) {
    this.http.delete(`${this.URL}/${id}`);
  }

}
