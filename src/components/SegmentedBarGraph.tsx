import { Component, ComponentChild, h, Fragment } from 'preact';
import bind from 'bind-decorator';
import { mix } from 'polished';

import { lerp } from '../utils/math';

interface SegmentedBarGraphProps {
  data: SegmentedBarGraphSeries[];
  segments: string[];
  color1?: string;
  color2?: string;
}

interface SegmentedBarGraphSeries {
  label: string;
  value: number[];
}

class SegmentedBarGraph extends Component<SegmentedBarGraphProps> {
  public static defaultProps: SegmentedBarGraphProps = {
    data: [],
    segments: [],
    color1: '#6b46c1',
    color2: '#d9c9ff'
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
    return this.props.segments.length;
  }

  public render({ data }): ComponentChild {
    return (
      <div class="grid grid-cols-segment-graph items-center col-gap-4 row-gap-2 font-semibold">
        {data.map((series, i) => {
          return (
            <Fragment key={i}>
              <div class="text-gray-700">{series.label}</div>
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
                        style={{ color: this.color(i2) }}
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
  private color(step: number): string {
    const percent = step / this.steps;

    return mix(lerp(0, 1, percent), this.props.color2, this.props.color1);
  }
}

export default SegmentedBarGraph;
export { SegmentedBarGraph, SegmentedBarGraphProps };
