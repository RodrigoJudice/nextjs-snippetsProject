'use client';

interface ErrorPageProps {
  error: Error,
  reset: () => void
}

export default function ErrorPage(props: ErrorPageProps) {
  const { error } = props;

  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={props.reset}>Reset</button>
    </div>
  )
}