import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../partials/Searchbar";
import ProductCard from "../cards/ProductCard";
import './css/artisanPage.css'

export default function ArtisanPage({api}){
    const { id } = useParams();
    const [ artisan, setArtisan ] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);

    const text = 'Etiam ac enim erat. Aenean vehicula feugiat purus at placerat. Morbi nec neque magna. Sed convallis elit lorem, ut ornare eros bibendum quis. In bibendum, ante ut auctor vestibulum, augue ex malesuada lacus, ac mollis dui quam sit amet libero. Aenean sollicitudin interdum suscipit. Curabitur massa sapien, varius at elementum sit amet, posuere ut dolor. Nam ante metus, elementum non turpis ac, cursus laoreet nisl. Morbi lobortis pharetra porta. Pellentesque tempor finibus metus, eu tincidunt justo consectetur ac. Nullam at diam vitae tortor accumsan aliquam sagittis vitae velit. Nulla pulvinar, tellus ac euismod faucibus, neque urna semper augue, et feugiat tellus felis vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc volutpat lorem at felis auctor, sit amet gravida erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras est sem, tristique eu magna vel, egestas tincidunt nisi.'

    useEffect(() => {
        fetch(`${api}/artisans/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Error loading page. Try again later');
            }
            return res.json();
          })
          .then((data) => {
            setArtisan(data);
          })
          .catch((error) => {
            console.error('Error fetching artisan: ', error);
          });
    }, []);

    function toggleText(){
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <div className="container-fluid mt-5">
            <div className="artisan-header w-100" style={{position: 'relative', marginBottom:'140px'}}>
              <div className="px-md-4 w-100" style={{overflow: 'hidden'}}>
                <img className="w-100" height='auto' src="https://ih0.redbubble.net/cover.749544.2400x600.jpg" alt="cover"/>
              </div>

              <div className="d-flex justify-content-center flex-wrap" style={{position: 'absolute', left:'0', right:'0', top:'90%'}}>
                <div className="profile-pic mb-2" style={{overflow: 'hidden', borderRadius:'100%', border:'2px solid white'}}>
                  <img className="w-100" src="https://ih1.redbubble.net/avatar.970605.140x140.jpg" alt="profile" />
                </div>
                <p className="h4 text-center w-100">Artisan name</p>
                <p className="small text-secondary">
                  <span className="me-2">
                    Joined January 2024,
                  </span>
                  <span>
                    20 items
                  </span>
                </p>
              </div>
            </div>

            <div className="container mb-5">
              <p className="h6">
                About Artisan
              </p>
              <p className="small text-secondary">
                {isExpanded ? text : `${text.slice(0, 200)}...`}
              </p>
              <p style={{fontSize: "small"}} className='fw-bold text-success read-more-less' onClick={toggleText}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </p>
            </div>

            <div className="container mb-2 d-flex justify-content-center">
              <form className="w-100" style={{position: "relative", width: "80%"}}>
                <input className="form-control" type="text" placeholder="Search..."/>
                <button className='btn btn-link search-icon' style={{top: '0px', right: '1vh', fontSize: '17px'}}>
                    <i class="bi bi-search"></i>
                </button>
              </form>
            </div>

            <div className="container">
              <p className="h5">
                Shop
              </p>

              <div className="d-flex justify-content-start gap-2 flex-wrap mt-3">
                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>

                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>

                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>

                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>

                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>

                <div className="result">
                    <ProductCard page={'shop'}/>
                </div>
            </div>
            </div>
            <Searchbar />
        </div>
    )
}