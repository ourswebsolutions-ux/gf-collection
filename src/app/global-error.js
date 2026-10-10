"use client";

// Last-resort boundary for failures in the root layout. It replaces the whole
// document, so it carries its own minimal inline styling.
export default function GlobalError({ error, retry }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf8f3",
          color: "#1c1a17",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          padding: "1.5rem",
        }}
      >
        <title>Something went wrong | GF Collection</title>
        <main style={{ maxWidth: "28rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={{ fontSize: "0.6875rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 600 }}>
            GF Collection
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 300, fontSize: "2.25rem", margin: 0 }}>
            Something went wrong.
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#514a42", margin: 0 }}>
            Please try again in a moment.{error?.digest ? ` Reference: ${error.digest}` : ""}
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              alignSelf: "flex-start",
              background: "#1c1a17",
              color: "#fbf8f3",
              border: 0,
              height: "3rem",
              padding: "0 1.75rem",
              fontSize: "0.6875rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
