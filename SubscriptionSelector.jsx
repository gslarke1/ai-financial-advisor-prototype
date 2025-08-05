
import React, { useState } from 'react';

const defaultOptions = [
  { name: 'Netflix', defaultCost: 17 },
  { name: 'Spotify', defaultCost: 12 },
  { name: 'Gym', defaultCost: 55 },
  { name: 'Uber/Transport', defaultCost: 100 },
  { name: 'Dining Out', defaultCost: 300 },
  { name: 'Amazon Prime', defaultCost: 10 },
  { name: 'Phone Plan', defaultCost: 50 }
];

const SubscriptionSelector = ({ onNext, profileData }) => {
  const [selected, setSelected] = useState([]);
  const [customCosts, setCustomCosts] = useState({});

  const toggleOption = (name) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const handleCostChange = (name, value) => {
    setCustomCosts(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedData = defaultOptions
      .filter(opt => selected.includes(opt.name))
      .map(opt => ({
        name: opt.name,
        monthly_cost: customCosts[opt.name] ?? opt.defaultCost
      }));
    onNext({ ...profileData, subscriptions: selectedData });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">What do you spend on each month?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {defaultOptions.map(({ name, defaultCost }) => (
            <div
              key={name}
              onClick={() => toggleOption(name)}
              className={`p-4 border rounded cursor-pointer ${selected.includes(name) ? 'bg-blue-100 border-blue-500' : ''}`}
            >
              <div className="font-semibold">{name}</div>
              {selected.includes(name) && (
                <input
                  type="number"
                  className="mt-2 w-full border p-1"
                  placeholder={`$${defaultCost}`}
                  value={customCosts[name] ?? defaultCost}
                  onChange={(e) => handleCostChange(name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-6">
          Show My Financial Plan
        </button>
      </form>
    </div>
  );
};

export default SubscriptionSelector;
