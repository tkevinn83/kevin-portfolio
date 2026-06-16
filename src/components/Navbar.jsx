function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-white font-bold text-xl">
          Kevin.dev
        </h2>

        <ul className="hidden md:flex gap-8 text-slate-300">
          <li>
            <a href="#inicio" className="hover:text-sky-400">
              Inicio
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-sky-400">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#tech" className="hover:text-sky-400">
              Tecnologías
            </a>
          </li>

          <li>
            
            <a href="#contact" className="hover:text-sky-400">
              Contacto
            </a>


          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;