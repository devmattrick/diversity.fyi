import { Component, ComponentChild, h } from 'preact';

interface SexBarGraphProps {
  females: number;
  males: number;
}

class SexBarGraph extends Component<SexBarGraphProps> {
  public render({ females, males }): ComponentChild {
    const total = females + males;
    const femalePercent = Math.round((females / total) * 1000) / 10;
    const malePercent = Math.round((males / total) * 1000) / 10;

    return (
      <div class="font-semibold">
        <div>
          <div class="flex">
            <div class="text-red-600 flex-1">Female ({femalePercent}%)</div>
            <div class="text-blue-600 flex-1 text-right">
              Male ({malePercent}%)
            </div>
          </div>
          <div class="flex-1">
            <svg
              class="h-4 w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <rect
                x="0"
                y="0"
                width={femalePercent}
                height="10"
                class="fill-current text-red-600"
              />
              <rect
                x={femalePercent}
                y="0"
                width={malePercent}
                height="10"
                class="fill-current text-blue-600"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default SexBarGraph;
export { SexBarGraph, SexBarGraphProps };
