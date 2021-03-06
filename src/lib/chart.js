import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import last from 'lodash/last';
import mustache from 'mustache';
import random from 'lodash/random';
import throttle from 'lodash/throttle';

const atlas = new AtlasMetadataClient();

class CovidWave extends ChartComponent {
  defaultProps = {
    locale: 'en',
    height: 200,
    thresholdDomain: [0.5, 0.75],
    thresholdRange: {
      color: ['#ccc', '#f68e26', '#de2d26'],
      opacity: [0.1, 0.2, 0.4],
    },
    thresholdText: {
      none: 'All countries are currently below the peak of their infection curve.',
      one: '{{ &number }} country is still near the peak of its infection curve.',
      more: '{{ &number }} countries are still near the peak of their infection curve.',
    },
    peakText: {
      ofPeak: '{{ &percent }} of peak',
      atPeak: 'At peak',
    },
    legendText: {
      max: 'Countries near their highest daily average reported infections.',
      min: 'Countries near zero daily average reported infections.',
    },
  };

  defaultData = {};

  destroy() {
    clearAllBodyScrollLocks();
  }

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();

    const { width } = node.getBoundingClientRect();
    const { height } = props;

    const legend = d3.select(node).appendSelect('div.legend');

    const chart = d3.select(node).appendSelect('div.chart');

    const svg = chart.appendSelect('svg.wave-chart')
      .attr('width', width)
      .attr('height', height)
      .appendSelect('g')
      .attr('transform', 'translate(0, 10)');

    const t = d3.transition().duration(250);

    const linesData = Object.keys(data).map((c) => {
      const lineData = [{ x: 0, y: 0, c }];
      lineData.push({
        x: 0.5,
        y: +data[c] / 4,
        c,
      });
      lineData.push({
        x: 1,
        y: +data[c],
        c,
      });
      lineData.push({
        x: 1.5,
        y: +data[c] / 4,
        c,
      });
      lineData.push({ x: 2, y: 0, c });
      return lineData;
    });

    // sort least to most for mouse handler
    linesData.sort((a, b) => a[2].y - b[2].y);

