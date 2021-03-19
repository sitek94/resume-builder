export default function Education({ data }) {
  const { title, list } = data;

  return (
    <section id="education">
      <h2>{title}</h2>
      <ul>
        {list.map(({ institution, description, date }) => (
          <li key={description}>
            <div>
              <h4>{institution}</h4>

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
