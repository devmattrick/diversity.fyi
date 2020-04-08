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
    // Calculate total value of series
    const total = data.reduce(
      (acc: number, series: RaceBarGraphData) => acc + series.value,
      0
    );

    return (
      <div class="font-semibold">
        <div class="flex-1">
          <svg
            class="h-4 w-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            {((): ComponentChild[] => {
              let totalPercent = 0;

              return data.map((series, i) => {
                const color = series.color ? series.color : '#000';
                const percent = (series.value / total) * 100;
                const roundedPercent = Math.round(percent * 1000) / 10;
                const tempTotalPercent = totalPercent;
                totalPercent += percent;

                return (
                  <rect
                    key={i}
                    x={tempTotalPercent}
                    y="0"
                    width={
                      // Add 0.25 to remove small white gaps between series
                      percent + 0.25
                    }
                    height="10"
                    class="fill-current"
                    style={{ color }}
                  />
                );
              });
            })()}
          </svg>
        </div>
      </div>
    );
  }
}

export default RaceBarGraph;
export { RaceBarGraph, RaceBarGraphProps };
