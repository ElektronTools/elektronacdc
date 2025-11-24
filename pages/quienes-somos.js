import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-28 pb-16">

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left mb-14">
          
          {/* COLUMNA IZQUIERDA (TEXTO) */}
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] text-amber-400 uppercase">
              ⚡ PERFIL PROFESIONAL
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              👨‍🔧 Luis Alberto Alaniz Terán
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-300">
              🔌 Técnico electrónico · 💡 Maestro electricista · 💻 Desarrollador web full stack junior
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Ayudo a personas y negocios a resolver problemas eléctricos, electrónicos y de software,
              integrando hardware (microcontroladores y sensores) con sistemas web modernos y soluciones en la nube. ⚙️🌐
            </p>

            {/* BOTONES */}
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://wa.me/59169717553"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 transition"
              >
                📲 WhatsApp
              </a>

              <a
                href="/docs/CV_Luis_Alberto_Alaniz_Teran.pdf"
                download
                className="px-6 py-2.5 rounded-full text-sm font-semibold border border-slate-600 hover:border-amber-400 hover:text-amber-300 transition"
              >
                📄 Descargar CV
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA (FOTO) */}
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shadow-black/60 border-4 border-slate-800">
              <img
                src="/devLAAT.jpeg"
                alt="Foto de Luis Alberto Alaniz Terán"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">🙋‍♂️ Sobre mí</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Soy Técnico Electrónico egresado del Instituto Técnico “Pedro Domingo Murillo” y estudiante de Informática en la UMSA.
            Me especializo en instalaciones eléctricas, reparación electrónica y desarrollo de sistemas web integrados con hardware.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            Me gusta brindar soluciones claras, eficientes y bien explicadas para que mis clientes
            tengan control real sobre su energía, infraestructura y sistemas digitales. 🤝⚡
          </p>
        </section>

        {/* CONTACTO */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">📞 Datos de contacto</h3>
          <p className="text-sm text-slate-300"><strong>📱 WhatsApp:</strong> +591 69717553</p>
          <p className="text-sm text-slate-300">
            <strong>📧 Correo:</strong>{" "}
            <a href="mailto:laat.elt@gmail.com" className="text-amber-300 hover:underline">
              laat.elt@gmail.com
            </a>
          </p>
          <p className="text-sm text-slate-300"><strong>📍 Ciudad:</strong> Oruro – Bolivia</p>
          <p className="text-sm text-slate-300"><strong>⏳ Disponibilidad:</strong> Inmediata</p>

          <p className="text-xs text-slate-500 mt-3">
            🔐 Datos sensibles solo se entregan en procesos formales de contratación.
          </p>
        </section>

        {/* FORMACIÓN */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">🎓 Formación académica</h3>
          <p className="text-sm text-slate-300 mb-1">📘 Bachiller – Colegio Adventista (Viacha) – 2012</p>
          <p className="text-sm text-slate-300 mb-1">🔧 Técnico Superior en Electrónica – PDM – 2023</p>
          <p className="text-sm text-slate-300 mb-1">💻 Informática – UMSA</p>
        </section>

        {/* CURSOS */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">📚 Cursos y certificaciones</h3>

          <ul className="text-sm text-slate-300 space-y-2">
            <li>🛠 Ensamblado y mantenimiento de computadoras</li>
            <li>🌐 Redes LAN y configuración</li>
            <li>📟 Microcontroladores PIC</li>
            <li>⚡ Sistemas de puesta a tierra</li>
            <li>🔌 Redes de fibra óptica</li>
            <li>🌄 Lengua aimara y cultura</li>
            <li>📜 Ley 1178 – SAFCO</li>
          </ul>
        </section>

        {/* EXPERIENCIA */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold mb-5 text-amber-300">💼 Experiencia laboral</h3>

          <div className="space-y-5">
            <div>
              <p className="text-xs text-slate-400">📅 Nov 2023 – Dic 2023</p>
              <p className="font-semibold text-sm">GAM El Alto – Unidad de Sistemas</p>
              <p className="text-sm text-slate-300">🖥 Técnico Administrativo C / Soporte Técnico</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">📅 Sep 2023 – Nov 2023</p>
              <p className="font-semibold text-sm">GAM El Alto – Unidad de Sistemas</p>
              <p className="text-sm text-slate-300">🔧 Prácticas profesionales</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">📅 Ene 2022 – Jul 2022</p>
              <p className="font-semibold text-sm">Imagine Nuestro Arte Es Cultura</p>
              <p className="text-sm text-slate-300">⚙ Soporte técnico mecánico y electrónico</p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">🔧 Servicios que ofrezco</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>⚡ Instalaciones y mantenimiento eléctrico</li>
            <li>🔌 Reparación de equipos electrónicos</li>
            <li>💻 Desarrollo web (frontend & backend)</li>
            <li>📡 Proyectos IoT con ESP32 y sensores</li>
          </ul>

          <p className="mt-5 text-sm text-slate-300">
            ¿Tienes un proyecto? Estoy listo para ayudarte. 🤝⚡
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
