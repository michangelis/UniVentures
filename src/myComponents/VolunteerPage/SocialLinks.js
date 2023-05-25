import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import Instagram from "images/intsagram.svg";
import Website from "images/link.svg";
import Ticktock from "images/Tiktok.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.a`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
    /*
     * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
     *  1) imageSrc - the image shown at the top of the card
     *  2) title - the title of the card
     *  3) description - the description of the card
     *  If a key for a particular card is not provided, a default value is used
     */

    const defaultCards = [
        {imageSrc: Instagram, title: "Instagram", url: "https://instagram.com"},
        { imageSrc: Ticktock, title: "Tiktok", url: "https://tiktok.com" },
        { imageSrc: Website, title: "Website", url: "https://fsdet.dmst.aueb.gr/" },
    ];

    if (!cards) cards = defaultCards;

    return (
        <Container>
            <ThreeColumnContainer>
                {subheading && <Subheading>{subheading}</Subheading>}
                <Heading>{heading}</Heading>
                <VerticalSpacer />
                {cards.map((card, i) => (
                    <Column key={i}>
                        <Card href={card.url}>
                        <span className="imageContainer">
                            <img src={card.imageSrc || defaultCardImage} alt="" />
                        </span>
                            <span className="textContainer">
                            <span className="title">{card.title || "Fully Secure"}</span>
                        </span>
                        </Card>
                    </Column>
                ))}
            </ThreeColumnContainer>
            <DecoratorBlob />
        </Container>
    );
};
