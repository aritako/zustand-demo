import { create } from 'zustand';

export interface CounterStateStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = create<CounterStateStore>((set) => ({
  count: 0,
  increment: () => set((state: { count: number; }) => ({ count: state.count + 1 })),
  decrement: () => set((state: { count: number; }) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounter;