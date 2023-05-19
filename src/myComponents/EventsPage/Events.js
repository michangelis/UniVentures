import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Footer from "../Footer";
import { SectionHeading } from "components/misc/Headings";
import {PrimaryButton as PrimaryButtonBase, PrimaryButton} from "components/misc/Buttons";
import SelectCateg from "./SelectCateg";
import {motion, AnimatePresence} from "framer-motion";
import Nav from "../Nav";
import {ReactComponent as StarIcon} from "../../images/star-icon.svg";
import {ReactComponent as SvgDecoratorBlob1} from "../../images/svg-decorator-blob-5.svg";
import {ReactComponent as SvgDecoratorBlob2} from "../../images/svg-decorator-blob-7.svg";
import {filterEvents, getEvents} from "./fakeEvents";
import {Link} from "react-router-dom";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
const TabsContainer = tw.div`sm:flex-row sm:flex-wrap h-full max-w-6xl`;

const TabsControl = tw.div`flex flex-col bg-primary-500 px-2 py-5 rounded leading-none mt-12 xl:mt-0 sm:flex-row sm:flex-wrap sm:h-auto sm:max-h-full`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
  ${tw`h-12`}
`;
const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default function Events(){

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedVol, setSelectedVol] = useState(false);


    const categOptions = [
        { value: "StartUps", label: "StartUps" },
        { value: "Tech", label: "Tech" },
        { value: "TEDxEvents", label: "TEDxEvents" },
        { value: "Uni", label: "Uni" },
    ];

    const timeOptions = [
        { value: "today", label: "today" },
        { value: "This weekend", label: "This weekend" },
        { value: "This week", label: "This week" },
        { value: "This month", label: "This month" },
    ];

    const locationOptions = [
        { value: "Zografou, Athens", label: "Zografou" },
        { value: "Kerameikos, Athens", label: "Kerameikos" },
        { value: "Viktoria, Athens", label: "Viktoria" },
        { value: "Aegaleo, Athens", label: "Aegaleo" },
        { value: "Kerameikos, Athens", label: "Kerameikos" },
        { value: "Megaro Mousikis, Athens", label: "Megaro Mousikis" },
    ];

    const volunteerOptions = [
        { value: true, label: "Yes" },
        { value: false, label: "No" },

    ];




    const events = filterEvents(selectedCategory, selectedLocation, selectedTime, selectedVol);

    return (
        <AnimationRevealPage>
            <Nav />
            <Container>
                <ContentWithPaddingXl>
                    <div style={{paddingTop:"20px"}}>
                        <TabsContainer>
                        <TabsControl>
                            <div tw="flex-grow">
                                <TabControl>
                                    <SelectCateg
                                        title="Category"
                                        options={categOptions}
                                        setSelectedOption={setSelectedCategory}
                                        isMulti={true}
                                    />
                                </TabControl>
                            </div>
                            <div tw="flex-grow">
                                <TabControl>
                                    <SelectCateg
                                        title="Time"
                                        options={timeOptions}
                                        setSelectedOption={setSelectedTime}
                                        isMulti={true}
                                    />
                                </TabControl>
                            </div>
                            <div tw="flex-grow">
                                <TabControl>
                                    <SelectCateg
                                        title="Location"
                                        options={locationOptions}
                                        setSelectedOption={setSelectedLocation}
                                        isMulti={true}
                                    />
                                </TabControl>
                            </div>
                            <div tw="flex-grow">
                                <TabControl>
                                    <SelectCateg
                                        title="Volunteer ?"
                                        options={volunteerOptions}
                                        setSelectedOption={setSelectedVol}
                                        isMulti={false}
                                    />
                                </TabControl>
                            </div>
                        </TabsControl>
                        </TabsContainer>
                    </div>
                    <AnimatePresence>
                        <TabContent
                            variants={{
                                current: {
                                    opacity: 1,
                                    scale:1,
                                    display: "flex",
                                },
                                hidden: {
                                    opacity: 0,
                                    scale:0.8,
                                    display: "none",
                                }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                        {events.map((card, index) => (
                            <CardContainer key={index}>
                                <Card className="group" href="#" initial="rest" whileHover="hover" animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        <CardRatingContainer>
                                            <CardRating>
                                                {card.date}
                                            </CardRating>
                                        </CardRatingContainer>
                                        <CardHoverOverlay
                                            variants={{
                                                hover: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                rest: {
                                                    opacity: 0,
                                                    height: 0
                                                }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Link to={{pathname: `/event/${card.id}`}} style={{textDecoration: "none"}}>
                                                <CardButton>View Event</CardButton>
                                            </Link>
                                        </CardHoverOverlay>
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle>{card.name}</CardTitle>
                                        <CardContent>{card.location}</CardContent>
                                    </CardText>
                                </Card>
                            </CardContainer>
                        ))}
                        </TabContent>
                    </AnimatePresence>
                </ContentWithPaddingXl>
            </Container>
            <Footer />
        </AnimationRevealPage>
    );
};





