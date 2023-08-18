import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "../../assets/banner.png";
import { AiFillApple } from "react-icons/ai";

import BG from "../../assets/BG.svg";
import VectorOne from "../../assets/vector-1.png";
import PhoneScreenShoot3 from "../../assets/onbrdng 2.png";
import ConnectorOne from "../../assets/conector-1.svg";
import ConnectorTwo from "../../assets/conector-2.svg";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import DotsOne from "../../assets/dots-1.png";
import DotsTwo from "../../assets/dots-2.svg";
import BGPattern2 from "../../assets/Patterns.png";
import HappyCustomer from "../../assets/happy-customer.png";
import Input from "../../components/UI/Input/Input";
import Footer from "../../components/shared/Footer/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <section className="mt-10 flex items-center justify-between wrapper relativee">
        <div className="flex-1">
          <h1 className="uppercase text-6xl font-extrabold mb-10">
            Run your
            <span className="text-primary"> payroll</span>
          </h1>
          <h1 className="uppercase text-6xl font-extrabold">
            easily in seconds
          </h1>

          <p className="mt-5">
            With our World-Class Logistics Technology Solutions, we provide a
            wide range of services and products to meet your last-mile delivery
            need
          </p>

          <div>
            <Button
              text="Start Using Free, Forever"
              classNames="rounded-full mt-4 px-10 py-5"
            />
          </div>

          <div className="flex mt-10">
            <button className="px-2 py-3 bg-white rounded-md text-black shadow-xl flex items-center mr-3">
              <AiFillApple size={40} className="mr-5" />
              <div>
                <small>Download on the</small>
                <h2>App Stores</h2>
              </div>
            </button>

            <button className="px-4 py-3 bg-white rounded-md shadow-xl text-black flex items-center">
              <IoLogoGooglePlaystore size={40} className="mr-5" />
              <div>
                <small>Download on the</small>
                <h2>Play Store</h2>
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1 absoluteee right-00">
          <img src={Banner} alt="" className="w-567" />
        </div>
      </section>

      <section
        className="mt-10 py-10 h-full"
        style={{
          backgroundImage: `url(${VectorOne}) no-repeat center center/cover`,
          height: "100%",
        }}
      >
        <div className="wrapper">
          <div className="text-center">
            <h2 className="text-primary text-4xl">
              For Individuals and Businesses
            </h2>
            <p>Join 200+ businesses using Eazipay's easy solution.</p>
          </div>

          <div className="flex mt-10 text-white relative">
            <Card classNames="py-12 px-20 w-[552px] h-[320px] card-gradient-bg rounded-md flex flex-col justify-center">
              <h2 className="text-2xl mb-3">Tamper-proof Payroll for LIfe</h2>
              <p>Your staff payroll history is kept in one place forever.</p>
              <p>No more excel sheet or manual records.</p>
              <p>Download your payroll history anytime you need it.</p>
            </Card>

            <Card classNames="py-12 px-20 w-[552px] h-[320px] card-gradient-bg rounded-md absolute left-[300px] flex flex-col justify-center">
              <h2 className="text-2xl mb-3">Tamper-proof Payroll for LIfe</h2>
              <p>Your staff payroll history is kept in one place forever.</p>
              <p>No more excel sheet or manual records.</p>
              <p>Download your payroll history anytime you need it.</p>
            </Card>

            <Card classNames="py-12 px-20 w-[552px] h-[320px] card-gradient-bg rounded-md absolute left-[600px] flex flex-col justify-center">
              <h2 className="text-2xl mb-3">Tamper-proof Payroll for LIfe</h2>
              <p>Your staff payroll history is kept in one place forever.</p>
              <p>No more excel sheet or manual records.</p>
              <p>Download your payroll history anytime you need it.</p>
            </Card>
          </div>

          <p className="w-1/2 mx-auto mt-10 text-center">
            We are happy to answer your queries. Please, reach us at
            hello@myeazipay.com and expect our response shortly after.We are
            happy to answer your queries. Please, reach us at
            hello@myeazipay.com and expect our response shortly after.
          </p>
        </div>
      </section>

      <section className="wrapper my-10">
        <div className="text-center">
          <h2 className="text-4xl">How Eazipay Works</h2>
          <p>Get started in 3 simple steps.</p>
        </div>

        <div className="flex justify-between mt-48">
          <div
            style={{
              background: `url(${BG}) no-repeat center center/cover`,
              width: "430px",
              height: "400px",
            }}
            className="flex-11 mt-6"
          >
            <div className="flex items-center justify-center h-full bg-red-6000">
              <img
                src={PhoneScreenShoot3}
                alt=""
                className="object-cover w-64"
              />
            </div>
          </div>

          <div className="flex flex-col relative">
            <div className="flex">
              <img src={ConnectorOne} alt="" />
              <div>
                <div className="bg-primary text-white px-5 py-3 rounded-lg w-20 flex items-center justify-center">
                  <h2>1</h2>
                </div>
                <div>
                  <h2 className="text-primary font-extrabold py-5">
                    Create Your Free Account
                  </h2>
                  <p>Click here to set up your Eazipay account.</p>
                </div>
              </div>
            </div>

            <div className="flex ml-16 relative -top-10 left-0">
              <div className="bg-yellow-4000">
                <div className="bg-[#F2F1F1] text-black px-5 py-3 rounded-lg w-20 flex items-center justify-center">
                  <h2>2</h2>
                </div>
                {/* w-20 relative top-10 left-0 */}
                {/* <div className="w-20">
                  <h2 className="text-primary font-extrabold py-5">
                    Add Employee Data
                  </h2>
                  <p>Your employee information is 100% safe and secure.</p>
                </div> */}
              </div>
              <div className="mt-5 mr-9 relative -top-0 left-0 bg-blue-6000">
                <img src={ConnectorTwo} alt="" className="w-56" />
              </div>
            </div>

            <div className="flex ml-16 relative -top-16 left-0">
              <div>
                <div className="bg-[#F2F1F1] text-black px-5 py-3 rounded-lg w-20 flex items-center justify-center">
                  <h2>3</h2>
                </div>
                <div>
                  <h2 className="text-primary font-extrabold py-5">
                    Create Your Free Account
                  </h2>
                  <p>Click here to set up your Eazipay account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-red-500 bg-cover"
        style={{ background: `url(${BGPattern2})` }}
      >
        <div className="wrapper">
          <img src={DotsOne} alt="" />

          <div className="flex justify-between my-12">
            <div>
              <h2 className="text-4xl">
                Free forever <br /> for your salary payment
              </h2>
              <p className="mt-12">Subscribe to the Eazilife today</p>
              <div className="flex">
                <button className="px-2 py-3 bg-white rounded-md text-black shadow-xl flex items-center mr-3">
                  <AiFillApple size={40} className="mr-5" />
                  <div>
                    <small>Download on the</small>
                    <h2>App Stores</h2>
                  </div>
                </button>

                <button className="px-4 py-3 bg-white rounded-md shadow-xl text-black flex items-center">
                  <IoLogoGooglePlaystore size={40} className="mr-5" />
                  <div>
                    <small>Download on the</small>
                    <h2>Play Store</h2>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <img src={HappyCustomer} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <img src={DotsTwo} alt="" />
        <div className="wrapper">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-6xl">Get an Exclusive <br />  Demo of Eazipay</h2>
              <p className="mt-5">
                Our greatest priority is to put you <br /> and your business first. Let’s
                show you how we can help.
              </p>
            </div>

            <Card classNames="px-5 py-10 flex-1">
                <div className="text-center px-16">
                  <h2 className="text-3xl">First things first</h2>
                  <p>We want to serve you better. Tell us a bit about yourself or company</p>
                </div>

                <form action="" className="space-y-5">
                  <Input placeholder="First name" />
                  <Input placeholder="First name" />
                  <Input placeholder="First name" />
                  <Input placeholder="First name" />
                  <Input placeholder="First name" />
                  <Input placeholder="First name" />

                  <div className="w-full">
                    <Button text="Request Demo" classNames="bg-black text-white w-full rounded-3xl" />
                  </div>
                </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
