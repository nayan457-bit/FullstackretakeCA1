import React from 'react';
import './App.css';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TestimonialCard name="Emily watson" Review="The service was amazing!" />
        <TestimonialCard name="kendrik lamar" Review="Highly recommended" />
      </div>
    </div>
  );
}

export default App;
