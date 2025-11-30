import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Tarea } from '../models/Tarea.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-kanban',
  imports: [CdkDropListGroup,CdkDropList, CdkDrag ],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})
export class Kanban {
  todo: Tarea[] = [
    { titulo: 'Sacar la basura', descripcion: 'Saca la basura' },
    { titulo: 'Dar de comer al gato', descripcion: 'El gato esta habriento' },
    { titulo: 'Limpia la estanteria', descripcion: 'Está llena de polvo' },
    { titulo: 'Compra vino', descripcion: 'Hace falta comprar vino' }
  ];

  doing: Tarea[] = [
    { titulo: 'Pintar la valla', descripcion: 'Hay que pintar la valla de afuera' },
    { titulo: 'Quitar las manchas de la encimera', descripcion: 'La encimera está sucia' }
  ];

  done: Tarea[] = [
    { titulo: 'Hacer la cena', descripcion: 'Cocina algo' },
    { titulo: 'Regar las plantas', descripcion: 'Hace falta regar las plantas' },
    { titulo: 'Fregar el suelo de la cocina', descripcion: 'Limpia y desinfecta el suelo de la cocina' },
    { titulo: 'Ordenar la despensa', descripcion: 'L a despensa está sumamente desordenada' }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  mostrarDescripcion(tarea: Tarea) {
    Swal.fire(tarea.descripcion);
  }

}
