import Navbar from '../components/Navbar'
import Head from 'next/head'

function contactPage() {
  return (
    <>
    <Head>
      <title>Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

      <Navbar/>

      <section className="body-hero">
        <div className="container">
          <div className="body-text w-full">
            <h1 className="body-title">Contact</h1>
            <p className="body-deskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis velit accusantium, molestiae necessitatibus recusandae nisi voluptate 
            earum repellendus accusamus sit aperiam, harum nam ad laboriosam error optio, adipisci voluptates!</p>
          </div>
        </div>
      </section>
    </>
  )
  
}

export default contactPage