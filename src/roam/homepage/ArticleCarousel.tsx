"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Article {
  id: number;
  image: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export default function ArticleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles: Article[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/21792178/pexels-photo-21792178/free-photo-of-idees-de-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "5 MIN READ",
      title: "How to use love languages for better ",
      excerpt:
        "If it's not a regular issue, it may be a one-off thing and therefore not really a cause for concern, but many...",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/21792178/pexels-photo-21792178/free-photo-of-idees-de-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "5 MIN READ",
      title: "How to use love languages for better ",
      excerpt:
        "If it's not a regular issue, it may be a one-off thing and therefore not really a cause for concern, but many...",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/21792178/pexels-photo-21792178/free-photo-of-idees-de-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "5 MIN READ",
      title: "How to use love languages for better ",
      excerpt:
        "If it's not a regular issue, it may be a one-off thing and therefore not really a cause for concern, but many...",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/21792178/pexels-photo-21792178/free-photo-of-idees-de-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "5 MIN READ",
      title: "How to use love languages for better ",
      excerpt:
        "If it's not a regular issue, it may be a one-off thing and therefore not really a cause for concern, but many...",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/21792178/pexels-photo-21792178/free-photo-of-idees-de-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: "5 MIN READ",
      title: "How to use love languages for better ",
      excerpt:
        "If it's not a regular issue, it may be a one-off thing and therefore not really a cause for concern, but many...",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 3 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {articles.map((article) => (
              <div key={article.id} className="min-w-[33.33%] px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className=" overflow-hidden p-4 rounded-lg">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-medium text-primaryBg mb-2">
                      {article.readTime}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {article.excerpt}
                    </p>
                    <button className="text-appyellow underline font-medium text-sm">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 -ml-4"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 -mr-4"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button> */}
        </div>

        <div className="flex justify-between items-center mt-6 ">
          <div></div>
          <div className="flex space-x-2">
            {Array.from({ length: articles.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <a href="#" className="text-white text-sm font-medium">
            All articles
          </a>
        </div>
      </div>
    </div>
  );
}
