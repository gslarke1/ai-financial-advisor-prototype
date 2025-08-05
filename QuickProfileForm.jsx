
import React, { useState } from 'react';

const QuickProfileForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: 'NSW',
    income: '',
    rent: '',
    savings: '',
    goal: 'Buy a home',
    goalAmount: '',
    goalTimeframe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Tell us about yourself</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-2" required />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full border p-2" required />
        <select name="location" value={formData.location} onChange={handleChange} className="w-full border p-2">
          <option value="NSW">NSW</option><option value="VIC">VIC</option>
          <option value="QLD">QLD</option><option value="WA">WA</option>
          <option value="SA">SA</option><option value="TAS">TAS</option>
          <option value="ACT">ACT</option><option value="NT">NT</option>
        </select>
        <input name="income" type="number" placeholder="Monthly Take-Home Income ($)" value={formData.income} onChange={handleChange} className="w-full border p-2" required />
        <input name="rent" type="number" placeholder="Rent/Mortgage ($)" value={formData.rent} onChange={handleChange} className="w-full border p-2" required />
        <input name="savings" type="number" placeholder="Current Savings ($)" value={formData.savings} onChange={handleChange} className="w-full border p-2" required />
        <input name="goal" placeholder="Your Goal (e.g. Buy a home)" value={formData.goal} onChange={handleChange} className="w-full border p-2" required />
        <input name="goalAmount" type="number" placeholder="Goal Amount ($)" value={formData.goalAmount} onChange={handleChange} className="w-full border p-2" required />
        <input name="goalTimeframe" type="number" placeholder="Timeframe to Goal (months)" value={formData.goalTimeframe} onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Next</button>
      </form>
    </div>
  );
};

export default QuickProfileForm;
