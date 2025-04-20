

import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Modal from './Modal'; // Import the Modal component
import { title } from "framer-motion/client";


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, watchWork, portfolioData, openModal }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center opacity-60"
      />
      <div className="relative  flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {watchWork && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
            onClick={() => openModal(portfolioData)}  // Open modal on click
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative" />
            <p className="">Watch my work</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolioItems, setSelectedPortfolioItems] = useState([]);

  const portfolioData = {
    "web development": [
      {
        title: "Axzo Tech",
        description: "Developed a modern, responsive website for a full-stack agency using React.js and Tailwind CSS.",
        src: "img/axzo.PNG",
        techStack: ["React.js", "Tailwind CSS"],
        live: "https://axzo-tech.com",
      },
      {
        title: "Astro Talk",
        description: "Created a user-friendly platform for astrology enthusiasts, featuring personalized horoscopes and articles.",
        src: "img/astro.PNG",
        techStack: ["Next.js", "Tailwind CSS"],
        live: "https://astro-talk.com",
      }
    ],

    "UI/UX designing": [
      {
        title: "Azora Mobile Game",
        description: "Designed a captivating UI for a mobile game, focusing on user engagement and intuitive navigation.",
        src: "img/azora2.PNG",
        techStack: ["Figma"],
        live: "",
      },
      {
        title: "KittyCat Web Design",
        description: "Created a playful, cartoon themed and engaging web design, enhancing user experience and interaction.",
        src: "img/bonkers.PNG",
        techStack: ["Figma"],
        live: "",
      }
    ],
    "AI chatbots": [
      {
        title: "Chatbot for E-commerce",
        description: "Developed an AI chatbot for an e-commerce platform, enhancing customer support and engagement.",
        src: "img/Chatbot.png",
        techStack: ["Python", "Kommunicate", "Dialogflow"],
        live: "",
      }    ],
  };


  const openModal = (portfolioItems) => {
    console.log("run")
    setSelectedPortfolioItems(portfolioItems);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="services" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the World of Web & AI Solutions
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Discover our latest projects and innovations in the realm of Web and AI solutions. Dive into groundbreaking ideas and cutting-edge technologies that redefine possibilities.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="img/contact-2.webp"
            title={
              <>
                from <b>concept</b> to code
              </>
            }
            description="Transforming your straight ideas into reality with innovative yet responsive web solutions."
            watchWork
            portfolioData={portfolioData["web development"]} // Pass portfolio data for this service
            openModal={openModal}
          />
        </BentoTilt>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="img/web-design.jpg"
              title={
                <>
                  web development
                </>
              }
              description="Transforming digital dreams into reality with our web development expertise."
              watchWork
              portfolioData={portfolioData["web development"]} // Pass portfolio data for this service
              openModal={openModal}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 sm:ms-0 md:ms-0">
            <BentoCard
              src="img/web-dev.jpg"
              title={
                <>
                  Ui/UX Designing
                </>
              }
              description="Crafting intuitive and engaging user experiences that captivate and convert."
              watchWork
              portfolioData={portfolioData["UI/UX designing"]} // Pass portfolio data for this service
              openModal={openModal}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 sm:me-0 md:me-0">
            <BentoCard
              src="img/AiBot.jpg"
              title={
                <>
                  Ai Chatbots
                </>
              }
              description="Revolutionizing customer interactions with intelligent AI chatbots that understand and respond."
              watchWork
              portfolioData={portfolioData["AI chatbots"]} // Pass portfolio data for this service
              openModal={openModal}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-[7] self-end text-purple-900" />
            </div>
          </BentoTilt>

          {/* <BentoTilt className="bento-tilt_2">
    <video
      src="videos/feature-5.mp4"
      loop
      muted
      autoPlay
      className="size-full object-cover object-center"
    />
  </BentoTilt> */}
        </div>

      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} portfolioItems={selectedPortfolioItems} />

    </section>
  );
}

export default Features;