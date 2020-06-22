import { Component } from "@angular/core";

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html'
})

export class CategoriaComponent {
    constructor(){

    }
  

    public aluguel: boolean = false;
    public condominio: boolean = false;
}
 