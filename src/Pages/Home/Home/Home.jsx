// import React from 'react';

import { useEffect } from "react";
import Album from "./Album/Album";
import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import SectionTree from "./SectionTree/SectionTree";
import SectionTwo from "./SectionTwo/SectionTwo";

import Aos from "./Aos/Aos";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    useEffect ( () => {
        document.title = "Toy World";
    },[])
    return (
        <div>
             <Banner></Banner>
             <Album></Album>
             <Aos></Aos>
          <Tabs></Tabs>
            <Section></Section>
            <SectionTwo></SectionTwo>
            <SectionTree></SectionTree>
            
        </div>
    );
};

export default Home;