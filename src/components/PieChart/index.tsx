import { Component, ComponentChild, h } from 'preact';

import * as styles from './style.scss';

interface PieChartProps {
  data: PieChartDataPoint[];
}

interface PieChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface Point {
  x: number;
  y: number;
}

class PieChart extends Component<PieChartProps> {
  private total = 0;
  private cumulativePercent = 0;

  public render({ data }): ComponentChild {
    this.total = data.reduce((total, curr) => total + curr.value, 0);

    return (
      <div class={styles.pieChart}>
        <svg class={styles.pieChartGraphic} viewBox="-1 -1 2 2">
          {data.map((slice, index) => {
            const normalized = this.normalize(slice.value);
            const start = this.percentToCoordinate(this.cumulativePercent);
            this.cumulativePercent += normalized;
            const end = this.percentToCoordinate(this.cumulativePercent);

            const largeArcFlag = normalized > 0.5 ? 1 : 0;

            const pathData = [`M ${start.x} ${start.y}`, `A 1 1 0 ${largeArcFlag} 1 ${end.x} ${end.y}`, `L 0 0`].join(
              ' ',
            );

            return <path key={index} d={pathData} fill={slice.color} />;
          })}
          <circle r="0.7" fill="#FFFFFF" />
        </svg>

        <div class={styles.pieChartLabels}>
          {data.map((slice, index) => {
            return (
              <p key={index}>
                <div class={styles.pieChartLabelsSwatch} style={{ background: slice.color }} /> <b>{slice.label}</b>
                &nbsp;({(this.normalize(slice.value) * 100).toFixed(1)}%)
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  private normalize(value: number): number {
    return value / this.total;
  }

  private percentToCoordinate(percent: number): Point {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return { x, y };
  }
}

export default PieChart;
export { PieChart };
