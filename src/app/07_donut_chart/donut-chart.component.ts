import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { POPULATION } from '../shared';

@Component({
    selector: 'app-donut-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

    title = 'Donut Chart';

    private width: number;
    private height: number;

    private svg: any;     // TODO replace all `any` by the right type

    private radius: number;

    private arc: any;
    private pie: any;
    private color: any;

    private g: any;

    constructor() {}

    ngOnInit() {
        this.initSvg();
        this.drawChart(POPULATION);
    }

    private initSvg() {
        this.svg = d3.select('#donutchart');

        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;

        this.color = d3Scale.scaleOrdinal()
            .range(['#98abc5', '#8a89a6']);

        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(this.radius - 50);

        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.population);

        this.svg = d3.select('#donutchart')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    }

    private drawChart(data: any[]) {
        let g = this.svg.selectAll('.arc2')
            .data(this.pie(data))
            .enter().append('g')
            .attr('class', 'arc2');

        g.append('path')
            .attr('d', this.arc)
            .style('fill', d => this.color(d.data.age));

        g.append('text')
            .attr('transform', d => 'translate(' + this.arc.centroid(d) + ')')
            .attr('dy', '.35em')
            .text(d => d.data.age);
    }

}
