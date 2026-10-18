import Header from '../components/Header'
import Hero from '../components/Hero'
import Form from '../components/Form'
import HowItWorks from '../components/HowItWorks'
import TypesOfDebt from '../components/TypesOfDebt'
import GoogleReviews from '../components/GoogleReviews'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
      <Header />
      <main className="pt-32 px-6">
        
        <div className="mx-auto my-16 flex justify-center">
          <Hero />
          <Form />
          
        </div>
        <HowItWorks />
        <TypesOfDebt />
        <GoogleReviews />
        
      </main>
      <Footer />
    </>
    )
}
export default Home;