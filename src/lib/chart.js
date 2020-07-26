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
    thresholdText: '{{ &number }} countries are still at the peak of their infection curve.',
    peakText: '{{ &percent }} of peak',
  };

  defaultData = {};

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();

    const { width } = node.getBoundingClientRect();
    const { height } = props;

    const svg = d3.select(node).appendSelect('svg')
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
      .attr('y1', y(0.70))
      .attr('y2', y(0.70))
      .attr('stroke', d => color(raisedY));

    const countriesAboveThreshold = Object.keys(data).filter(c => data[c] > last(props.thresholdDomain)).length;

    d3.select(node).appendSelect('div.label.right')
      .style('bottom', `${height - y(0.70)}px`)
      .style('right', '0px')
      .style('width', `${x(0.7)}px`)
      .html(mustache.render(props.thresholdText, {
        number: `<span>${countriesAboveThreshold}</span>`,
      }))
      .select('span')
      .style('color', last(props.thresholdRange.color));

    const highlightLab = d3.select(node).appendSelect('div.label.left')
      .style('top', '0px')
      .style('left', '0px')
      .style('width', `${x(0.7)}px`)
      .html('');

    const mouseRect = svg.appendSelect('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('x', 0)
      .attr('y', 0)
      .style('fill', 'transparent');

    const highlightCountry = (yCoord) => {
      const dataCoord = y.invert(yCoord);
      let dataPoint = linesData.find(d => d[2].y > dataCoord);
      if (!dataPoint) dataPoint = last(linesData);
      const dataPoints = Object.keys(data).filter(c => +data[c] === dataPoint[2].y);
      const isoAlpha2 = dataPoints[random(0, dataPoints.length - 1)];
      const country = atlas.getCountry(isoAlpha2);
      highlightLab
        .appendSelect('div.country-name')
        .text(country.translations[props.locale]);
      highlightLab
        .appendSelect('div.country-data')
        .html(mustache.render(props.peakText, {
          percent: `<span>${Math.round(data[isoAlpha2] * 100)}%</span>`,
        }))
        .select('span')
        .style('color', color(data[isoAlpha2]));
      svg.selectAll('path.countries')
        .style('opacity', d => d[0].c === isoAlpha2 ? 1 : 0);
    };

    const removeHighlight = () => {
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
      if (!d3.event) return;
      const [coordinates] = d3.touches(svg.node());
      highlightCountry(coordinates[1]);
    }, 50), true);

    mouseRect.on('mouseleave.wave', removeHighlight);
    mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);

    return this;
  }
}

export default CovidWave;
