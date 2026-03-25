import AlbumHero from "./_sections/AlbumHero";
import AlbumGallery from "./_sections/AlbumGallery";
import AlbumStories from "./_sections/AlbumStories";

export default function LifePage() {
    return (
        <div className="flex w-full flex-col bg-transparent overflow-hidden">
            {/* Hero scattered gallery */}
            <AlbumHero />

            {/* Main Interactive Gallery */}
            <AlbumGallery />

            {/* Parallax Stories */}
            <AlbumStories />
        </div>
    );
}
