import { createContext, useState, useContext } from 'react';

type CounterContextType = {
    count: number;
    setCount: (count: number) => void;
};

const CounterContext = createContext<CounterContextType>({
    count: 0,
    setCount: () => {},
});

export function CounterProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);
    return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
}

export function useCounter() {
    return useContext(CounterContext);
}
