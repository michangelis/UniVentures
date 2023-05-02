import pangea from "../../images/pangea.webp";

const TedxAueb = [
    {
        id: 1,
        imageSrc: pangea,
        title: "Pangea Main Event",
        description: "TEDxAUEB Pangea event brought together diverse speakers to share ideas on bridging global challenges through innovation and collaboration.",
        locationText: "Megaro Mousikis, Athens",
        pricingText: "USD 39",
        videoSrc: "https://www.youtube.com/embed/KtRHV9gH83U",
        date: "2 Febuary 2023",
        location: "Keramikos, Athens",
    },
];

export function getEvent(){
    return TedxAueb;
}