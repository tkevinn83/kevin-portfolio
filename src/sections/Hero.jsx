function Hero() {
  return (
    <section id="inicio"
     className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hola, soy Kevin Echeverria
        </h1>
        <p className="text-xl md:text-2xl text-sky-400 mb-4">
             Desarrollador Full Stack
        </p>


        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Automatización • Inteligencia Artificial • Aplicaciones Web
        </p>


        <p className="max-w-2xl mx-auto text-slate-400">
             Desarrollo aplicaciones web modernas, automatizo procesos y
  construyo soluciones impulsadas por inteligencia artificial.
  Actualmente trabajo con React, Node.js, Python y bases de datos
  relacionales para crear herramientas útiles y escalables..
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

         <a
  href="#contact"
  className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold"
>
  Contactarme
</a>


          <a
  href="https://github.com/tkevinn83"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-slate-600 px-6 py-3 rounded-lg inline-block"
>
  GitHub
</a>


        </div>
      </div>
    </section>
  );
}

export default Hero;