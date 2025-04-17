import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType, plugins } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { KPIS } from '../data/kpis';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  kpis = KPIS;
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: (chart) => {
            if (this.barChartType === 'pie') {
              const dataset = chart.data.datasets[0];
              return chart.data.labels!.map((label: any, i: number) => ({
                text: label,
                fillStyle: (dataset.backgroundColor as string[])[i],
                strokeStyle: (dataset.backgroundColor as string[])[i],
                lineWidth: 1,
                index: i,
              }));
            } else {
              return [];
            }
          },
          color: '#01579b',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  barChartType: ChartType = 'bar';
  toggleChartType() {
    this.barChartType = this.barChartType === 'bar' ? 'pie' : 'bar';
  }

  barChartData = {
    labels: KPIS.chartData.labels,
    datasets: [
      {
        data: KPIS.chartData.values,
        label: 'Vendas (R$)',
        backgroundColor: [
          '#8bc34a', // Verde limão suave
          '#ff9800', // Laranja vibrante
          '#e91e63', // Rosa choque
          '#3f51b5', // Azul profundo
          '#9c27b0', // Roxo intenso
        ],
      },
    ],
  };
}
