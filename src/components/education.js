export default function Education({ data }) {
  const { title, list } = data;

  return (
    <section className="education">
      <h2>{title}</h2>
      <ul>
        {list.map(({ institution, description, date }) => (
          <li key={description}>
            <div className="header">
              <h4>{institution}</h4>

              <span className="date">
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
