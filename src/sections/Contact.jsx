function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="https://github.com/tkevinn83"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-slate-400">
              github.com/tkevinn83
            </p>
          </a>


          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">
              Correo
            </h3>


            <a
  href="mailto:tkevinn83@gmail.com"
  className="text-slate-400 hover:text-sky-400"
>
  tkevinn83@gmail.com
</a>



          </div>



        </div>
      </div>
    </section>
  );
}

export default Contact;