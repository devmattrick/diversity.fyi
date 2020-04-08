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
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            <h1 class="text-xl font-semibold">Google</h1>
          </header>
          <main>
            <section class="my-4">
              <h2 class="text-lg font-semibold">Sex</h2>
              <SexBarGraph males={39129} females={16417} />
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
                    value: [
                      42 + 17,
                      2227 + 1553,
                      10925 + 4507,
                      12 + 4,
                      154 + 174,
                      23 + 157,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      25 + 10
                    ]
                  },
                  {
                    label: 'Black',
                    value: [
                      4 + 4,
                      172 + 149,
                      524 + 292,
                      13 + 4,
                      52 + 52,
                      14 + 41,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      20 + 2
                    ]
                  },
                  {
                    label: 'Hispanic or Latino',
                    value: [
                      3 + 2,
                      420 + 258,
                      1399 + 468,
                      14 + 4,
                      102 + 104,
                      24 + 83,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      47 + 26
                    ]
                  },
                  {
                    label: 'Native American',
                    value: [
                      0 + 0,
                      19 + 14,
                      37 + 22,
                      1 + 0,
                      2 + 1,
                      0 + 9,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      4 + 3
                    ]
                  },
                  {
                    label: 'White',
                    value: [
                      164 + 50,
                      5086 + 2795,
                      15533 + 3762,
                      285 + 48,
                      785 + 777,
                      72 + 454,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      49 + 45
                    ]
                  },
                  {
                    label: 'Two or More',
                    value: [
                      2 + 2,
                      154 + 126,
                      623 + 311,
                      13 + 2,
                      30 + 39,
                      4 + 27,
                      0 + 0,
                      0 + 0,
                      0 + 0,
                      8 + 3
                    ]
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
