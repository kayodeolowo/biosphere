import React from "react";
import { Container } from "../components/Container";
import { SecondaryButton } from "../components/SecondaryButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Container>
        <div>
          <h1 className="text-[4.5rem] font-bold text-center text-white mt-20">
            {" "}
            Discover the Wonders of <br />{" "}
            <span className="bg-[#CDFBA9] text-black px-1 rounded-xl">
              {" "}
              Nature's
            </span>{" "}
            Harmony{" "}
          </h1>
          <p className="text-[#CCCCCC] mt-6 text-center">
            {" "}
            Unlock the secrets of a thriving, sustainable ecosystem with our
            innovative <br /> solutions.{" "}
          </p>
          <div className="w-fit mx-auto mt-8">
            <SecondaryButton> Get Started </SecondaryButton>
          </div>
        </div>

        <div>
        <Image alt='biosphere logo'
                src="/assets/images/herobg.png"
                width={900}
                height={450}
                className="w-fit mx-auto mt-8 mb-20"/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
