/* eslint-disable react/prop-types */
// IMPORTING NECESSARY FILES
    // IMPORTING COMPONENTS
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProductsSection from "../components/ProductsSection"
import ArtisansSection from "../components/ArtisansSection"
import Values from "../components/Values"
import Footer from "../components/Footer"

// A FUNCTION THAT RETURNS THE HOME PAGE
export default function HomePage(props){
    return(
        <div className='h-full container-fluid p-0'>
            <Navbar/>
            <Hero />
            <ProductsSection products={props.products} artisans={props.artisans}/>
            <ArtisansSection artisans={props.artisans}/>
            <Values />
            <Footer/>
        </div>
    )
}