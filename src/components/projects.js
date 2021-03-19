import Link from './link';

export default function Projects({ data }) {
  const { title, list } = data;

  return (
    <section className="projects">
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, description, techList, url }) => (
          <li key={name}>
            <Link to={url}>
              <h4>{name}</h4>
            </Link>
            <p className="sm-border-bottom">{techList.join(' | ')}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
