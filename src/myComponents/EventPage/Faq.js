import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import {useParams} from "react-router";
import axios from "axios";
import {API_URL} from "../../api";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
                    subheading = "FAQS",
                    heading = "You have Questions ?",
                    description = "The FAQs answer common attendee questions, making the event more accessible and enjoyable by providing clear and concise information.",
                }) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    /*const faqs = [
        {
            question: "What is the theme of the TEDxAUEB event (Pangea)?",
            answer:
                "The theme of the TEDxAUEB event is Pangea: Reconnecting Our World. The event aims to explore ideas and initiatives that promote unity and interconnectedness in today's globalized world."
        },
        {
            question: "What are some important things to consider when attending a TEDx event like TEDxAUEB Pangea ?",
            answer:
                "Be prepared to listen: TEDx talks are all about ideas worth spreading, so be prepared to listen and engage with the speakers and their ideas."
        },
        {
            question: "Who can attend the TEDxAUEB event Pangea?",
            answer:
                "Anyone who is interested in TEDx talks and the theme of the event can attend the TEDxAUEB event (Pangea). However, attendees are required to purchase a ticket in advance to secure their spot."
        },
        {
            question: "Who are the speakers at the TEDxAUEB event Pangea?",
            answer:
                "The speakers at the TEDxAUEB event Pangea are experts and innovators from various fields, including technology, science, business, and the arts. Their talks will revolve around the theme of the event, exploring ways to reconnect our world and build a better future for all."
        }
    ];*/


    const { id } = useParams();
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        axios.get(API_URL + `get_event_faq/${id}/`)
            .then(response => {
                setFaqs(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
        <Container>
            <ContentWithPaddingXl>
                <Column>
                    <HeaderContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && <Description>{description}</Description>}
                    </HeaderContent>
                    <FAQSContainer>
                        {faqs.map((faq, index) => (
                            <FAQ
                                key={index}
                                onClick={() => {
                                    toggleQuestion(index);
                                }}
                                className="group"
                            >
                                <Question>
                                    <QuestionText>{faq.question}</QuestionText>
                                    <QuestionToggleIcon
                                        variants={{
                                            collapsed: { rotate: 0 },
                                            open: { rotate: -180 }
                                        }}
                                        initial="collapsed"
                                        animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                        transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <ChevronDownIcon />
                                    </QuestionToggleIcon>
                                </Question>
                                <Answer
                                    variants={{
                                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                                    }}
                                    initial="collapsed"
                                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    {faq.answer}
                                </Answer>
                            </FAQ>
                        ))}
                    </FAQSContainer>
                </Column>
            </ContentWithPaddingXl>
            <DecoratorBlob1/>
            <DecoratorBlob2 />
        </Container>
    );
};
