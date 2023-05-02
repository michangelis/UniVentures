import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import TabGrid from "components/cards/TabCardGrid.js";
import {Picker} from "./CategPicker";


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





export default function Events(){


    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;



    const [visible, setVisible] = useState(7);

    const onLoadMoreClick = () => {
        setVisible(v => v + 6);
    };
    const posts = [
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost(),
        getPlaceholderPost()
    ]

    return (
        <AnimationRevealPage>
            <Header />
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Actions>
                            <input type="text" placeholder="Search an Event" />
                            <button>Go!</button>
                        </Actions>
                    </HeadingRow>
                    <Posts>
                        {posts.slice(0, visible).map((post, index) => (
                            <PostContainer key={index} featured={post.featured}>
                                <Post className="group" as="a" href={post.url}>
                                    <Image imageSrc={post.imageSrc} />
                                    <Info>
                                        <Category>{post.category}</Category>
                                        <CreationDate>{post.date}</CreationDate>
                                        <Title>{post.title}</Title>
                                        {post.featured && post.description && <Description>{post.description}</Description>}
                                    </Info>
                                </Post>
                            </PostContainer>
                        ))}
                    </Posts>
                    {visible < posts.length && (
                        <ButtonContainer>
                            <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
                        </ButtonContainer>
                    )}
                    <TabGrid
                        heading={
                            <>
                                Checkout our <HighlightedText>menu.</HighlightedText>
                            </>
                        }
                    />
                </ContentWithPaddingXl>
            </Container>
            <Footer />
        </AnimationRevealPage>
    );
};

const getPlaceholderPost = () => ({
    imageSrc:
        "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Travel Guide",
    date: "April 19, 2020",
    title: "Visit the beautiful Alps in Switzerland",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://reddit.com"
});
