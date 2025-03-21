import { Component, Input, OnInit } from '@angular/core';
import { Plaga } from '../../interfaces/plaga.interface'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-plaga-card',
  templateUrl: './plaga-card.component.html',
  styleUrls: ['./plaga-card.component.css'],
  standalone:false
})
export class PlagaCardComponent implements OnInit {
  @Input() public plaga!: Plaga; // Recibe la plaga como entrada desde el componente padre

  ngOnInit(): void {
    if (!this.plaga) throw Error('La propiedad "plaga" es requerida');
  }
}