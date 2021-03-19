export default function Projects({ data }) {
  const { title, list } = data;

  return (
    <section className="projects">
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, description, techList }) => (
          <li key={name}>
            <h4>{name}</h4>
            <p className="sm-border-bottom">{techList.join(' | ')}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
