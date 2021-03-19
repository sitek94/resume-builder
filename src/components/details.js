export default function Details({ data, defaultIcon = '❓' }) {
  const { title, list } = data;

  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {list.map(({ icon, text }) => (
          <li key={text}>
            {icon || defaultIcon} {text}
          </li>
        ))}
      </ul>
    </section>
  );
}
