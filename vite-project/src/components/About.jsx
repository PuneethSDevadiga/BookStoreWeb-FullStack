import React from "react";

const About = () => {
  return (
    <section className="pt-32 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-600">About Us</h1>
          <p className="bg-white text-black  dark:bg-black dark:text-white mt-4">
            Welcome to{" "}
            <span className="text-green-600 font-bold">Book Store</span>, your
            one-stop shop for all your literary needs. Discover, learn, and
            immerse yourself in the magical world of books!
          </p>
          
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://wallpaperaccess.com/full/1697170.jpg"
              alt="Bookshelf"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Content Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Our Story
            </h2>
            <p className="bg-white text-black  dark:bg-black dark:text-white mb-4 leading-relaxed">
              At <span className="text-green-600 font-bold">Book Store</span>,
              we believe in the transformative power of books. Founded with a
              passion for knowledge and storytelling, we strive to connect
              readers with stories that inspire, educate, and entertain.
            </p>
            <p className="bg-white text-black  dark:bg-black dark:text-white leading-relaxed pb-6">
              Whether you’re looking for the latest bestsellers, timeless
              classics, or niche genres, our curated selection is designed to
              cater to every reader’s taste. With a commitment to quality and
              customer satisfaction, we aim to create a community where book
              lovers can thrive.
            </p>
            <details className="collapse bg-green-600 ">
              <summary className="collapse-title  text-white dark:text-black text-xl font-bold">
                Learn More
              </summary>
              <div className="collapse-content text-white dark:text-black">
                <p>We also host regular events such as book signings, reading sessions, and workshops to nurture a thriving community of book enthusiasts. Come join us on this journey of literary discovery and connect with fellow book lovers!</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
