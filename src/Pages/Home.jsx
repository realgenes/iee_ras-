import React, { Suspense, lazy, useState } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; // Add this import
import "slick-carousel/slick/slick-theme.css"; // Add this import
const Card = lazy(() => import("../components/card"));
const Slider = lazy(() => import("react-slick"));
import "../styles/slickCustom.css";
const SlidingCards = lazy(() => import("../components/SlidingCards"));

const Home = () => {
  // Splitting text into words
  const headingText = "About IEEE Silchar Subsection";
  const paragraphText =
    "Welcome to the official website of the IEEE Silchar Subsection. IEEE Silchar Subsection came into existence on 26th June 2021 with great efforts from the IEEE community at NIT Silchar and other IEEE Members from the North-Eastern India region. IEEE Silchar Subsection will have geographical reach over higher educational institutions in Assam, Tripura, Mizoram, Manipur, and Nagaland states of the North-Eastern Part of India in respect of activities of IEEE. The subsection works for creating opportunity and space in the line of IEEE mandate to advance technology for the benefit of humanity. The subsection looks at various technical activities, including facilitating Technical Co-Sponsorship for Conferences, Conducting Workshops, Technical Seminars, Distinguished Lecture programs, Colloquiums, and other possible technical activities. The subsection is actively engaged in bringing student members into various activities through the student chapters.";

  // Animation Variants for Word-by-Word Animation
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNews, setShowNews] = useState(true);

  const toggleExpand = () => {
    const newIsExpanded = !isExpanded;
    setIsExpanded(newIsExpanded);
    setShowNews(!newIsExpanded);
  };

  const fullText =
    "Welcome to the official website of the IEEE Silchar Subsection. IEEE Silchar Subsection came into existence on 26th June 2021 with great efforts from the IEEE community at NIT Silchar and other IEEE Members from the North-Eastern India region. IEEE Silchar Subsection will have geographical reach over higher educational institutions in Assam, Tripura, Mizoram, Manipur, and Nagaland states of the North-Eastern Part of India in respect of activities of IEEE. The subsection works for creating opportunity and space in the line of IEEE mandate to advance technology for the benefit of humanity. The subsection looks at various technical activities, including facilitating Technical Co-Sponsorship for Conferences, Conducting Workshops, Technical Seminars, Distinguished Lecture programs, Colloquiums, and other possible technical activities. The subsection is actively engaged in bringing student members into various activities through the student chapters.";

  const shortText = fullText.split(" ").slice(0, 30).join(" ") + "...";

  const images = [
    "/assets/news1.jpg",
    "/assets/news2.jpg",
    "/assets/news3.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + images.length) % images.length
    );
  };

  const carouselData = [
    {
      image: "assets/slider1.jpg",
      title: "IEEE Silchar Subsection",
    },

    {
      image: "assets/slider2.jpg",
      title: "IEEE Silchar Subsection",
    },
    {
      image: "assets/slider3.jpg",
      title: "IEEE Silchar Subsection",
    },
    {
      image: "assets/slider4.jpg",
      title: "IEEE Silchar Subsection",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7]">
      <section className="mt-20 relative flex flex-col lg:flex-row  justify-between items-center max-w-[86rem] mx-auto p-6 gap-8">
        <div className="flex w-1/2 flex-col">
          {/* {news carousel} */}
          {showNews && (
            <div className="p-4">
              <h1 className="text-5xl font-bold  flex  font-sans ml-4 mt-1 ">
                Latest News{" "}
              </h1>

              <div className=" pt-10  mr-16 h-[350px] w-[600px] m-auto transform  rounded-lg ">
                <div className="">
                  {" "}
                  <Suspense fallback={<div>Loading...</div>}>
                    <Slider {...settings}>
                      {" "}
                      {carouselData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div>
                              <img
                                src={item.image}
                                className="w-200 h-300 object-contain rounded-t-md"
                                alt=""
                              />
                            </div>

                            <div className="p-5 bg-dark-3 w-full">
                              <p className="font-semibold text-white">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </Suspense>
                </div>
              </div>
            </div>
          )}

          <div className="absolute left-1/2 transform -translate-x-1/2 border-l-4 border-dotted border-gray-400 h-[500px]"></div>
          {/* Left Content */}
          <div className="flex-1 ">
            {/* Heading Animation */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              About IEEE Silchar Subsection
            </h1>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed cursor-pointer"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? fullText : shortText}
            </motion.p>

            <motion.span
              className="text-blue-500 mt-2 inline-flex items-center cursor-pointer font-semibold"
              onClick={toggleExpand}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? "Read Less" : "Read More"}
              <ReadMoreIcon className="ml-1" />
            </motion.span>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-3 gap-6 items-center relative flex-1 -mt-12 transform scale-95">
          {/* Column 1 */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/assets/image1.jpg"
              alt="Collaboration 1"
              className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="flex flex-col gap-6 items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img
              src="./assets/image2.jpeg"
              alt="Collaboration 2"
              className="w-[220px] h-[250px] object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
            <img
              src="./assets/image3.jpeg"
              alt="Collaboration 3"
              className="w-[220px] h-[250px] object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="flex flex-col gap-6 items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              src="./assets/image4a.jpg"
              alt="Collaboration 4"
              className="w-[250px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-gray-400 my-2"></div>

      <div className="flex flex-row gap-8 items-center justify-center">
        <div className=" flex justify-center items-center ml-4 w-[400px] h-[200px] object-cover rounded-lg shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
          <Suspense fallback={<div>Loading...</div>}>
            <Card
              image="./assets/image5.jpg"
              name="Dr. Fazal A Talukdar"
              position="Section Chair"
              email="fazal@ece.nits.ac.in"
              linkedIn="https://linkedin.com"
            />
          </Suspense>
        </div>

        <div className="flex flex-col p-4 items-center justify-center">
          <div className="bg-gray-200 mb-5 p-4  rounded shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-custom-blue2">Vision</h3>
            {/* Styled Horizontal Line */}
            <div className="w-full h-[2px] bg-gray-400 my-2"></div>
            <p className="text-gray-600">
              To be an essential resource for the professional development in
              specific fields of interest of IEEE for the benefit of mankind.
            </p>
            <a href="/section" className="text-custom-blue2 flex items-center">
              Read More <ReadMoreIcon className="ml-1" />
            </a>
          </div>

          {/* Mission Div */}
          <div className="bg-gray-200   p-4  rounded shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-custom-blue2">Mission</h3>
            {/* Styled Horizontal Line */}
            <div className="w-full h-[2px] bg-gray-400 my-2"></div>
            <p className="text-gray-600">
              To provide a platform for knowledge sharing, networking, and
              career development to the local technical community.
            </p>
            <a href="section" className="text-custom-blue2 flex items-center">
              Read More <ReadMoreIcon className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-400 my-2"></div>
      <div className="w-full min-h-[600px] ">
        <h2 className="text-xl font-semibold text-custom-blue2 text-center mx-auto mb-10">
          Upcoming Events
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <SlidingCards />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