    const x = d3.scaleLinear()
      .domain([0, 2])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 1])
      .range([height - 20, 0]);

    const color = d3.scaleThreshold()
      .domain(props.thresholdDomain)
      .range(props.thresholdRange.color);

    const opacity = d3.scaleThreshold()
      .domain(props.thresholdDomain)
      .range(props.thresholdRange.opacity);

    const line = d3.line()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.x))
      .y(d => y(d.y));
    const thresholdLine = d3.line()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.x))
      .y(d => y(d.y) - 4);

    svg.selectAll('path.countries')
      .data(linesData)
      .join('path')
      .attr('class', d => `countries iso-${d[0].c}`)
      .style('opacity', d => opacity(data[d[0].c]))
      .attr('stroke', d => color(data[d[0].c]))
      .transition(t)
      .attr('d', line);

    const raisedY = 1;

    svg.appendSelect('path.limit.max')
      .datum([
        { x: 0, y: 0 },
        { x: 0.5, y: raisedY / 4 },
        { x: 1, y: raisedY },
        { x: 1.5, y: raisedY / 4 },
        { x: 2, y: 0 },
      ])
      .attr('stroke', d => color(raisedY))
      .transition(t)
      .attr('d', thresholdLine);

    svg.appendSelect('line.top-countries')
      .attr('x1', x(1.28))
      .attr('x2', x(2))
      .attr('y1', y(last(color.domain())))
      .attr('y2', y(last(color.domain())))
      .attr('stroke', d => color(raisedY));

    const countriesAboveThreshold = Object.keys(data).filter(c => data[c] > last(props.thresholdDomain)).length;

    chart.appendSelect('div.label.right')
      .style('bottom', `${height - y(last(color.domain()))}px`)
      .style('right', '0px')
      .style('width', `${x(0.7)}px`)
      .html(() => {
        if (countriesAboveThreshold > 1) {
          return mustache.render(props.thresholdText.more, {
            number: `<span>${countriesAboveThreshold}</span>`,
          });
        }
        if (countriesAboveThreshold === 1) {
          return mustache.render(props.thresholdText.one, {
            number: `<span>${countriesAboveThreshold}</span>`,
          });
        }
        return mustache.render(props.thresholdText.none);
      })
      .select('span')
      .style('color', last(props.thresholdRange.color));

    const highlightLab = chart.appendSelect('div.label.left')
      .style('top', '0px')
      .style('left', '0px')
      .style('width', `${x(0.7)}px`)
      .html('');

    const mouseRect = svg.appendSelect('rect.touch-capture')
      .attr('width', width * 0.5)
      .attr('height', height)
      .attr('x', width * 0.25)
      .attr('y', 0)
      .style('fill', 'transparent');

    const highlightCountry = (yCoord) => {
      const dataCoord = y.invert(yCoord);
      let dataPoint = linesData.find(d => d[2].y > dataCoord);
      if (!dataPoint) dataPoint = last(linesData);
      const dataPoints = Object.keys(data).filter(c => +data[c] === dataPoint[2].y);
      const isoAlpha2 = dataPoints[random(0, dataPoints.length - 1)];
      const country = atlas.getCountry(isoAlpha2);
      const percent = data[isoAlpha2] * 100;
      highlightLab
        .appendSelect('div.country-name')
        .text(country.translations[props.locale]);
      highlightLab
        .appendSelect('div.country-data')
        .html(
          percent === 100 ? (
            `<span>${props.peakText.atPeak}</span>`
          ) : (
            mustache.render(props.peakText.ofPeak, {
              percent: percent < 1 ?
                '<span>&lt; 1%</span>' :
                `<span>${Math.round(percent)}%</span>`,
            })
          )
        )
        .select('span')
        .style('color', color(data[isoAlpha2]));
      svg.selectAll('path.countries')
        .style('opacity', d => d[0].c === isoAlpha2 ? 1 : 0);
    };

    const removeHighlight = () => {
      enableBodyScroll(mouseRect.node());
      highlightLab.html('');
      svg.selectAll('path.countries')
        .style('opacity', d => opacity(data[d[0].c]));
    };

    mouseRect.on('mouseenter.wave mousemove.wave', throttle(() => {
      if (!d3.event) return;
      const coordinates = d3.mouse(svg.node());
      highlightCountry(coordinates[1]);
    }, 50));

    mouseRect.on('touchstart.wave touchmove.wave', throttle(() => {
      disableBodyScroll(mouseRect.node());
      if (!d3.event) return;
      const [coordinates] = d3.touches(svg.node());
      highlightCountry(coordinates[1]);
    }, 50), true);

    mouseRect.on('mouseleave.wave', removeHighlight);
    mouseRect.on('touchend.wave', removeHighlight);
    mouseRect.on('touchcancel.wave', () => {
      enableBodyScroll(mouseRect.node());
    });

    // legend.appendSelect('h6')
    //   .text('How to read this chart');

    const maxLegend = legend.appendSelect('div.max.legend-container');
    const minLegend = legend.appendSelect('div.min.legend-container');

    const legendX = d3.scaleLinear()
      .domain([0, 2])
      .range([0, 100]);

    const legendY = d3.scaleLinear()
      .domain([0, 1])
      .range([30, 0]);

    const legendLine = d3.line()
      .curve(d3.curveMonotoneX)
      .x(d => legendX(d.x))
      .y(d => legendY(d.y));

    const maxLegendSvg = maxLegend.appendSelect('svg')
      .attr('width', 100)
      .attr('height', 30);

    maxLegendSvg
      .appendSelect('path.max.example')
      .datum([
        { x: 0, y: 0 },
        { x: 0.5, y: 0.75 / 4 },
        { x: 1, y: 0.75 },
        { x: 1.5, y: 0.75 / 4 },
        { x: 2, y: 0 },
      ])
      .attr('stroke', last(color.range()))
      .attr('stroke-width', 1)
      .transition(t)
      .attr('d', legendLine);

    maxLegendSvg
      .appendSelect('path.max.guide')
      .datum([
        { x: 0, y: 0 },
        { x: 0.5, y: 1 / 4 },
        { x: 1, y: 1 },
        { x: 1.5, y: 1 / 4 },
        { x: 2, y: 0 },
      ])
      .attr('stroke', last(color.range()))
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '5px 2px')
      .transition(t)
      .attr('d', legendLine);

    maxLegend.appendSelect('div')
      .text(props.legendText.max);

    const minLegendSvg = minLegend.appendSelect('svg')
      .attr('width', 100)
      .attr('height', 30);

    minLegendSvg
      .appendSelect('path.min.example')
      .datum([
        { x: 0, y: 0 },
        { x: 0.5, y: 0.2 / 4 },
        { x: 1, y: 0.2 },
        { x: 1.5, y: 0.2 / 4 },
        { x: 2, y: 0 },
      ])
      .attr('stroke', color.range()[0])
      .attr('stroke-width', 1)
      .transition(t)
      .attr('d', legendLine);

    minLegendSvg
      .appendSelect('path.max.guide')
      .datum([
        { x: 0, y: 0 },
        { x: 0.5, y: 1 / 4 },
        { x: 1, y: 1 },
        { x: 1.5, y: 1 / 4 },
        { x: 2, y: 0 },
      ])
      .attr('stroke', last(color.range()))
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '5px 2px')
      .transition(t)
      .attr('d', legendLine);

    minLegend.appendSelect('div')
      .text(props.legendText.min);

    return this;
  }
}

export default CovidWave;
