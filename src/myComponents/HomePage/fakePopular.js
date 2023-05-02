import pangea from "../../images/pangea.webp";
import play from "../../images/play.jpeg";
import planbiz from "../../images/planbiz.jpeg";
import talent from "../../images/collegeLink.png";
const popular = [
    {
        id: 1,
        imageSrc: pangea,
        title: "Pangea Main Event",
        description: "TEDxAUEB Pangea event brought together diverse speakers to share ideas on bridging global challenges through innovation and collaboration.",
        locationText: "Megaro Mousikis, Athens",
        pricingText: "USD 39",
        rating: 4.8,
    },
    {
        id: 2,
        imageSrc: play,
        title: "Play Main Event",
        description: "TEDxNTUA Play event showcased speakers sharing insights on the importance of play in personal and professional development.",
        locationText: "Zografou, Athens",
        pricingText: "USD 50/Day",
        rating: 4.9,
    },
    {
        id: 3,
        imageSrc: planbiz,
        title: "PlanBiz",
        description: "Educational workshops, interactive games and projects now start and ThinkBiz team is getting closer to his goal",
        locationText: "Mitropolis College, Athens",
        pricingText: "USD 19/Day",
        rating: 5.0,
    },
    {
        id: 4,
        imageSrc: talent,
        title: "Talent Days",
        description: "Talent Days hosted by College Link event aimed to connect students with potential employers through networking and job opportunities..",
        locationText: "College Link HQ",
        pricingText: "USD 99/Day",
        rating: 4.5,
    },
]

export function getEvents(){
    return popular;
}