import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./EventHero";
import Features from "./SocialLinks";
import FeatureStats from "./FeatureStats";
import FAQ from "./Faq";
import Footer from "../Footer";
import {useParams} from "react-router";
const HighlightedText = tw.span`text-primary-500`

export default function Eventpage(){
    const { id } = useParams();
    console.log(id);
    return (
        <AnimationRevealPage>
            <Hero />
            <FeatureStats/>
            <Features
                heading={<>Follow <HighlightedText>Us</HighlightedText> Around</>}
            />
            <FAQ
                heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
            />
            <Footer />
        </AnimationRevealPage>
    );
}
