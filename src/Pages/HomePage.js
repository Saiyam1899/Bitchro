import React from "react";
import Advanatges from "../Components/Advantages/Advantages";
import Brand from "../Components/Brands";
import FAQ from "../Components/FAQ";
import MetaverseShare from "../Components/Metaverse/MetaverseShare";
import Roadmap from "../Components/RoadMap";
import Section from "../Components/Sections";
import Subscribe from "../Components/Subscribe";
import Team from "../Components/Team";
import TokenNomics from "../Components/TokenNomics";
import Particles from 'react-particles-js';
import Certificate from "../Components/certificate/Certificate";

export default function HomePage() {
  return (
    <>
      <div>
  
        <Section />
        <TokenNomics />
        <Roadmap />
        <Team />
        
        <MetaverseShare/>
        <Advanatges/>
        <Subscribe />
        <Certificate/>
        <FAQ />
    </div>
    </>
  );
}
