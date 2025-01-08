"use client"
import useCounter from '@/stores/useCounter';
import Link from 'next/link';

export default function Details() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Details Page</h1>
      <p className="text-lg mt-4">
        {count > 0 ? `You clicked ${count} times` : 'You have not clicked yet'}
      </p>
      <Link href="/">
        Go back!
      </Link>
    </div>
  )
}
