/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useContext, useState } from 'react';

interface OnBoardingContextType {
  step: number;
  setStep: (step: number) => void;
  phone: string;
  setPhone: (phone: string) => void;
  address: string;
  setAddress: (address: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
}

const OnboardingContext = createContext<OnBoardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <OnboardingContext.Provider
      value={{
        step,
        setStep,
        phone,
        setPhone,
        address,
        setAddress,
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error('useOnboarding must be used in OnboardingProvider');

  return context;
};
