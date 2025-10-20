export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
      <a
        href="https://www.bastio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
      >
        Bastio AI Security
      </a>
      {" + "}
      <a
        href="https://ai-sdk.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
      >
        Vercel AI SDK
      </a>
      {" Demo"}
    </footer>
  );
}
