import * as d3 from "d3";

declare const d3: any;

export default class Gauge {
  constructor(private container: any, private configuration: any) {}
  private config = {
      size: 710,
      clipWidth: 200,
      clipHeight: 110,
      ringInset: 20,
      ringWidth: 20,
      pointerWidth: 10,
      pointerTailLength: 5,
      pointerHeadLengthPercent: 0.9,
      minValue: 0,
      maxValue: 10,
      minAngle: -90,
      maxAngle: 90,
      transitionMs: 750,
      majorTicks: 5,
      labelFormat: d3.format('d'),
      labelInset: 10,
      arcColorFn: d3.interpolateHsl(d3.rgb('#ef2147'), d3.rgb('#5e6c0a'))
  };
  private range: Number;
  private r: Number;
  private pointerHeadLength: Number;
  private value: Number = 0;

  private svg: any;
  private arc: any;
  private scale: any;
  private ticks: any;
  private tickData: any;
  private pointer: any;

  const donut = d3.pie();

  private deg2rad(deg) {
     return deg * Math.PI / 180;
  }

  private newAngle(d) {
      const ratio = this.scale(d);
      const newAngle = this.config.minAngle + (ratio * this.range);
      return newAngle;
    }

  private configure(configuration) {
      let prop = undefined;
      for (prop in configuration) {
        this.config[prop] = configuration[prop];
      }

      this.range = this.config.maxAngle - this.config.minAngle;
      this.r = this.config.size / 2;
      this.pointerHeadLength = Math.round(this.r * this.config.pointerHeadLengthPercent);

      this.scale = d3.scaleLinear()
                      .range([0, 1])
                      .domain([this.config.minValue, this.config.maxValue]);

      this.ticks = this.scale.ticks(this.config.majorTicks);
      this.tickData = d3.range(this.config.majorTicks).map(() => 1 / this.config.majorTicks);

      this.arc = d3.arc()
                .innerRadius(this.r - this.config.ringWidth - this.config.ringInset)
                .outerRadius(this.r - this.config.ringInset)
                .startAngle((d, i) => {
                  const ratio = d * i;
                  return this.deg2rad(this.config.minAngle + (ratio * this.range));
                })
                .endAngle((d, i) => {
                  const ratio = d * (i + 1);
                  return this.deg2rad(this.config.minAngle + (ratio * this.range));
                });
    }


    private centerTranslation() {
      return 'translate(' + this.r + ',' + this.r + ')';
    }

    private isRendered() {
      return (this.svg !== undefined);
    }

    private render(newValue) {
      this.svg = d3.select(this.container)
                  .append('svg:svg')
                  .attr('class', 'gauge')
                  .attr('width', this.config.clipWidth)
                  .attr('height', this.config.clipHeight);

      let centerTx = this.centerTranslation();

      let arcs = this.svg.append('g')
                    .attr('class', 'arc')
                    .attr('transform', centerTx);

      arcs.selectAll('path')
          .data(this.tickData)
          .enter().append('path')
          .attr('fill', (d, i) => this.config.arcColorFn(d * i))
          .attr('d', this.arc);

      let lg = this.svg.append('g')
                  .attr('class', 'label')
                  .attr('transform', centerTx);

      lg.selectAll('text')
        .data(this.ticks)
        .enter().append('text')
        .attr('transform', d => {
          const ratio = this.scale(d);
          const newAngle = this.config.minAngle + (ratio * this.range);
          return 'rotate(' + newAngle + ') translate(0,' + (this.config.labelInset - this.r) + ')';
        })
        .text(this.config.labelFormat);

      let lineData = [
        [this.config.pointerWidth / 2, 0],
        [0, -this.pointerHeadLength],
        [-(this.config.pointerWidth / 2), 0],
        [0, this.config.pointerTailLength],
        [this.config.pointerWidth / 2, 0]
      ];

      let pointerLine = d3.line().curve(d3.curveLinear)
      let pg = this.svg.append('g').data([lineData])
        .attr('class', 'pointer')
        .attr('transform', centerTx);

      this.pointer = pg.append('path')
        .attr('d', pointerLine)
        .attr('transform', 'rotate(' + this.config.minAngle + ')');

      this.update(newValue === undefined ? 0 : newValue);
    }

    private update(newValue, newConfiguration?) {
      if (newConfiguration !== undefined) {
        this.configure(newConfiguration);
      }
      const ratio = this.scale(newValue);
      const newAngle = this.config.minAngle + (ratio * this.range);
      this.pointer.transition()
          .duration(this.config.transitionMs)
          .ease(d3.easeElastic)
          .attr('transform', 'rotate(' + newAngle + ')');
    }

    this.configure(this.configuration);
}