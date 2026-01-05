import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html'
})
export class CadastroProdutoComponent implements OnInit {
  // Objeto que armazena os dados do formulário
  produto: any = { nome: '', descricao: '', preco: null, imagem: '' };
  
  // Variável auxiliar para facilitar a digitação do nome da imagem
  imagemNome: string = '';
  editando: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Verifica se existe um ID na URL (se existir, estamos editando)
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true;
      this.produtoService.getProdutoById(id).subscribe(res => {
        this.produto = res;
        // Remove o prefixo "assets/" para exibir apenas o nome no campo de texto
        this.imagemNome = this.produto.imagem.replace('assets/', '');
      });
    }
  }

  // Função para montar o caminho completo da imagem
  atualizarCaminhoImagem() {
    this.produto.imagem = `assets/${this.imagemNome}`;
  }

  salvar() {
    if (this.editando) {
      this.produtoService.updateProduto(this.produto).subscribe(() => {
        alert('Jogo atualizado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    } else {
      this.produtoService.addProduto(this.produto).subscribe(() => {
        alert('Jogo cadastrado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    }
  }
}