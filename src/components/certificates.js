export default function Certificates({ data }) {
  const { title, list } = data;

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, provider }) => (
          <li key={name}>
            <h4>
              {name} <span>&mdash; {provider}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
