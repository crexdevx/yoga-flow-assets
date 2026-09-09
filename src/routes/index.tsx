import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import communityYogaImg from "@/assets/community-yoga-class.webp";
import heroPosterImg from "@/assets/yoga-hero-poster.jpg";
import { Button } from "@/components/ui/button";

const heroWebm = "/yoga-hero.webm";
const heroMp4 = "/yoga-hero.mp4";
import { FloatingHeader } from "@/components/floating-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North East Yoga and Meditation Centre" },
      {
        name: "description",
        content:
          "North East Yoga and Meditation Centre — quality training for better living. Yoga, meditation and teacher training classes.",
      },
      { property: "og:title", content: "North East Yoga and Meditation Centre" },
      {
        property: "og:description",
        content: "Quality training for better living. Yoga and meditation classes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-about-canvas">
      <section
        aria-label="North East Yoga and Meditation Centre"
        className="relative aspect-[4/3] max-h-[100svh] w-full overflow-hidden bg-hero-sky"
      >
        <video
          className="absolute inset-0 h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPosterImg}
        >
          <source src={heroWebm} type="video/webm" />
          <source src={heroMp4} type="video/mp4" />
        </video>
        <FloatingHeader />
      </section>

      <section aria-labelledby="about-heading" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <article className="about-feature mx-auto w-full max-w-6xl overflow-hidden rounded-t-[1.5rem] shadow-2xl sm:rounded-t-[2rem]">
          <div className="aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
            <img
              src={communityYogaImg}
              alt="A community yoga class practicing together outdoors in Guwahati"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-feature__body relative bg-about-navy px-6 pb-24 pt-8 text-about-on-navy sm:px-10 sm:pb-24 sm:pt-10 lg:min-h-64 lg:px-14 lg:pb-10 lg:pr-80 lg:pt-10">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-about-accent">
                About Us
              </p>
              <h1 id="about-heading" className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Welcome to our Holistic Sanctuary
              </h1>
              <p className="mt-4 text-sm leading-6 text-about-muted sm:text-base sm:leading-7">
                North East Yoga and Meditation Centre in Guwahati, Assam, is a premier sanctuary
                for holistic well-being and professional growth. Whether you are seeking personal
                healing or aspiring to become a certified instructor, our expert-led programs
                empower you to transform your life. Experience the authentic power of daily
                practices, or build your career with our accredited yoga teacher training and
                diploma certifications.
              </p>
            </div>

            <div className="about-feature__action absolute bottom-0 right-0 z-20 flex h-20 items-center rounded-tl-[2.5rem] bg-about-button pl-8 pr-4 sm:h-20 sm:pl-10 sm:pr-6 lg:bottom-0 lg:right-0">
              <Button
                asChild
                size="lg"
                className="group h-auto gap-4 rounded-none bg-transparent p-0 text-base font-bold text-about-button-foreground shadow-none transition-transform duration-300 hover:-translate-y-0.5 hover:bg-transparent focus-visible:ring-about-button sm:text-lg"
              >
                <Link to="/contact">
                  Join the Community
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-about-arrow text-about-on-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-12">
                    <ArrowUpRight aria-hidden="true" className="size-6" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
