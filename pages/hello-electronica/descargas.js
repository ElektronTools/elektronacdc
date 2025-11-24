import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const Descargas = () => {
  const router = useRouter();

  // Arreglo de posts
  const posts = [
    {
      title: "Proteus 8.17",
      imagenURL: "https://3.bp.blogspot.com/-vIudlSKLRjk/WyJC3P55deI/AAAAAAAAAv0/20SWkmyPe24jKTF-wxR85FraIhWgJFRpQCLcBGAs/s1600/p8n.JPG"
    },
  ];

  const handleDownload = () => {
    router.push('/proteus');
  };

  return (
    <Layout footer={false} title="Descargas - Hello Electronica" dark>
      <div className='container'>
        <div className='row justify-content-center'>
          {posts.map((post, i) => (
            <div key={i} className='col-md-6 col-lg-4 mb-4'>
              <div className='card text-center shadow-lg border-0 rounded-3'>
                <div className='overflow-hidden rounded-top'>
                  <img src={post.imagenURL} className='card-img-top object-fit-cover' style={{ height: '200px' }} alt="Post" />
                </div>
                <div className='card-body'>
                  <h5 
                    className='card-title fw-bold' 
                    onClick={handleDownload} 
                    style={{ cursor: 'pointer', color: '#ff5733', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', transition: 'color 0.3s ease' }}
                    onMouseOver={(e) => e.target.style.color = '#ff3300'}
                    onMouseOut={(e) => e.target.style.color = '#ff5733'}
                  >
                    {post.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Descargas;