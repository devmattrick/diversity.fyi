import { Component, ComponentChild, h } from 'preact';
import { Link } from 'preact-router';

import SegmentedBarGraph from './SegmentedBarGraph';
import SexBarGraph from './SexBarGraph';

class CompanyCard extends Component {
  public render(): ComponentChild {
    return (
      <Link href="#">
        <article class="bg-white shadow-md p-6 border border-gray-200 rounded">
          <header class="flex items-center mb-8">
            <img
              class="w-8 h-8 mr-4"
              src="https://logo.clearbit.com/google.com"
            />
            <h1 class="text-xl font-semibold">Google</h1>
          </header>
          <main>
            <section class="my-4">
              <h2 class="text-lg font-semibold">Sex</h2>
              <SexBarGraph males={2000} females={200} />
            </section>
            <section class="mt-8">
              <h2 class="text-lg font-semibold">Race</h2>
              <SegmentedBarGraph
                segments={[
                  'Executives',
                  'Middle Management',
                  'Professionals',
                  'Technicians',
                  'Sales',
                  'Clerical Workers',
                  'Craft Workers',
                  'Operatives',
                  'Laborers',
                  'Service Workers'
                ]}
                data={[
                  {
                    label: 'Asian',
                    value: [7, 5, 9, 10, 20]
                  },
                  {
                    label: 'Black',
                    value: [10, 6, 12, 1, 2]
                  },
                  {
                    label: 'Hispanic',
                    value: [4, 1, 2, 9, 11]
                  },
                  {
                    label: 'Native American',
                    value: [4, 1, 2, 9, 11]
                  },
                  {
                    label: 'White',
                    value: [
                      533547 + 230074,
                      2403851 + 1555364,
                      3949602 + 4508046,
                      976496 + 940993,
                      1762571 + 1757117,
                      1054845 + 2975935,
                      1862987 + 117129,
                      2454587 + 637358,
                      1241983 + 535450,
                      1435129 + 2350178
                    ]
                  },
                  {
                    label: 'Two or More',
                    value: [4, 1, 2, 9, 11]
                  }
                ]}
              />
            </section>
          </main>
        </article>
      </Link>
    );
  }
}

export default CompanyCard;
export { CompanyCard };
