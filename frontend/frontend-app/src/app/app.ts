import {Component, inject, OnInit} from '@angular/core';
import {httpClient} from '@angular/cammom/http';
import { bootstrapApplication} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/cammom/http';
import { CamomModule } from 'angular/camon';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template:`
    <h1> Mensagem da API </h1>
    <ul>
    <li *ngFor=" let m of mensagens"> {{m.texto}} </li>
    `
    ,
})
export class AppComponent implements OnInit {
  mensagem: any [] = [];
  http = inject (HttpClient);

  ngOnInit
  {
    this.http.get<any[]>('https://bug-free-waffle-v9g7g6gv64p36wqv-8000.app.github.dev')
    .subscribe(data => this.mensagem = data);

    }
}

bootstrapAppApplication(AppComponent, {
  providers: [provideHttpClient()]
})