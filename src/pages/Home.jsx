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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
                <Hero />
            </div>

            <div className="min-w-0 lg:col-span-5">
                <Form />
            </div>
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