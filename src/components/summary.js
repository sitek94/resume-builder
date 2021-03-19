export default function Summary({ data }) {
  const { title, text } = data;

  return (
    <section className="summary">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
