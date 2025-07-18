import React from "react";
import Title from "./../components/Title";
import { assets } from "./../assets/assets";
import NewsLetterBox from './../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.aboutus}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            The Artisans Collective is a vibrant platform that celebrates the
            creativity and craftsmanship of local artisans. It offers a unique
            space for showcasing handmade products, from stunning canvas art to
            exquisite fashion and textiles.
          </p>
          <p>
            By connecting skilled artisans with customers who value authentic,
            handcrafted goods, The Artisans Collective fosters a community that
            cherishes tradition, innovation, and sustainability.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower local artisans by providing them a
            platform to showcase their handcrafted creations and connect with
            appreciative customers. We strive to promote authenticity,
            sustainability, and the preservation of traditional crafts while
            inspiring a community that values creativity and innovation.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE USE"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We ensure the highest quality by collaborating directly with
            artisans, guaranteeing that every product reflects exceptional
            craftsmanship and authenticity.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            We offer a seamless shopping experience, making it easy for
            customers to discover and purchase unique, handcrafted products from
            talented artisans.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Customer Service</b>
          <p className="text-gray-600">
            Our dedicated customer service team is committed to providing
            prompt, friendly, and reliable support to ensure a delightful
            shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
