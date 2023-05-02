import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "../Footer";
import NavBar from "./HomeHero";
import Popular from "./Popular"
import Categories from "./Categories";
import tw from "twin.macro";
import Nav from "../Nav";

export default function homepage({ roundedHeaderButton }) {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

    return (
    <AnimationRevealPage>
        <Nav roundedHeaderButton={roundedHeaderButton} />
        <NavBar/>
        <Popular/>
        <Categories
            heading={
                <>
                    Checkout our <HighlightedText>Event Categories</HighlightedText>
                </>
            }
        />
        <Footer/>
    </AnimationRevealPage>
    );
};
