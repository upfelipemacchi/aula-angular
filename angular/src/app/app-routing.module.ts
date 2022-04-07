import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './produtos/cadastrar/cadastrar.component';
import { EditarComponent } from './produtos/editar/editar.component';
import { ExcluirComponent } from './produtos/excluir/excluir.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProdutosComponent,
    children: [
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'editar', component: EditarComponent },
      { path: 'excluir', component: ExcluirComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
