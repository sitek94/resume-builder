import { FaQuestion } from 'react-icons/fa';
import Link from './link';

export default function Details({ data, defaultIcon = <FaQuestion /> }) {
  const { title, list } = data;

  return (
    <section className="details">
      <h3>{title}</h3>
      <ul>
        {list.map(({ icon, text, url }) => (
          <li key={text}>
            {icon || defaultIcon}
            {url ? <Link to={url}>{text}</Link> : text}
          </li>
        ))}
      </ul>
    </section>
  );
}
