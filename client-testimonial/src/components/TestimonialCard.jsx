function TestimonialCard({ name, Review }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{name}</h3>
      <p style={{ margin: 0 }}>{Review}</p>
    </div>
  );
}

export default TestimonialCard;