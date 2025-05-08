import Perfection from "@/roam/homepage/Perfection";
import Navbar from "@/roam/navbar";
import React from "react";
import PasswordResetForm from "../login/_components/PasswordResetForm";

type Props = {};

import Image from "next/image";
import Link from "next/link";
import ArticleCarousel from "@/roam/homepage/ArticleCarousel";

function SkincareBlog() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-xs text-center uppercase tracking-wider text-blue-600 mb-4">
        <Link href="/blog" className="hover:underline">
          BLOG
        </Link>{" "}
        / COMMENT TRAITER LE VIEILLISSEMENT DE LA PEAU ?
      </div>

      {/* Article Header */}
      <h1 className="text-3xl font-serif text-center mb-4">
        Comment traiter le vieillissement
        <br />
        de la peau
      </h1>

      {/* Introduction */}
      <p className="text-sm text-gray-700 mb-2 max-w-2xl mx-auto">
        Have a focus on helping your skin is important to be in tune with your
        skin life. One of the most common reasons the world may not always be as
        bright is because you're not communicating properly with language to
        solve things up again.
      </p>

      {/* Author and Time */}
      <div className="flex justify-center items-center gap-2 mb-8 text-xs text-gray-500">
        <span className="font-medium uppercase">TEAM MAJABELLE</span>
        <span className="mx-1">•</span>
        <span>4 MINUTES</span>
      </div>

      {/* Featured Image */}
      <div className="rounded-lg overflow-hidden mb-10">
        <Image
          src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hands applying moisturizer to skin"
          width={800}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-8 text-gray-700">
        <p>
          If the term "love language" is alien to you, then listen up as we're
          about to explain it all. The five love languages are words of
          affirmation, quality time, acts of service, gifts, and physical touch.
          We can think you can take this into the bathroom to make your skincare
          style fit into one of these categories, and it's a fun way to think
          about your routine.
        </p>

        <p>
          It's not uncommon for love to get lost in translation if you and your
          significant other have different love languages, so taking it back to
          basics and watching some little learning videos on the language of the
          bathroom is definitely going to help when it comes to getting down and
          dirty.
        </p>

        <p>
          There are five languages: words of affirmation, quality time, acts of
          service, gifts and physical touch. Figuring out which one is right or
          wrong but we're going to break down the given and let you know how you
          can use the love language of the bathroom to take more you and
          significant too.
        </p>

        <h2 className="text-xl font-serif mt-10 mb-4">Words of affirmation</h2>

        <p>
          If words of affirmation is high on your love language ranking then all
          the creams is that you highly value verbal acknowledgements of
          affection and appreciation. Reminders that you're loved and
          appreciated are what make you feel most connected, valued, heard and
          understood. The key to us here is to tell other when you're feeling
          loved, valued and appreciated. The key to us here is to tell other
          when you're feeling loved, valued key to keeping the fire alive in
          your relationship. If you're not getting the verbal reassurance you
          need, this could lead to you feeling disconnected and unseen which may
          cause you to withdraw from the relationship.
        </p>

        <h2 className="text-xl font-serif mt-10 mb-4">Quality time</h2>

        <p>
          Ever noticed that spending quality time with your other half helps
          give you in the mood? That's because quality time is your love
          language. You value their undivided attention and meaningful time with
          no-on opposed to feeling the passing ships in the night. If you don't
          get enough quality time, you may feel neglected and unloved. Let them
          know that you're making time for date night so you feel connected and
          in sync. Set alarms to a for the morning and evening skincare routine
          so you can do it together. It's the little things day-to-day that
          makes skincare fun. Moisturising can be a relaxing long and full
          breath for a moment as well as the skin.
        </p>

        <h2 className="text-xl font-serif mt-10 mb-4">Acts of service</h2>

        <p>
          This love language is all about making your life easier and comes back
          down to the old fashioned notion of actions speak louder than words.
          If you always put the best out but don't get the same in return, you
          may feel unappreciated. This love language is all about time is
          cherished because they're actually giving a helping hand. Sometimes
          something as simple as making a cup of tea can make all the
          difference. If you're feeling neglected, ask nicely and set up up for
          a shower night. If you're in the right mood, the more you'll be able
          to give back. Remember that asking for help doesn't mean there's any
          consideration involved.
        </p>

        <h2 className="text-xl font-serif mt-10 mb-4">Gifts</h2>

        <p>
          Ever get excited or turned on from being given a gift? If so, then
          this love language will resonate for you. For you, the thoughtfulness
          of gifts can be perceived as endless expressions of love and
          affection. It's not about the monetary value of the gift, but the
          thought that goes into the gift-buying or moment to the material or
          monetary value of the item. Knowing your partner's thinking about you?
          Oh wow! That can make up for any other shortcomings in the
          relationship. If you're not getting the gifts you need to keep things
          spicy by including things you can both enjoy in the bathroom too.
        </p>
      </div>
    </div>
  );
}

function page({}: Props) {
  return (
    <div>
      <Navbar collections={[]} items={[]} />

      <SkincareBlog />

      {/* <div className="bg-appyellow pt-10">
        <p className="text-white">LEARN WITH US</p>
        <ArticleCarousel />
      </div> */}

      <div className="px-10 pb-10 pt-10 bg-appyellow">
        <p className="text-white my-4">LEARN WITH US</p>

        <ArticleCarousel />
      </div>

      <Perfection />
    </div>
  );
}

export default page;
