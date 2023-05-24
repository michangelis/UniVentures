import React from "react";
import AnimationRevealPage from "./AnimationRevealPage.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Nav from "../Nav";
import Footer from "../Footer";
import CarouselFadeExample from "./CarouselFadeExample";

export default () => (
    <AnimationRevealPage>
        <Nav/>
        <CarouselFadeExample/>
        <Features />
        <Footer/>
    </AnimationRevealPage>
);
