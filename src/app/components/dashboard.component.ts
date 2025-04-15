import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
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
    responsive:true
  }

  barChartType: ChartType = 'bar';
  toggleChartType(){
    this.barChartType = this.barChartType === 'bar' ? 'pie' : 'bar';
  }

  barChartData = {
    labels: KPIS.chartData.labels,
    datasets: [
      {
        data: KPIS.chartData.values,
        label: 'Vendas (R$)',
        backgroundColor: '#1976d2',
      },
    ],
  };
}
