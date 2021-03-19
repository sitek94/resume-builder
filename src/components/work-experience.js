export default function WorkExperience({ data }) {
  const { title, list } = data;

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {list.map(({ company, jobTitle, location, date, description }) => (
          <li key={company}>
            <div>
              <h4>
                {jobTitle} <br />
                {company}, {location} <br />
              </h4>
              <span>
                {date.start} - {date.end}
              </span>
            </div>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
