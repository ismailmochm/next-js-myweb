import Navbar from '../components/Navbar'
import Head from 'next/head'

function portofolioPage() {
  return (
    <>
    <Head>
      <title>Portofolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

      <Navbar/>

      <section className="body-hero">
        <div className="container">
          <div className="body-text w-full">
            <h1 className="body-title">Protofolio</h1>
            <p className="body-deskripsi"> voluptate riosam error optio, adipisci voluptates!</p>

            <div className="port-wraper">
              <div className="body-port">
                <img src="/image1.jpg" className="port-img"/>
                <h4 className="port-title">Mobile Dev</h4>
                <div className="port-subTitle">Food App</div>
              </div>
              <div className="body-port">
                <img src="/image1.jpg" className="port-img"/>
                <h4 className="port-title">Mobile Dev</h4>
                <div className="port-subTitle">Food App</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
  
}

export default portofolioPage