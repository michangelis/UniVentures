import pangea from "../../images/pangea.webp";

const TedxAueb = [
    {
        id: 1,
        imageSrc: pangea,
        title: "Pangea Main Event",
        description: "We, the organizers of TEDxAUEB Pangea, are thrilled that you are considering volunteering for our event. Your contribution would be vital in bringing our vision to life and making a positive impact on global challenges through innovation and collaboration. Thank you for considering joining our team!",
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