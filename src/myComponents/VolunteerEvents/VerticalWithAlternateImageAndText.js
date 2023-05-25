import React, {useEffect, useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../../components/misc/Headings.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import {API_URL} from "../../api";

const Container = tw.div`relative mt-16`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const CarouselContainer = styled.div`
  ${tw`w-full md:w-3/5 mx-auto`}
`;

const CarouselCaption = styled.p`
  ${tw`text-xl font-bold text-white`}
`;

const Caption = tw.div`bg-white text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mt-4 mb-4 text-center p-4 rounded-lg`;


export default () => {
  /*const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: ["Paid"],
      title: "Loachella, NYC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: ["Free"],
      title: "Rock In Rio, Upstate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: ["Exclusive", "Free"],
      title: "Lollapalooza, Manhattan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    }
  ];*/

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(API_URL + 'get_vol_events/')
        .then(response => {
          setCards(response.data)
        })
        .catch(error => {
          console.log(error);
        });
  }, []);


  const images = [
    {imgSrc: "../../images/tedxathens.png"},
    {imgSrc: "../../images/vol.webp"},
    {imgSrc: "../../images/vol1.jpeg"},

  ];

  return (
    <Container>
      <CarouselContainer>
        <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            dynamicHeight
            emulateTouch
        >
          {images.map((card, index) => (
              <div key={index}>
                <img
                    src={card.imgSrc}
                    alt="Cannot display image"
                    style={{
                      height: '300px', // Set to desired height
                      width: '100%', // Set to desired width
                      objectFit: 'cover',
                    }}
                />
              </div>
          ))}
        </Carousel>
      </CarouselContainer>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Volunteering Events</HeadingTitle>
          <HeadingDescription>
            Join events and make a difference. Experience rewarding moments, meet inspiring people, and create lasting memories
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {card.subtitle.map((categ) => (
                    <Subtitle>{categ}</Subtitle>
                ))}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={`/volunteer/${card.id}`}>See Event Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
