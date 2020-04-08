import { Component, ComponentChild, h } from 'preact';

const BAR_HEIGHT = 4;
const BAR_PADDING = 1;

interface RaceBarGraphProps {
  data: RaceBarGraphData[];
}

interface RaceBarGraphData {
  name: string;
  value: number;
  color?: string;
}

class RaceBarGraph extends Component<RaceBarGraphProps> {
  public render({ data }): ComponentChild {
    const total = data.reduce(
      (acc: number, series: RaceBarGraphData) => acc + series.value,
      0
    );

    return (
      <div class="font-semibold">
        {data.map((series, i) => {
          const color = series.color ? series.color : '#805AD5';
          const percent = Math.round((series.value / total) * 1000) / 10;

          return (
            <div key={i} style={{ color }} class="mt-2">
              <div>
                {series.name} ({percent}%)
              </div>
              <svg
                class="h-4 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                role="presentation"
              >
                <rect
                  x="0"
                  y="0"
                  width={percent}
                  height="10"
                  class="fill-current"
                />
              </svg>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RaceBarGraph;
export { RaceBarGraph, RaceBarGraphProps };
