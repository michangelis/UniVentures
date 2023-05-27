import React, {useEffect, useState} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../images/signup-illustration.svg";
import logo from "../images/logo.svg";
import { ReactComponent as SubmitButtonIcon } from "feather-icons/dist/icons/user-plus.svg";
import SelectCateg from "./EventsPage/SelectCateg";
import axios from "axios";
import {API_URL} from "../api";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${pageData => `background-image: url("${pageData.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const TabControl = styled.div`
      ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
      ${tw`h-12`}
    `;

const pageData = {
    logoLinkUrl: "#",
    illustrationImageSrc: illustration,
    headingText: "Sign Up For UniVentures",
    submitButtonText: "Sign Up",
    tosUrl: "#",
    privacyPolicyUrl: "#",
    signInUrl: "/login"
}

export default function SignUP() {

    useEffect(() => {
        // Fetch options data
        axios.get(API_URL + "get_all_categories/")
            .then(response => {
                setCategOptions(response.data);
            })
            .catch(error => {
                // Handle error
                console.error("Error fetching options:", error);
            });
        axios.get(API_URL + "get_uni/")
            .then(response => {
                setUniOptions(response.data);
            })
            .catch(error => {
                // Handle error
                console.error("Error fetching options:", error);
            });

    }, []);


    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedUni, setSelectedUni] = useState('');
    const [categOptions, setCategOptions] = useState([]);
    const [uniOptions, setUniOptions] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // send the data to the server
        axios.post(API_URL + 'signup/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            categories: selectedCategory,
            uni: selectedUni
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error("Error posting data:", error);
        });
    }




    return(
    <AnimationRevealPage>
        <Container>
            <Content>
                <MainContainer>
                    <LogoLink href="/home">
                        <LogoImage src={logo} />
                    </LogoLink>
                    <MainContent>
                        <Heading>{pageData.headingText}</Heading>
                            <Form onSubmit={handleSubmit}>
                                <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div style={{height: '20px'}}/>
                                <SelectCateg
                                        title="What do you like ?"
                                        options={categOptions}
                                        setSelectedOption={setSelectedCategory}
                                        isMulti={true}
                                />
                                <div style={{height: '20px'}}/>
                                <SelectCateg
                                    title="Are you a student ?"
                                    options={uniOptions}
                                    setSelectedOption={setSelectedUni}
                                    isMulti={false}
                                />
                                <SubmitButton type="submit">
                                    <SubmitButtonIcon className="icon" />
                                    <span className="text">{pageData.submitButtonText}</span>
                                </SubmitButton>
                                <p tw="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by UniVentures{" "}
                                    <a href={pageData.tosUrl} tw="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>{" "}
                                    and its{" "}
                                    <a href={pageData.privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>

                                <p tw="mt-8 text-sm text-gray-600 text-center">
                                    Already have an account?{" "}
                                    <a href={pageData.signInUrl} tw="border-b border-gray-500 border-dotted">
                                        Sign In
                                    </a>
                                </p>
                            </Form>
                    </MainContent>
                </MainContainer>
                <IllustrationContainer>
                    <IllustrationImage imageSrc={illustration} />
                </IllustrationContainer>
            </Content>
        </Container>
    </AnimationRevealPage>
);
}
