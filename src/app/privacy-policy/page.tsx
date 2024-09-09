import { defaultSort, sorting } from '@/lib/constants';
import { getCollectionProducts, getCollections } from '@/lib/shopify';
import { config } from '@/roam/config';
import { getCardsItems } from '@/roam/homepage/homepage';
import Navbar from '@/roam/navbar';
import React from 'react';

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

      <div className="bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <hr className="border-gray-300 mb-6" />
        <p className="mb-4">
          <b>This is the privacy statement for {config.siteName} Care Limited ({config.siteName} Care or We).</b>
        </p>
        <p className="mb-4">
          {config.siteName} Care Limited is a private company limited by shares registered in England and Wales
          under company number 12547891 whose registered address is 83a Leverson Street, London, England, SW16 6DG.
        </p>
        <p className="mb-4">
          For the purpose of the Data Protection Act 2018 and the General Data Protection Regulation 2016/679 (as such is amended (if at all) pursuant to changes set out in UK GDPR) the data controller is {config.siteName} Care.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">The General Data Protection Regulation 16/679; The Data Protection Act 2018</h2>
        <p className="mb-4">
          In this statement We have used certain terms which are set out in the EU’s General Data Protection Regulation (GDPR or the Regulation):
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>personal data means: any information relating to an identified or identifiable natural person (data subject)</li>
          <li>controller means: the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data</li>
          <li>processor means: a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller</li>
        </ul>

        <p className="italic mb-4">
          To the extent that the departure of the United Kingdom from membership of the European Union has led to the introduction of changes to the content of the GDPR, this privacy policy is to be read and construed in accordance with GDPR and the Data Protection Act 2018, as amended.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Privacy Statement</h2>
        <h3 className="text-lg font-semibold mb-4">What is the lawful reason We use to process personal data?</h3>
        <p className="mb-4">
          The four lawful reasons {config.siteName} Care uses to process personal data are set out in Article 6 of the Regulation. Processing will only be lawful if and to the extent that at least one of the following applies:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>the data subject has given consent to the processing of his or her personal data for one or more specific purposes (Consent).</li>
          <li>processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract (Contract Performance).</li>
          <li>processing is necessary for compliance with a legal obligation which We are subject to (Legal Obligations).</li>
          <li>processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party (Legitimate Interest).</li>
        </ul>

        <h3 className="text-lg font-semibold mb-4">Consent</h3>
        <p className="mb-4">
          Where We process personal data as a result of Consent, We ensure that consent is freely given, specific and informed, and established by a clear affirmative act.
        </p>

        <h3 className="text-lg font-semibold mb-4">Contract Performance</h3>
        <p className="mb-4">
          Where We enter into a contract with third parties, processing of personal data may be necessary to execute such contract or take pre-contract preparation steps.
        </p>

        <h3 className="text-lg font-semibold mb-4">Legal Obligations</h3>
        <p className="mb-4">
          Where there are legal obligations that apply to {config.siteName} Care, processing of personal data may be required by law.
        </p>

        <h3 className="text-lg font-semibold mb-4">Legitimate Interest</h3>
        <p className="mb-4">
          Where We process personal data as it is necessary for the purpose of our legitimate interests, We do so on the basis of a balanced evaluation.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-4">Your right to request that We stop processing personal data</h3>
        <p className="mb-4">
          As required by the Regulation, Consent should be as easy to withdraw, as it is to give.
        </p>

        <h3 className="text-lg font-semibold mb-4">Withdrawal of Consent</h3>
        <p className="mb-4">
          I [STATE YOUR NAME] hereby withdraw my consent for {config.siteName} Care to process my personal data.
        </p>

        <h3 className="text-lg font-semibold mb-4">Our Status; How We use personal data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>We may act as a processor of personal data for our clients pursuant to contract terms and conditions</li>
          <li>We may act as a controller and any personal data We collect is treated according to our approach.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-4">Why does {config.siteName} Care need to collect and store personal data?</h3>
        <p className="mb-4">
          We collect and store personal data to provide services to our clients and third parties.
        </p>

        <h3 className="text-lg font-semibold mb-4">Will {config.siteName} Care share my personal data?</h3>
        <p className="mb-4">
          {config.siteName} Care may pass personal data to third-party service providers under contract.
        </p>

        <h3 className="text-lg font-semibold mb-4">How will {config.siteName} Care use the personal data it collects?</h3>
        <p className="mb-4">
          {config.siteName} Care will process personal data in a manner compatible with the Regulation.
        </p>
      </div>
    </div>
    </div>
  );
};

export default page;
