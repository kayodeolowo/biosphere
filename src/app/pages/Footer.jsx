import Image from "next/image";
import React from "react";
import { Container } from "../components/Container";

const Footer = () => {
  return (
    <section>
      <Container>
      <div className="flex justify-between  mb-10 mt-10">
        <div className=" text-[#F5F2F2]">
          <p> Contact us today </p>
          <p> info@biospheresolutions.com </p>
        </div>

        <div className="  flex space-x-2 items-center">
          <Image
            alt="x logo"
            src="/assets/icons/x.png"
            width={20}
            height={20}
            className=" "
          />

          <Image
            alt="ig logo"
            src="/assets/icons/ig.png"
            width={20}
            height={20}
            className=" "
          />

          <Image
            alt="facebook logo"
            src="/assets/icons/facebook.png"
            width={20}
            height={20}
            className=" "
          />

          <Image
            alt="youtube logo"
            src="/assets/icons/youtube.png"
            width={20}
            height={20}
            className=" "
          />

          <Image
            alt="linkedin logo"
            src="/assets/icons/linkedin.png"
            width={20}
            height={20}
            className=" "
          />
        </div>

        <div className=" text-[#F5F2F2]">
          <p> 62 Micheal Road, by Machester,</p>
          <p>United Kingdom </p>
        </div>
      </div>

      <div className="tetx-sm mt-10 mb-10 text-center text-gray-400">
      2024 by Kayode Olowo
      </div>
      </Container>
    </section>
  );
};

export default Footer;
