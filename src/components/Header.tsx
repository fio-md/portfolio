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
      <nav>
        <ul className="flex gap-4">
          <li className="hover:-translate-y-1 border-b-2 pb-2 border-orange-400 hover:text-orange-400 cursor-pointer transition-all">
            <a href="#projects">projects</a>
          </li>
          <li className="hover:-translate-y-1 border-b-2 pb-2 border-orange-400 hover:text-orange-400 cursor-pointer transition-all">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
