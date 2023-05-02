import pangea from "../../images/pangea.webp";
import play from "../../images/play.jpeg";
import planbiz from "../../images/planbiz.jpeg";
import party from "../../images/ntua_party.jpeg";
import thinkbiz from "../../images/thinkbiz.png";
import techconnect from "../../images/techconnect.jpeg";
import openai from "../../images/openai.png";
import fsdet from "../../images/fsdet.png";




const events = {
    StartUps: [
        {
            id:1,
            name: "PlanBiz",
            location: "Marousi, Athens",
            date: "25 April 2023",
            company: "ThinkBiz Academy",
            imageSrc:planbiz,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"
        },
        {
            id:2,
            name: "ThinkBiz",
            location: "Aegaleo, Athens",
            date: "25 March 2023",
            company: "ThinkBiz Academy",
            imageSrc: thinkbiz,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"

        },

    ],
        Tech: [
        {
            id:3,
            name: "TechConnect",
            location: "Keeramikos, Athens",
            date: "2 Febuary 2023",
            company: "Tech Conference Inc",
            imageSrc: techconnect,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"

        },
        {
            id:4,
            name: "Open Conference",
            location: "Megaro Mousikis, Athens",
            date: "2 Febuary 2023",
            company: "OpenAI",
            imageSrc: openai,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"
        },
    ],
        TEDxEvents: [
        {
            id:5,
            name: "TedxAUEB Main Event",
            location: "Viktoria, Athens",
            date: "25 April 2023",
            company: "TedxAUEB",
            imageSrc: pangea,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"
        },
        {
            id:6,
            name: "TedxNTUA Main Event",
            location: "Zografou, Athens",
            date: "2 May 2023",
            company: "TedxNTUA",
            imageSrc: play,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"
        },

    ],
        Uni: [
        {
            id:7,
            name: "FSDET Sustainability",
            location: "Kerameikos, Athens",
            date: "25 April 2023",
            company: "DET",
            imageSrc: fsdet,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"

        },
        {
            id:8,
            name: "Party sto Politexneio",
            location: "Zografou, Athens",
            date: "Every Saturday",
            company: "NTUA",
            imageSrc: party,
            videoSrc: "https://www.youtube.com/watch?v=KtRHV9gH83U"
        },
    ],
}

export function getEvents(Name){
    return events[Name];
}

export default events;
