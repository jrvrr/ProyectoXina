import { Component, OnInit } from '@angular/core';

import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit{

  colorSchemeTemp = 'cool';  // O usa otros disponibles como 'vivid', 'natural'
colorSchemeLight = 'flame';

tempValue = 26; // Si ya existe, renómbralo o usa `tempData` en su lugar.
lightValue = 78;

  tempData = [
    {
      "name": "Temperature",
      "value": 23
    }
  ];
  
  lightData = [
    {
      "name": "Lights Intensity",
      "value": 78
    }
  ];
  
  spendingData = [
    { name: 'Jun', value: 120 },
    { name: 'Jul', value: 150 },
    { name: 'Aug', value: 180 }
  ];

  consumptionData = [
    { name: 'Kitchen', value: 30 },
    { name: 'Studio', value: 50 },
    { name: 'Garden', value: 20 }
  ];

  currentDateTime: string = '';

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  
}
