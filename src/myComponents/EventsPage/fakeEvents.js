import pangea from "../../images/pangea.webp";
import play from "../../images/play.jpeg";
import planbiz from "../../images/planbiz.jpeg";
import party from "../../images/ntua_party.jpeg";
import thinkbiz from "../../images/thinkbiz.png";
import techconnect from "../../images/techconnect.jpeg";
import openai from "../../images/openai.png";
import fsdet from "../../images/fsdet.png";


const events = [
    {
        id:1,
        name: "PlanBiz",
        location: "Aegaleo, Athens",
        date: "19 May 2023",
        company: "ThinkBiz Academy",
        imageSrc:planbiz,
        category: ["StartUps"],

    },
    {
        id:2,
        name: "ThinkBiz",
        location: "Aegaleo, Athens",
        date: "24 May 2023",
        company: "ThinkBiz Academy",
        imageSrc: thinkbiz,
        category: ["StartUps"],

    },
    {
        id:3,
        name: "TechConnect",
        location: "Keramikos, Athens",
        date: "20 May 2023",
        company: "Tech Conference Inc",
        imageSrc: techconnect,
        category: ["StartUps", "Tech"],

    },
    {
        id:4,
        name: "Open Conference",
        location: "Megaro Mousikis, Athens",
        date: "30 May 2023",
        company: "OpenAI",
        imageSrc: openai,
        category: ["Tech"],
    },
    {
        id:5,
        name: "TedxAUEB Main Event",
        location: "Viktoria, Athens",
        date: "25 May 2023",
        company: "TedxAUEB",
        imageSrc: pangea,
        category: ["TEDxEvents"],
    },
    {
        id:6,
        name: "TedxNTUA Main Event",
        location: "Zografou, Athens",
        date: "24 May 2023",
        company: "TedxNTUA",
        imageSrc: play,
        category: ["TEDxEvents"],
    },
    {
        id:7,
        name: "FSDET Sustainability",
        location: "Kerameikos, Athens",
        date: " 23 July 2023",
        company: "DET",
        imageSrc: fsdet,
        category: ["Uni"],

    },
    {
        id:8,
        name: "Party sto Politexneio",
        location: "Zografou, Athens",
        date: "4 May 2023",
        company: "NTUA",
        imageSrc: party,
        category: ["Uni"],
    },
]

export function getEvents(){
    return events;
}


export function filterEvents(events, categories, location, time) {
    if ((!categories || categories.length === 0) && (!location || location.length === 0) && (!time || time.length === 0)) {
        // if both categories, location, and time parameters are empty, return all events
        return events;
    } else {
        // filter events based on categories, location, and time
        return events.filter((event) => {
            let categoryMatch = false;
            let locationMatch = false;
            let timeMatch = false;

            // check if the event's category field matches any value in the categories array
            if (categories && categories.length > 0) {
                for (let i = 0; i < categories.length; i++) {
                    for (let j = 0; j < categories.length; j++) {
                        if (event.category[j] === categories[i].value) {
                            categoryMatch = true;
                            break;
                        }
                    }
                }
            } else {
                categoryMatch = true; // if categories array is empty, consider all categories
            }

            // check if the event's location field matches any value in the location array
            if (location && location.length > 0) {
                for (let i = 0; i < location.length; i++) {
                    if (event.location === location[i].value) {
                        locationMatch = true;
                        break;
                    }
                }
            } else {
                locationMatch = true; // if location array is empty, consider all locations
            }

            // check if the event's date matches the selected time
            if (time) {
                const currentDate = new Date();
                const eventDate = new Date(event.date);
                const selectedTime = String(time.value).toLowerCase(); // convert time to lowercase

                switch (selectedTime) {
                    case 'all':
                        timeMatch = true;
                        break;
                    case 'today':
                        if (isSameDay(currentDate, eventDate)) {
                            timeMatch = true;
                        }
                        break;
                    case 'this weekend':
                        if (isWeekend(eventDate)) {
                            timeMatch = true;
                        }
                        break;
                    case 'this week':
                        if (isCurrentWeek(eventDate)) {
                            timeMatch = true;
                        }
                        break;
                    case 'this month':
                        if (isCurrentMonth(eventDate)) {
                            timeMatch = true;
                        }
                        break;
                }
            } else {
                timeMatch = true; // if time is not specified, consider all times
            }

            return categoryMatch && locationMatch && timeMatch;
        });
    }
}

// Helper function to check if two dates are the same day
function isSameDay(date1, date2) {
    console.log(date1);
    console.log(date2);
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

// Helper function to check if a date falls on a weekend (Saturday or Sunday)
function isWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 6 || dayOfWeek === 0; // Saturday = 6, Sunday = 0
}

// Helper function to check if a date falls within the current week
function isCurrentWeek(date) {
    const currentDate = new Date();
    const currentWeekStart = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay()
    );
    const currentWeekEnd = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + (6 - currentDate.getDay())
    );
    return date >= currentWeekStart && date <= currentWeekEnd;
}

// Helper function to check if a date falls within the current month
function isCurrentMonth(date) {
    const currentDate = new Date();
    return (
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
    );
}

export function search(input, events){
    for(let i = 0; i < events.length; i++) {
        if(events[i].name.toLowerCase() === input.toLowerCase()) {
            return events[i].id;
        }
    }
    return null;
}
