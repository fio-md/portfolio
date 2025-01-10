export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-full h-dvh flex flex-col justify-center bg-gradient-to-t from-zinc-50 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900"
    >
      <h2 className="text-4xl py-8 text-center">contact</h2>
      <div className="flex gap-8 justify-center my-8 *:pb-1">
        <a
          className="hover:text-cyan-600 border-b-2 border-cyan-600 "
          href="https://www.linkedin.com/in/fmarky/"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-green-500 border-b-2 border-green-500 "
          href="https://github.com/fio-md"
        >
          GitHub
        </a>
      </div>
      <form
        name="contact"
        className="flex flex-col items-center gap-4 *:sm:w-1/2"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="w-20 text-sm">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-1 pl-2 text-sm placeholder-zinc-400 text-zinc-800"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="w-20 text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-1 pl-2 text-sm placeholder-zinc-400 text-zinc-800"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="w-20 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message..."
            className="p-1 pl-2 text-sm resize-none h-40 placeholder-zinc-400 text-zinc-800"
            required
          />
        </div>
        <button
          className="px-4 py-2 border-2 text-center border-orange-400 hover:bg-orange-400 transition-all"
          type="submit"
        >
          submit
        </button>
      </form>
    </section>
  );
}
