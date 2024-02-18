import { Component } from '@angular/core';

@Component({
  selector: 'agro-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.scss'
})
export class PlantComponent {
  plant =     {
    //  o nome virá do objeto que representa um
    //  elemento concreto no mundo real
    name: 'laranjeira do bairro',
    //  imagem associada no registro original ou
    //  então o primeiro comentário com imagem
    image: '',
    lists: [
      {
        name: 'laranjeiras',
        author: 'pedrinho'
      },
      
      {
        name: 'laranjeiras belo horizonte',
        author: 'joãozinho'
      },
      
      {
        name: 'citricas',
        author: 'ananias'
      },
      
      {
        name: 'citrus sinensis',
        author: 'agroflorestando'
      }
    ],

  };
}
