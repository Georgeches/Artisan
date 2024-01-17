import { ArtisanCard } from "../cards/ArtisanCard";

export default function ArtisansSection(){
    return (
        <div className="container section-flex section">
            <h4>Featured Artisans</h4>
            <div className="artisans list-flex">
                <ArtisanCard />
                <ArtisanCard />
                <ArtisanCard />
                <ArtisanCard />
                <ArtisanCard />
            </div>
        </div>
    )
}