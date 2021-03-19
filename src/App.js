const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque 
praesentium deleniti mollitia quae nulla nihil velit dolor laborum, assumenda 
vel iste incidunt asperiores cumque rem quidem minima, eligendi fugit soluta.`;

const details = (
  <ul>
    {['Detail 1', 'Detail 2', 'Detail 3'].map(detail => (
      <li>{detail}</li>
    ))}
  </ul>
);

export default function App() {
  return (
    <div>
      <header>
        <h1>Maciek Sitkowski</h1>
      </header>

      <section>
        <h2>Summary</h2>
        <p>{lorem}</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          {['Project 1', 'Project 2'].map(project => (
            <li key={project}>
              <h4>{project}</h4>
              <p>{lorem}</p>
            </li>
          ))}
        </ul>
      </section>

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

      <section>
        <h3>Contact</h3>
        {details}
      </section>

      <section>
        <h3>Key skills</h3>
        {details}
      </section>

      <section>
        <h3>Additional skills</h3>
        {details}
      </section>

      <section>
        <h3>Languages</h3>
        {details}
      </section>

      <section>
        <h3>Interests</h3>
        {details}
      </section>
    </div>
  );
}
