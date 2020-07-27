import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
import globalStatistics from './demoData.json';

const { cases } = globalStatistics.distributionRanks;

class ChartComponent extends React.Component {
  state = { width: '' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // Use our chart module.
    fetch('http://graphics.thomsonreuters.com/data/2020/coronavirus/global-tracker/statistics.json')
      .then(r => r.json())
      .then(data => {
        const { cases } = data.distributionRanks;
        this.chart
          .selection(this.chartContainer.current)
          .data(cases)
          .props({ fill: base.blue.hex })
          .draw();
      });

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    this.chart.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <>
        <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
          {/* This is our chart container 👇 */}
          <div id='chart' ref={this.chartContainer} />
        </ChartContainer>
      </>
    );
  }
}

export default ChartComponent;
