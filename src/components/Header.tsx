export default function Header() {
  return (
    <header className="flex align-middle p-4 md:px-8 md:py-6 ">
      <div className="flex-grow">
        <a
          href="/"
          className="border-cyan-600 border-b-2 pb-2 hover:text-cyan-600 transition-all cursor-pointer"
        >
          fmd
        </a>
      </div>
      <nav className="flex gap-4">
        <a
          href="#projects"
          className="hover:-translate-y-1 border-b-2 pb-2 border-orange-400 hover:text-orange-400 cursor-pointer transition-all"
        >
          projects
        </a>

        <a
          href="#contact"
          className="hover:-translate-y-1 border-b-2 pb-2 border-orange-400 hover:text-orange-400 cursor-pointer transition-all"
        >
          contact
        </a>
      </nav>
    </header>
  );
}
