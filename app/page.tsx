"use client"
import useCounter from "@/stores/useCounter";
import Link from "next/link";

export default function Home() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to Zustand Demo!</h1>
      <p className="text-lg mt-4">
        This is a simple demo to show how Zustand works with Next.js.
      </p>
      <p className="text-lg mt-4">
        Count: {count}
      </p>
      <button
        onClick={increment}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me!
      </button>
      <Link className="mt-4 text-blue-500 hover:underline" href="/details">
        Go to Details
      </Link>
    </div>
  );
}
