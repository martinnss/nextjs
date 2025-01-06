"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  digest,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
      </body>
    </html>
  );
}