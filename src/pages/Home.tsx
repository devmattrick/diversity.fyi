import { h, Fragment, JSX } from 'preact';
import Masthead from '../components/Masthead';

import CompanyCard from '../components/CompanyCard';

const Home = (): JSX.Element => (
  <Fragment>
    <div class="mb-8">
      <Masthead />
    </div>
    <div class="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  </Fragment>
);

export default Home;
export { Home };
