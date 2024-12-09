"use client";
import React, { useState } from "react";
import { Container } from "./Container";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "technology", label: "Technology" },
  ];

  const handleScroll = (sectionId) => {
    setActiveTab(sectionId); // Update active tab
    const section = document.getElementById(sectionId); // Find section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to section
    }
  };

  return (
    <section className="">
      //sticky top-6 z-50
      <Container>
      <div className="flex  justify-between items-center border-[#A3EB6B1A] bg-[#0B301E] px-4 rounded-xl py-2 mt-4">
          {/* Logo */}
          <div className="max-sm:hidden">
            <Image
              alt="biosphere logo"
              src="/assets/images/logo.png"
              width={60}
              height={60}
            />
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-3 w-fit mx-auto max-sm:py-4 text-white">
            {menuItems.map((item) => (
              <p
                key={item.id}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeTab === item.id
                    ? "text-red-500 font-bold"
                    : "hover:text-red-300"
                }`}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="max-sm:hidden">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
