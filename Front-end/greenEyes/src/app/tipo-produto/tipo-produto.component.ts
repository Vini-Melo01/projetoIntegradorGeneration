import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrls: ['./tipo-produto.component.css']
})
export class TipoProdutoComponent implements OnInit {
  produto: Produto = new Produto
  idProduto:number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute

  ){}

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produto = resp
    })
  }


}
