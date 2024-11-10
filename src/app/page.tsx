import Image from "next/image"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"

function   App(){
    return(
        <div>
            <Navbar />
            <Hero/>
            <About/>
            <Services/>
            <Contact/>
        </div>

    )
}
export default App