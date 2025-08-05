
import React, { useEffect, useState } from 'react';

const FinancialPlan = ({ userData }) => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const generateMockPlan = (data) => {
      const income = Number(data.income);
      const rent = Number(data.rent);
      const savings = Number(data.savings);
      const goalAmount = Number(data.goalAmount);
      const goalMonths = Number(data.goalTimeframe);

      const monthlySpend = rent + (data.subscriptions || []).reduce((sum, s) => sum + s.monthly_cost, 0);
      const monthlySave = income - monthlySpend;
      const projectedSavings = monthlySave * goalMonths + savings;
      const shortfall = goalAmount - projectedSavings;

      return {
        summary: `You earn $${income}/month and spend ~$${monthlySpend}, saving ~$${monthlySave}/month.`,
        gap: shortfall > 0
          ? `You're on track to save ~$${projectedSavings}, which is ~$${shortfall} short of your goal.`
          : `You’re on track to exceed your $${goalAmount} goal by ~$${Math.abs(shortfall)}.`,
        recommendations: [
          "Cut $200–300/month from subscriptions or lifestyle spending.",
          "Extend your timeline by 6 months to reduce monthly pressure.",
          "Set up a high-interest savings or offset account for better growth."
        ],
        checklist: [
          "Create a monthly savings plan",
          "Start an emergency fund",
          "Review and reduce subscriptions",
          "Track progress monthly"
        ]
      };
    };

    const result = generateMockPlan(userData);
    setPlan(result);
  }, [userData]);

  if (!plan) return <div className="text-center p-8">Analyzing your data...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your AI Financial Plan</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">🔹 Summary</h3>
        <p>{plan.summary}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">🔻 Goal Progress</h3>
        <p>{plan.gap}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">🔍 Recommendations</h3>
        <ul className="list-disc list-inside space-y-1">
          {plan.recommendations.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">✅ Next Steps</h3>
        <ul className="list-none space-y-1">
          {plan.checklist.map((item, i) => (
            <li key={i}>🔲 {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialPlan;
