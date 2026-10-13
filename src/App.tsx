import './App.css'
/*import styles from "./App.module.css";*/
import BenefitsSection from './assets/Components/BenefitsSection/BenefitsSection';
import { BENEFITS_DATA } from './assets/Components/BenefitsSection/benefitsData';
import FaqSection from './assets/Components/FaqSection/FaqSection';
import { FAQ_DATA } from './assets/Components/FaqSection/faqData';
import Footer from './assets/Components/Footer/Footer';
import { FOOTER_DATA } from './assets/Components/Footer/footerData';
import Header from './assets/Components/Header/Header'
import HeroSection from './assets/Components/HeroSection/HeroSection'
import { HERO_DATA } from "./assets/Components/HeroSection/heroData";
import PagesSection from './assets/Components/PagesSection/PagesSection';
import { PAGES_DATA } from './assets/Components/PagesSection/pagesData';
import TestimonialsSection from './assets/Components/TestimonialsSection/TestimonialsSection';
import { TESTIMONIALS_DATA } from './assets/Components/TestimonialsSection/testimonialsData';
function App() {
  
  return (
    <div >
<Header/>
 <main >
        <HeroSection {...HERO_DATA} />
        <BenefitsSection {...BENEFITS_DATA} />
        <TestimonialsSection {...TESTIMONIALS_DATA} />
        <FaqSection {...FAQ_DATA} />
        <PagesSection {...PAGES_DATA} />
      <Footer {...FOOTER_DATA} />
    </main>
    </div>
  )
}

export default App
