import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "../Footer";
import NavBar from "./HomeHero";
import Popular from "./Popular"
import Categories from "./Categories";
import tw from "twin.macro";
import Nav from "../Nav";

export default function homepage({ roundedHeaderButton }) {

    return (
    <AnimationRevealPage>
        <Nav roundedHeaderButton={roundedHeaderButton} />
        <NavBar/>
        <Popular/>
        <Categories/>
        <Footer/>
    </AnimationRevealPage>
    );
};
