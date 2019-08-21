import { Component, ComponentChild, h } from 'preact';

import CompanyCard from '../CompanyCard';

import * as styles from './style.scss';

interface CompanyCompareState {
  companies: [];
}

class CompanyCompare extends Component<{}, CompanyCompareState> {
  public componentDidMount(): void {
    fetch('https://data.diversity.fyi/atlas.json')
      .then(response => response.json())
      .then(response => {
        response.forEach(company => {
          Object.keys(company.stats.data.sex).forEach(
            key => (company.stats.data.sex[key] = parseFloat(company.stats.data.sex[key])),
          );
          Object.keys(company.stats.data.race).forEach(
            key => (company.stats.data.race[key] = parseFloat(company.stats.data.race[key])),
          );
        });

        this.setState({
          companies: response,
        });
      });
  }

  public render({}, { companies }): ComponentChild {
    return (
      <div class={styles.companyCompare}>
        {companies &&
          companies.map((company, index) => {
            return (
              <div key={index}>
                <CompanyCard
                  name={company.name}
                  website={company.website}
                  report={company.stats.report}
                  logo={`https://data.diversity.fyi/${company.info}/logo.png`}
                  notes={company.notes}
                  sex={company.stats.data.sex}
                  race={company.stats.data.race}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default CompanyCompare;
export { CompanyCompare };
