import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaProdutos: Produto[]

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == "")
    {
      alert("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
  }

}
