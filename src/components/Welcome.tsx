export default function Welcome() {
  return (
    <section className="min-h-full h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-zinc-50 to-zinc-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900">
      <h1 className="text-3xl my-8 text-center">Hello! I'm Fiorella.</h1>
      <div className="w-80">
        <h2 className="text-lg text-center mb-2">
          I'm a <span className="text-purple-400">Full Stack Developer</span>{" "}
          with a background in <span className="text-green-500">audio</span>.
        </h2>
      </div>
      <div className="max-w-lg py-8 px-8 my-16 border-yellow-300 dark:border-yellow-200 border-2">
        <ul className="*:mb-1 *:flex *:gap-4">
          <div>
            <li>💻</li>
            <li>JavaScript, TypeScript, Python, C</li>
          </div>
          <div>
            <li>🎧</li>
            <li>5+ Years of Experience in Audio</li>
          </div>
          <div>
            <li>🎮</li>
            <li>2 AAA video games shipped</li>
          </div>
          <div>
            <li>🇨🇦</li>
            <li>Based in Toronto</li>
          </div>
          <div>
            <li>🇵🇪</li>
            <li>Made in Peru</li>
          </div>
          <div>
            <li>🐱</li>
            <li>Cat owner</li>
          </div>
        </ul>
      </div>
    </section>
  );
}
