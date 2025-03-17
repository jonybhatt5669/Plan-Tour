import { createContext, ReactNode, useContext, useState } from "react";

interface OnBoardingContextType{
  step:number,
  setStep: (step:number) => void
  phone:string;
  setPhone: (phone:string) => void
}

const OnboardingContext = createContext<OnBoardingContextType | undefined>(undefined)

export const OnboardingProvider = ({children}:{children:ReactNode})=>{
  const [step, setStep] = useState(1)
  const [phone, setPhone] =useState('')

  return(
    <OnboardingContext.Provider value={{step, setStep, phone, setPhone}}>
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = ()=>{
  const context = useContext(OnboardingContext)
  if(!context) throw new Error("useOnboarding must be used in OnboardingProvider")

  return context
}