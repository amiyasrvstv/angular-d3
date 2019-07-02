import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LineChartComponent } from './01_line_chart/line-chart.component';
import { MultiSeriesComponent } from './02_multi_series_line_chart/multi-series.component';
import { BarChartComponent } from './03_bar_chart/bar-chart.component';
import { StackedBarChartComponent } from './04_stacked_bar_chart/stacked-bar-chart.component';
import { BrushZoomComponent } from './05_brush_zoom/brush-zoom.component';
import { PieChartComponent } from './06_pie_chart/pie-chart.component';
import { DonutChartComponent } from './07_donut_chart/donut-chart.component';
import { SpeedGuageComponent } from './speed-guage/speed-guage.component';
import { SpeedGuage2Component } from './speed-guage2/speed-guage2.component';
import { SpeedGuage3Component } from './speed-guage3/speed-guage.component';
import { MeterGuageComponent } from './meter-guage/meter-guage.component';
import { BarChartAppComponent } from './bar-chart-app/bar-chart-app.component';

const appRoutes: Routes = [
    { path: 'line-chart', component: LineChartComponent },
    { path: 'multi-series', component: MultiSeriesComponent },
    { path: 'bar-chart', component: BarChartComponent },
    { path: 'stacked-bar-chart', component: StackedBarChartComponent },
    { path: 'brush-zoom', component: BrushZoomComponent },
    { path: 'pie-chart', component: PieChartComponent },
    { path: 'donut-chart', component: DonutChartComponent },
    { path: 'speed-guage', component: SpeedGuageComponent },
    { path: 'speed-guage2', component: SpeedGuage2Component },
    { path: 'speed-gauge3', component: SpeedGuage3Component },
    { path: '',
        redirectTo: '/line-chart',
        pathMatch: 'full'
    },
    { path: '**', component: LineChartComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LineChartComponent,
        MultiSeriesComponent,
        BarChartComponent,
        StackedBarChartComponent,
        BrushZoomComponent,
        PieChartComponent,
        DonutChartComponent,
        SpeedGuageComponent,
        SpeedGuage2Component,
        SpeedGuage3Component,
        MeterGuageComponent,
        BarChartAppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        MatMenuModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
