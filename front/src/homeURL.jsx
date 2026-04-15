import { useState, useEffect } from 'react';

function HomePage() {
  const [stakeholders, setStakeholders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStakeholders();
  }, []);

  const fetchStakeholders = async () => {
    try {
      const response = await fetch('http://localhost:8000/placements/stakeholders/');
      const data = await response.json();
      setStakeholders(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Stakeholders</h1>
      <ul>
        {stakeholders.map((stakeholder) => (
          <li key={stakeholder.id}>{stakeholder.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;