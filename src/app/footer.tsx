import React from "react";
import { Button } from "@/components/ui/button";
import { FooterICONS } from "./svgicons";
import { config } from "@/roam/config";

function Footer() {
  return (
    <>
      <footer className="text-white pb-10 bg-primaryBg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8 ">
            <div className="text-teal-600">
              <img className="w-full h-44" src="/design.svg" alt="" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className=" font-thin ">
                    JOIN THE {config.siteName} COMMUNITY
                  </h2>
                  {/* <p className="text-xs mt-4 ">
                    Don't miss any news! To be informed about the latest
                    collections, promotions and essential news, leave us your
                    email address.
                  </p> */}
                </div>

                <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                  <form className="w-full mt-5">
                    <label htmlFor="UserEmail" className="sr-only">
                      {" "}
                      Email{" "}
                    </label>
                    <div className=" p-2 focus-within:ring  sm:items-center sm:gap-4">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        className="w-full mb-2  p-2 pl-5 border rounded-full placeholder:text-white border-gray-300 bg-transparent focus:border-transparent focus:ring-transparent sm:text-sm"
                      />
                      <Button variant={"roam"} className="w-full  text-xs">
                        S'ABONNER
                      </Button>
                      <p className="text-[10px] mt-4">
                        By signing up, you agree to e-mail marketing. You can
                        opt-out at any time. Read more in our Privacy Policy
                      </p>
                      {/* <button className="mt-2 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                  Sign Up
                </button> */}
                    </div>
                  </form>
                </div>
              </div>

              {[
                {
                  title: "Help",
                  values: [
                    { href: "mailto:" + config.appEmail, label: "Contact" },
                    { href: "/faq", label: "FAQs" },
                    { href: "/privacy-policy", label: "Privacy Policy" },
                    {
                      href: "/terms-of-service",
                      label: "Termes et conditions",
                    },
                    { href: "/terms-of-service", label: "Politique de retour" },
                  ],
                },
                {
                  title: "Vous",
                  values: [
                    { href: "", label: "Account" },
                    { href: "", label: "Discounts" },
                    { href: "", label: "Category 3" },
                  ],
                },
                {
                  title: config.siteName,
                  values: [
                    { href: "/about", label: "A propos" },
                    { href: "/mission", label: "Mission" },
                    { href: "", label: "Blog" },
                  ],
                },
              ].map((v, index) => {
                return (
                  <div key={index} className="">
                    <p className="font-medium text-appyellow ">{v.title}</p>
                    <ul className="mt-6 space-y-4 text-sm">
                      {v.values.map((v, i) => {
                        return (
                          <li key={i}>
                            <a
                              href={v.href}
                              className="text-sm text-secondBg transition hover:opacity-75"
                            >
                              {" "}
                              {v.label}{" "}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <img className="w-full h-44" src="/logo.svg" alt="" />

        <ul className="col-span-2 flex justify-center gap-4 lg:col-span-5  ">
          {Object.entries(FooterICONS).map((v, index) => {
            return (
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  {v[1]}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="text-xs  text-center mt-2">
          Copyright © {config.siteName}. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
