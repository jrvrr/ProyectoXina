import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlagasService } from '../../services/plagas.service'; // Asegúrate de que la ruta sea correcta
import { Plaga } from '../../interfaces/plaga.interface'; // Asegúrate de que la ruta sea correcta
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plaga-detail',
  templateUrl: './plaga-detail.component.html',
  styleUrls: ['./plaga-detail.component.css'],
  standalone:false
})
export class PlagaDetailComponent implements OnInit {
  plaga!: Plaga; // Almacena la información de la plaga

  constructor(
    private activatedRoute: ActivatedRoute, // Para obtener el ID de la plaga de la URL
    private plagasService: PlagasService, // Servicio para obtener la plaga
    private router: Router // Para navegar a otras rutas
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la plaga de la URL y cargar la información
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.plagasService.getPlagaById(id)) // Obtener la plaga por ID
      )
      .subscribe((plaga: Plaga | undefined) => {
        if (!plaga) return this.router.navigate(['/plagas']); // Si no existe, redirigir al listado
        this.plaga = plaga;
        return;
      });
  }

  // Método para regresar al listado de plagas
  goBack(): void {
    this.router.navigate(['/plaga']);
  }
}