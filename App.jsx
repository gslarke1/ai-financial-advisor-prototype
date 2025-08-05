
import React, { useState } from 'react';
import QuickProfileForm from './components/QuickProfileForm';
import SubscriptionSelector from './components/SubscriptionSelector';
import FinancialPlan from './components/FinancialPlan';

const App = () => {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState(null);

  if (step === 1) return <QuickProfileForm onNext={(data) => { setProfileData(data); setStep(2); }} />;
  if (step === 2) return <SubscriptionSelector profileData={profileData} onNext={(fullData) => { setProfileData(fullData); setStep(3); }} />;
  if (step === 3) return <FinancialPlan userData={profileData} />;
};

export default App;
