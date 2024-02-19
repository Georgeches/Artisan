import ArtisanCard from '../cards/ArtisanCard'

export default function ArtisansSection({artisans}){
    return (
        <div className="container section-flex section mt-4">
            <h4>Featured Artisans</h4>
            <div className="artisans list-flex">
                {artisans.map(artisan=><ArtisanCard key={artisan._id} artisan={artisan}/>)}
            </div>
        </div>
    )
}