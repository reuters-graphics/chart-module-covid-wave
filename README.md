![](./badge.svg)

# CovidWave

### Install

```
$ yarn add https://github.com/reuters-graphics/chart-module-covid-wave.git
```

### Use

```javascript
import CovidWave from '@reuters-graphics/chart-module-covidwave';

const myChart = new CovidWave();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .data({
    CH: 0.75,
    DE: 0.43,
    US: 0.99,
    // ...
  })
  .props({
    locale: 'en',
    height: 200,
    thresholdDomain: [0.5, 0.75],
    thresholdRange: {
      color: ['#ccc', '#f68e26', '#de2d26'],
      opacity: [0.1, 0.2, 0.4],
    },
    thresholdText: '{{ &number }} countries are still at the peak of their infection curve.',
    peakText: '{{ &percent }} of peak',
  })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([3, 4, 5])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$CovidWave-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$CovidWave-container: '#chart';

@import '~@reuters-graphics/chart-module-covidwave/scss/main';
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
