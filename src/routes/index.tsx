import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import communityYogaImg from "@/assets/community-yoga-class.webp";
import whyYogaImg from "@/assets/why-yoga-benefits.png.asset.json";
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

      <section aria-labelledby="why-yoga-heading" className="why-yoga-section px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <img
              src={whyYogaImg.url}
              alt="Illustration of yoga benefits: strength, flexibility, immunity, calm mind, focus, and better sleep"
              className="mx-auto w-full max-w-lg"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 h-1 w-12 bg-why-yoga-accent"></div>
            <h2 id="why-yoga-heading" className="font-serif text-3xl leading-tight text-why-yoga-heading sm:text-4xl lg:text-5xl">
              WHY YOGA?
            </h2>
            <p className="mt-5 text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
              Yoga is more than movement. It is a practice that brings together the body, breath,
              and mind — helping us build strength, flexibility, awareness, and inner balance.
            </p>
            <p className="mt-6 text-base italic leading-7 text-why-yoga-tagline sm:text-lg sm:leading-8">
              Move with awareness. Breathe with purpose. Live with balance.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-us-heading" className="why-us-section px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-why-yoga-accent">
            Why Choose Us
          </p>
          <h2 id="why-us-heading" className="font-serif text-3xl leading-tight text-why-yoga-heading sm:text-4xl lg:text-5xl">
            A Space to Grow, Heal & Transform
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
            At Northeast Yoga and Meditation Centre, we believe yoga is more than a practice—it is
            a journey toward greater balance, awareness, and well-being. Through authentic yoga and
            meditation practices, experienced guidance, and a supportive environment, we help
            individuals deepen their practice and grow with purpose.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-why-yoga-body sm:text-lg sm:leading-8">
            We are committed to creating a welcoming space where everyone can learn, practice, and
            experience the transformative benefits of yoga.
          </p>

          <Button
            asChild
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-why-cta px-8 text-base font-semibold text-why-cta-text shadow-lg transition-all duration-300 hover:bg-why-cta-hover hover:shadow-xl focus-visible:ring-why-cta sm:h-14 sm:px-10 sm:text-lg"
          >
            <Link to="/about">Who We Are</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
