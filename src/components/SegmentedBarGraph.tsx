import { Component, ComponentChild, h, Fragment } from 'preact';
import bind from 'bind-decorator';
import { tint } from 'polished';

import { lerp } from '../utils/math';

interface SegmentedBarGraphProps {
  data: SegmentedBarGraphSeries[];
  segments: string[];
  baseColor: string;
}

interface SegmentedBarGraphSeries {
  label: string;
  value: number[];
  baseColor?: string;
}

class SegmentedBarGraph extends Component<SegmentedBarGraphProps> {
  public static defaultProps: SegmentedBarGraphProps = {
    data: [],
    segments: [],
    baseColor: '#44337A'
  };

  /**
   * Compute total value of all series segments.
   */
  private get total(): number {
    // TODO Memoize this to prevent unnecessary computations
    return this.props.data.reduce(
      (acc, curr) =>
        (acc += curr.value.reduce((acc2, curr2) => (acc2 += curr2), 0)),
      0
    );
  }

  private get steps(): number {
    return this.props.data[0].value.length;
  }

  public render({ baseColor, data }): ComponentChild {
    return (
      <div class="grid grid-cols-segment-graph items-center col-gap-4 font-semibold">
        {data.map((series, i) => {
          return (
            <Fragment key={i}>
              <div style={{ color: baseColor }}>{series.label}</div>
              <svg
                class="h-4 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                {((): ComponentChild[] => {
                  let totalPercent = 0;

                  return series.value.map((segment, i2) => {
                    const percent = (segment / this.total) * 100;
                    const tempTotalPercent = totalPercent;
                    totalPercent += percent;

                    return (
                      <rect
                        key={i2}
                        x={tempTotalPercent}
                        y="0"
                        width={percent + 0.15}
                        height="10"
                        class="fill-current"
                        style={{ color: this.color(i2, series) }}
                      />
                    );
                  });
                })()}
              </svg>
            </Fragment>
          );
        })}
      </div>
    );
  }

  @bind
  private color(step: number, series: SegmentedBarGraphSeries): string {
    const percent = step / this.steps;
    const baseColor = series.baseColor || this.props.baseColor;

    return tint(lerp(0, 1, percent), baseColor);
  }
}

export default SegmentedBarGraph;
export { SegmentedBarGraph, SegmentedBarGraphProps };
