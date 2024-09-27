import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [NgIf],
  templateUrl: './busca.component.html',
})
export class BuscaComponent {
  @Output() pesquisaFeita: EventEmitter<string>;
  @Output() limpezaFiltro: EventEmitter<void>;

  public buscaRealizada: boolean;

  constructor() {
    this.pesquisaFeita = new EventEmitter();
    this.limpezaFiltro = new EventEmitter();

    this.buscaRealizada = false;
  }

  public onBuscar(texto: string): void {
    this.buscaRealizada = true;

    this.pesquisaFeita.emit(texto);
  }

  public onLimpar(): void {
    this.buscaRealizada = false;

    this.limpezaFiltro.emit();
  }
}
