import ArtisanCard from '../cards/ArtisanCard'

export default function ArtisansSection({artisans}){
    return (
        <div className="container section-flex section mt-4">
            <h4>Featured Artisans</h4>
            <div className="artisans list-flex">
                {artisans.map(artisan=><ArtisanCard artisan={artisan}/>)}
            </div>
        </div>
    )
}