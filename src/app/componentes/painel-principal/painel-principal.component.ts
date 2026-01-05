import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.produtoService.getProdutos().subscribe(dados => {
      this.produtos = dados;
    });
  }

  excluir(id: number) {
    if(confirm('Deseja realmente excluir este jogo?')) {
      this.produtoService.deleteProduto(id).subscribe(() => {
        this.listar();
      });
    }
  }
}