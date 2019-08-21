import { Component, ComponentChild, h } from 'preact';
import snarkdown from 'snarkdown';

import RaceStats from '../../types/RaceStats';
import SexStats from '../../types/SexStats';
import Card from '../Card';

import * as styles from './style.scss';
import PieChart from '../PieChart';

interface CompanyCardProps {
  name: string;
  website: string;
  report: string;
  logo: string;
  notes?: string[];
  sex: SexStats;
  race: RaceStats;
}

class CompanyCard extends Component<CompanyCardProps> {
  public render({ name, website, report, logo, notes, sex, race }): ComponentChild {
    return (
      <Card>
        <div class={styles.companyCard}>
          <div class={styles.companyCardHeader}>
            <img alt={`${name} Logo`} src={logo}></img>
            <h2>{name}</h2>

            <div class={styles.companyCardHeaderEnd}>
              <a
                class="icon-link"
                title={`View ${name}'s latest diversity report`}
                href={report}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="icon" viewBox="0 0 24 24" alt="Bar chart file icon">
                  <path
                    fill="currentColor"
                    d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z"
                  />
                </svg>
              </a>
              <a
                class="icon-link"
                title={`Visit ${name}'s website`}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="icon" viewBox="0 0 24 24" alt="Globe icon">
                  <path
                    fill="currentColor"
                    d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class={styles.companyCardData}>
            <h3>Sex</h3>
            <PieChart
              data={[
                { value: sex.female, label: 'Female', color: '#ff4757' },
                { value: sex.male, label: 'Male', color: '#3742fa' },
              ]}
            />
            <h3>Race</h3>
            <PieChart
              data={[
                { value: race.asian, label: 'Asian', color: '#2ed573' },
                { value: race.black, label: 'Black', color: '#ff6348' },
                { value: race.latinx, label: 'Latinx', color: '#5352ed' },
                { value: race.multiracial, label: 'Multiracial', color: '#81ecec' },
                { value: race.nativeAmerican, label: 'Native American', color: '#e84393' },
                { value: race.white, label: 'White', color: '#ffa502' },
              ]}
            />
          </div>
          {notes && (
            <div class={styles.companyCardNotes}>
              <h3>Notes</h3>
              {notes.map((note, index) => {
                // See: https://github.com/developit/snarkdown/issues/5#issuecomment-282924371
                const mdNote = snarkdown(note).replace(
                  /(<a href="(https?:)?\/\/.*?")>/g,
                  '$1 target="_blank" rel="noopener noreferrer">',
                );
                return <p key={index} dangerouslySetInnerHTML={{ __html: mdNote }}></p>;
              })}
            </div>
          )}
        </div>
      </Card>
    );
  }
}

export default CompanyCard;
export { CompanyCard, CompanyCardProps };
