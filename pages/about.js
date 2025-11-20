import Image from 'next/image';

export default function About() {
  return (
    <div className="container mt-4">
      <h1>Acerca de ELEKTRON AC⚡DC</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <p>
            ELEKTRON AC⚡DC es una plataforma educativa dedicada a la enseñanza de electrónica y programación.
            Nuestro objetivo es proporcionar recursos de alta calidad para estudiantes, aficionados y profesionales.
          </p>
          <p>
            Ofrecemos laboratorios virtuales, tutoriales paso a paso y programas descargables para ayudarte
            a aprender y experimentar con la electrónica y la programación.
          </p>
        </div>
        <div className="col-md-6">
          <div className="position-relative" style={{ height: '300px' }}>
            <Image
              src="/elektronlabremote.png"
              alt="Equipo de Elektron Lab"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
