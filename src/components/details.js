import { FaQuestion } from 'react-icons/fa';

export default function Details({ data, defaultIcon = <FaQuestion /> }) {
  const { title, list } = data;

  return (
    <section className="details">
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
