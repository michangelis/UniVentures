import React, {useEffect, useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import Nav from "../Nav";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import {useParams} from "react-router";
import axios from "axios";
import {API_URL} from "../../api";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;


const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;

const IconGrid = tw.div`flex flex-wrap justify-start items-center mb-8`; // New styled component for grid structure and bottom spacing

const IconBox = tw.div`flex items-center mb-4 w-full sm:w-1/2`; // Change 'lg:w-1/4' to 'sm:w-1/2'

const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-primary-700 text-white mr-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

const IconText = tw.div`ml-2 text-base lg:text-lg font-bold text-gray-600`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
  ${tw`h-12`}`;

const HighlightedText = tw.span`text-primary-500`


export default ({ roundedHeaderButton }) => {

    const { id } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [event, setEvent] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    useEffect(() => {
        axios.get(API_URL + `get_event/${id}/`)
            .then(response => {
                setEvent(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const pageData = [
        {
            primaryButtonText:"Volunteer",
            primaryButtonUrl:`/volunteer/${id}`,
            watchVideoButtonText:"Watch Video",
            imageCss:null,
            imageDecoratorBlob: false,
        }
    ];

    return (
        <>
            <Nav roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>{event.title} <HighlightedText>Volunteer Page</HighlightedText></Heading>
                        <Paragraph>We, the organizers of <HighlightedText>{event.title}</HighlightedText>,
                            are thrilled that you are considering volunteering for our event.
                            Your contribution would be vital in bringing our vision to life and making a
                            positive impact on global challenges through innovation and collaboration.
                            <HighlightedText>Thank you</HighlightedText> for considering joining our team!
                        </Paragraph>
                        <IconGrid>
                            <IconBox>
                                <IconContainer><TimeIcon /></IconContainer>
                                <IconText>{event.date}</IconText>
                            </IconBox>
                            <IconBox>
                                <IconContainer><LocationIcon /></IconContainer>
                                <IconText>{event.location}</IconText>
                            </IconBox>
                        </IconGrid>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img
                                css={pageData[0].imageCss}
                                src={event.imageSrc}
                                alt="Hero"
                            />
                            {pageData[0].imageDecoratorBlob && <DecoratorBlob2 />}
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
                <DecoratorBlob1 />
                <StyledModal
                    closeTimeoutMS={300}
                    className="mainHeroModal"
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <CloseModalButton onClick={toggleModal}>
                        <CloseIcon tw="w-6 h-6" />
                    </CloseModalButton>
                    <div className="content">
                        <ResponsiveVideoEmbed url={event.videoSrc} tw="w-full" />
                    </div>
                </StyledModal>
            </Container>
        </>
    );
};
