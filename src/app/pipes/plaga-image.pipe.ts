import { Pipe, PipeTransform } from '@angular/core';
import { Plaga } from '../interfaces/plaga.interface'; // Asegúrate de que la ruta sea correcta

@Pipe({
  name: 'plagaImage',
  standalone: false
})
export class PlagaImagePipe implements PipeTransform {

  transform(plaga: Plaga): string {
    // Si no hay ID ni imagen alternativa, devuelve la imagen por defecto
    if (!plaga.id && !plaga.imagen) {
      return 'assets/no-image.png'; // Ruta de la imagen por defecto
    }

    // Si hay una imagen alternativa, devuélvela
    if (plaga.imagen) {
      return plaga.imagen;
    }

    // Si no hay imagen alternativa, devuelve la imagen basada en el ID
    return `assets/plagas/${plaga.id}.jpg`; // Ruta de la imagen basada en el ID
  }

}