import { Component, ComponentChild, h } from 'preact';
import { Link } from 'preact-router';

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
          </main>
        </article>
      </Link>
    );
  }
}

export default CompanyCard;
export { CompanyCard };
