import React from "react";
import { Container } from "../components/Container";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#F3F5F4]">
      <Container>
        <div className="flex md:flex-row flex-col pt-16" id="about">
          <div className="md:w-[68%]  ">
            <div className="flex w-fit items-center space-x-2">
             <div className="h-1 w-6 md:w-12 bg-[#001F10]"> </div>
             <h1 className="md:text-3xl text-2xl font-bold text-[#001F10]"> Ecosystem-based Solutions </h1>
             <div className="h-1 w-6 md:w-12 bg-[#001F10]"> </div>
            </div>
 

            <p className="max-w-[40rem] text-[#777777]  leading-snug mt-2">
              {" "}
              Our mission is to empower individuals, communities, and organizations to become proactive stewards of the natural world. By implementing innovative ecosystem-based solutions, we aim to foster sustainability, resilience, and a deep understanding of the interconnectedness of nature. Through our educational initiatives, we strive to inspire action that helps preserve and restore ecosystems, ensuring a balanced relationship between human activity and the environment.

We recognize that ecosystems provide essential services such as clean air, water, and fertile soil, all of which support life on Earth. Our approach integrates science, local knowledge, and community-driven efforts to address environmental challenges such as habitat loss, climate change, and biodiversity decline. By combining conservation with sustainable development practices, we work towards creating systems that not only protect the environment but also improve the quality of life for people.
            </p>
          </div>

          <div className="md:w-[30%]">
            <Image
              alt="biosphere logo"
              src="/assets/images/kids.png"
              width={400}
              height={400}
              className="w-fit mx-auto mt-8"
            />
          </div>
        </div>



        <div className="flex  md:flex-row flex-col-reverse justify-between w-full mt-20">
          

          <div className="md:w-[30%]">
            <Image
              alt="biosphere logo"
              src="/assets/images/union.png"
              width={300}
              height={420}
              className=" max-md:w-fit mx-auto "
            />
          </div>

          <div className="md:w-[50%]">
            <div className="flex  items-center space-x-2">
             <div className="h-1 w-12 bg-[#001F10]"> </div>
             <h1 className="text-2xl md:text-3xl font-bold text-[#001F10]"> Customized Strategies </h1>
             <div className="h-1 w-12 bg-[#001F10]"> </div>
            </div>
 

            <p className="mt-2 text-[#777777] leading-snug">
              {" "}
              We take a holistic, science-based approach to ecosystem restoration and management. By deeply understanding the complex relationships between all living and non-living components of an ecosystem, we develop tailored strategies that promote long-term resilience, biodiversity, and ecosystem services. Our work focuses on the intricate balance between human activities and the natural world, ensuring that both can coexist sustainably and thrive together.

Each ecosystem is unique, with its own challenges, opportunities, and needs. Our team of experts carefully assesses the ecological, social, and economic factors of the area in question, considering both the immediate and long-term impacts of potential interventions. This thorough understanding enables us to design customized solutions that address the root causes of environmental degradation, whether it&apos;s deforestation, soil erosion, water scarcity, or biodiversity loss.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
