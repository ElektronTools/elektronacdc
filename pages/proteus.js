import Layout from '../components/Layout';
import Image from 'next/image';


const ProteusPage = () => {
  return (
    <Layout footer={false} title="Descarga Proteus 8.17" dark>
      <div className='container py-5 text-center'>
        <h2 className='font-weight-bold mb-4'><strong>Descarga Proteus 8.17</strong></h2>
        <p className='mb-4'>
          Proteus es un software de simulación y diseño de circuitos electrónicos que permite a los usuarios crear y probar circuitos antes de implementarlos físicamente.
          Es ampliamente utilizado en la educación y en la industria para prototipar y validar diseños electrónicos.
        </p>
        <div className='d-flex flex-column align-items-center'>
          <Image
            src='/proteus.png' 
            alt='Proteus 8.17'
            width={350}
            height={250}
            className='mb-3'
          />
          <a 
            href='https://drive.google.com/file/d/13kSvOf495EB67NdCO-hx0_SMUkyk-TBB/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn btn-info mb-1'
          >
            Descargar Proteus v8.17
          </a>
          <a 
            href='https://drive.google.com/file/d/12SJHGht5DvOnfQYuaNJfClADd2I5xWUw/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn btn-info mb-3'
          >
            Descargar traductor de Proteus al español
          </a>
          <a 
            href='https://drive.google.com/file/d/1tVo7DAXM4jjBqBw08hM0YQHVsK6dtgSC/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn btn-info mb-3'
          >
            Descargar librería Arduino UNO
          </a>
          <a 
            href='https://drive.google.com/file/d/11UNbW5jiSCCSgYoDkZjb36kXFEHiErCA/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn btn-info mb-3'
          >
            Descargar WinRAR
          </a>
        </div>
      </div>
    </Layout>

  );
};

export default ProteusPage;
