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
          '#2563eb', // Azul principal
          '#10b981', // Verde água (tipo tailwind emerald)
          '#f59e0b', // Amarelo dourado
          '#ef4444', // Vermelho elegante
          '#8b5cf6', // Roxo suave
        ],

        borderWidth: this.barChartType === 'pie' ? 0 : 0.5,
        borderColor: 'black',
      },
    ],
  };
}
