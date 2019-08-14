import { Component, ComponentChild, h } from 'preact';

import * as styles from './style.scss';

interface PieChartProps {
  data: PieChartDataPoint[];
}

interface PieChartDataPoint {
  label: string;
  percent: number;
  color?: string;
}

interface Point {
  x: number;
  y: number;
}

class PieChart extends Component<PieChartProps> {
  private cumulativePercent: number = 0;

  public render({ data }): ComponentChild {
    return (
      <div class={styles.pieChart}>
        <svg class={styles.pieChartGraphic} viewBox="-1 -1 2 2">
          {data.map((slice, index) => {
            const start = this.percentToCoordinate(this.cumulativePercent);
            this.cumulativePercent += slice.percent;
            const end = this.percentToCoordinate(this.cumulativePercent);

            const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

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
                &nbsp;({(slice.percent * 100).toFixed(1)}%)
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  private percentToCoordinate(percent: number): Point {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return { x, y };
  }
}

export default PieChart;
export { PieChart };
