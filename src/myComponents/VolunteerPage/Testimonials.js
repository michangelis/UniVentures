import "slick-carousel/slick/slick.css";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";
import {PrimaryButton as PrimaryButtonBase} from "../../components/misc/Buttons";
import SelectCateg from "../EventsPage/SelectCateg";
import {useParams} from "react-router";
import axios from "axios";
import {API_URL} from "../../api";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Txtarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const TabsControl = tw.div`flex flex-col bg-primary-500 px-2 py-5 rounded leading-none mt-12 xl:mt-0 sm:flex-row sm:flex-wrap sm:h-auto sm:max-h-full`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
  ${tw`h-12`}`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
                    imageSrc = loveIllustrationImageSrc,
                    imageRounded = true,
                    imageBorder = false,
                    imageShadow = false,
                    subheading = "Testimonials",
                    heading = "Words from the people who helped organize the event",
                    textOnLeft = false,
                    subh = "Contact Us",
                    head = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
                    description = "Register for position you want to be a part of and tell us why you want to be a part of this experience",
                    submitButtonText = "Volunteer",
                    formAction = "#",
                    formMethod = "get",
                }) => {


    const [sliderRef, setSliderRef] = useState(null);
    const [volOptions, setVolOptions] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(API_URL + `get_pos_shortlist/${id}/`)
            .then(response => {
                setVolOptions(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [selectedVolOptions, setSelectedVolOptions] = useState("");


    const testimonials = [
        {
            profileImageSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing Volunteering Experience",
            quote:"TEDxAUEB offers an exceptional experience with diverse speakers sharing inspiring ideas worth spreading. Attendees can connect with like-minded individuals, participate in interactive workshops, and explore new ideas. With high production value and attention to detail, TEDxAUEB ensures a seamless and memorable experience.",
            customerName: "Charlotte Hale",
            customerTitle: "TEDxAUEB event Orginizer"
        },
        {
            profileImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Talk with amazing companies that helped organize the event",
            quote: "Speaking with the amazing companies that helped organize the TEDxAUEB event can offer insights into their roles and contributions. It allows for understanding of how their expertise, resources, and innovation helped bring the event to life, and how they aligned with the event's values and vision.",
            customerName: "Adam Cuppy",
            customerTitle: "Website, Coordinator"
        }
    ];

    return (
        <Container>
            <ContentWithPaddingXl>
                <Row>
                    <TextColumn textOnLeft={true}>
                        <TextContent>
                            {subh && <Subheading>{subh}</Subheading>}
                            <Heading>{head}</Heading>
                            {description && <Description>{description}</Description>}
                            <Form action={formAction} method={formMethod}>
                                <TabControl>
                                    <SelectCateg
                                        title="Position"
                                        options={volOptions}
                                        setSelectedOption={setSelectedVolOptions}
                                        isMulti={false}
                                    />
                                </TabControl>                                <Txtarea name="message" placeholder="Your Message Here" />
                                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
                            </Form>
                        </TextContent>
                    </TextColumn>
                    <TextColumn textOnLeft={false}>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <TestimonialSlider arrows={false} ref={setSliderRef}>
                            {testimonials.map((testimonial, index) => (
                                <Testimonial key={index}>
                                    <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                                    <Quote>{testimonial.quote}</Quote>
                                    <CustomerInfoAndControlsContainer>
                                        <CustomerInfo>
                                            <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                                            <CustomerTextInfo>
                                                <CustomerName>{testimonial.customerName}</CustomerName>
                                                <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                                            </CustomerTextInfo>
                                        </CustomerInfo>
                                        <Controls>
                                            <ControlButton onClick={sliderRef?.slickPrev}>
                                                <ArrowLeftIcon />
                                            </ControlButton>
                                            <div className="divider" />
                                            <ControlButton onClick={sliderRef?.slickNext}>
                                                <ArrowRightIcon />
                                            </ControlButton>
                                        </Controls>
                                    </CustomerInfoAndControlsContainer>
                                </Testimonial>
                            ))}
                        </TestimonialSlider>
                    </TextColumn>
                </Row>
            </ContentWithPaddingXl>
        </Container>
    );
};
