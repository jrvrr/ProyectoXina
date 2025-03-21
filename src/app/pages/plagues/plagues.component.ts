import { Component, OnInit } from '@angular/core';
import { Plaga } from '../../interfaces/plaga.interface';
import { PlagasService } from '../../services/plagas.service';

@Component({
  selector: 'app-plagues',
  standalone: false,
  templateUrl: './plagues.component.html',
  styleUrl: './plagues.component.css'
})
export class PlaguesComponent implements OnInit {
  plagas: Plaga[] = [];

  constructor(private plagasService: PlagasService) {}

  ngOnInit(): void {
    this.plagasService.getPlagas().subscribe((plagas) => {
      this.plagas = plagas;
    });
  }
}
