import { defaultSort, sorting } from "@/lib/constants";
import { getCollectionProducts, getCollections } from "@/lib/shopify";
import { config } from "@/roam/config";
import { getCardsItems } from "@/roam/homepage/homepage";
import Navbar from "@/roam/navbar";
import React from "react";

async function page({
    searchParams
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
    // const products = await getProducts({ sortKey, reverse, query: searchValue });
    const products = await getCollectionProducts({
      collection: 'hidden-homepage-featured-items'
    });
    // console.log("ces produits ",products)
  
    const collections = await getCollections();
    console.log("ces collections ",collections.find((c) => c.products?.length)?.products)
  
    const items = getCardsItems(products)

  return (
   <div>
            <Navbar collections={collections} items={items} />
     <div className="p-8">

      <div className="content">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <hr className="my-4" />

        <p>
          {config.siteName} Care Limited (<strong>{config.siteName} Care</strong> or <strong>We</strong>)
          is a private company limited by shares registered in England and Wales
          under company number 12547891 whose registered address is 83a Leverson
          Street, London, England, SW16 6DG.
        </p>

        <p>
          {config.siteName} Care has set out below certain terms relating to your use of the
          {config.siteName} Care website. Please read the following carefully.
        </p>

        <h2 className="text-xl font-bold mt-6">In General</h2>
        <p>
          Access to and use of this Website (the <strong>Site</strong>) and the
          products and services available through the Site (the{" "}
          <strong>Services</strong>) are subject to the following terms,
          conditions, and notices (the <strong>Terms</strong>).
        </p>
        <p>
          By using the Services, you are agreeing to all of the Terms, which may
          be updated by us from time to time. You should check this page
          regularly to take notice of any changes we may have made to the Terms.
        </p>
        <p>
          Access to the Site is permitted on a temporary basis, and we reserve
          the right to withdraw or amend the Services without notice.
        </p>

        <h2 className="text-xl font-bold mt-6">Privacy Policy</h2>
        <p>
          Please refer to our Privacy Policy for information about how we use
          your data. By using the Site, you consent to the processing described
          therein and warrant that all data provided by you is accurate.
        </p>

        <h2 className="text-xl font-bold mt-6">Prohibitions</h2>
        <p>
          You must not misuse this Site and agree not to commit or encourage any
          criminal offence, transmit malware, hack, corrupt data, or cause
          annoyance to other users.
        </p>

        <h2 className="text-xl font-bold mt-6">Indemnity</h2>
        <p>
          You agree to indemnify, defend and hold harmless {config.siteName} Care, its
          directors, officers, employees, agents, and affiliates, from any
          third-party claims or liability arising from your use of this Site.
        </p>

        <h2 className="text-xl font-bold mt-6">No Commercial Use</h2>
        <p>
          This Site is for personal non-commercial use only. You may not modify,
          distribute, or commercially exploit any content or services on this
          Site.
        </p>

        <h2 className="text-xl font-bold mt-6">Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of England.
        </p>

        <h3 className="text-xl font-bold mt-6">Cookies</h3>
        <p>
          We use cookies on our site to analyze visitor numbers and improve
          website performance using Google Analytics. Cookies help us make our
          website more useful.
        </p>

        <h2 className="text-xl font-bold mt-6">What is a cookie?</h2>
        <p>
          A cookie is a small data file sent to your computer or mobile device
          from a website to recognize your device if you return.
        </p>

        <h2 className="text-xl font-bold mt-6">How to manage cookies</h2>
        <p>
          To manage cookies, visit{" "}
          <a
            href="http://www.aboutcookies.org/"
            className="text-blue-500 underline"
          >
            www.aboutcookies.org
          </a>{" "}
          or refer to your browser settings.
        </p>

        <h2 className="text-xl font-bold mt-6">What will happen if I decline or block cookies?</h2>
        <p>
          If you decline cookies, your actions won’t be counted in our analysis,
          limiting our ability to improve the website.
        </p>
      </div>
    </div>
   </div>
  );
};

export default page;
