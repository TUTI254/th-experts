import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Bio from "./components/layouts/Bio"
import { RatingsAndReviews } from "./components/layouts/RatingsAndReviews"
import Pricing from "./components/layouts/Pricing"

function App() {

  return (
    <div className="bg-white">
     <Header/>
      <Bio/>
      <Pricing/>
      <RatingsAndReviews/>
      <Footer />
    </div>
  )
}

export default App
