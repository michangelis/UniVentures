import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./EventHero";
import Features from "./SocialLinks";
import FeatureStats from "./FeatureStats";
import Testimonial from "./Testimonials";
import FAQ from "./Faq";
import Footer from "../Footer";
const HighlightedText = tw.span`text-primary-500`

export default () => {
    return (
        <AnimationRevealPage>
            <Hero/>
            <FeatureStats/>
            <Testimonial
                heading={<>Words from the people who helped <HighlightedText>Organize</HighlightedText> the event</>}
            />
            <Features
                heading={<>Follow <HighlightedText>Them</HighlightedText>Around</>}
            />
            <FAQ
                heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
            />
            <Footer />
        </AnimationRevealPage>
    );
}
