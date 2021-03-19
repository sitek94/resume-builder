export default function Projects({ data }) {
  const { title, list } = data;
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, description, techList }) => (
          <li key={name}>
            <h4>{name}</h4>
            <p>{techList.join(' | ')}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
