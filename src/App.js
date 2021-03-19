import data from './data/english';
import Details from './components/details';
import FullName from './components/full-name';
import Summary from './components/summary';
import Projects from './components/projects';

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

        <section>
          <h2>Work Experience</h2>
          <ul>
            {['Job 1', 'Job 2', 'Job 3'].map(job => (
              <li key={job}>
                <h4>{job}</h4>
                <p>{lorem}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Certificates</h2>
          <ul>
            {['Certificate 1', 'Certificate 2', 'Certificate 3'].map(
              certificate => (
                <li key={certificate}>
                  <h4>{certificate} - provider</h4>
                </li>
              ),
            )}
          </ul>
        </section>

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
