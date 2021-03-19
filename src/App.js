import data from './data/english';
import Details from './components/details';
import FullName from './components/full-name';
import Summary from './components/summary';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Certificates from './components/certificates';

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque 
praesentium deleniti mollitia quae nulla nihil velit dolor laborum, assumenda 
vel iste incidunt asperiores cumque rem quidem minima, eligendi fugit soluta.`;

export default function App() {
  return (
    <div className="page">
      <div className="column left">
        <Details data={data.contact} />
        <Details data={data.keySkills} defaultIcon="✅" />
        <Details data={data.additionalSkills} defaultIcon="✔️" />
        <Details data={data.languages} defaultIcon="💬" />
        <Details data={data.interests} />
      </div>

      <div className="column right">
        <FullName text={data.fullName} />
        <Summary data={data.summary} />
        <Projects data={data.projects} />
        <WorkExperience data={data.workExperience} />
        <Certificates data={data.certificates} />

        <section>
          <h2>Education</h2>
          <ul>
            {['Institution 1'].map(institution => (
              <li key={institution}>
                <h4>{institution} - Date</h4>
                <p>{lorem}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
