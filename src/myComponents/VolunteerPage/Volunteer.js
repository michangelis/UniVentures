import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./VolunteerHero";
import Features from "./SocialLinks";
import Footer from "../Footer";
import Positions from "./Positions";
import ContactUs from "./ContactUs";
import {useParams} from "react-router";
import Testimonial from "./Testimonials";

const HighlightedText = tw.span`text-primary-500`;


export default () => {
    const { id } = useParams();
    console.log(id);
    return (
        <AnimationRevealPage>
            <Hero/>
            <Testimonial
                heading={<>Words from the people who helped <HighlightedText>Organize</HighlightedText> the event</>}
            />            <Positions here={true}/>
            <Features
                heading={<>Follow <HighlightedText>Them</HighlightedText>Around</>}
            />
            <Footer />
        </AnimationRevealPage>
    );
}
