import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgClass, NgForOf } from '@angular/common';
import { ListagemComponent } from "./components/listagem/listagem.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, NgForOf, NgClass, ListagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
