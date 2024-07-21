import Socials from "@/components/socials";
import { Card, CardImage } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function About() {
  const skills = [
    {
      heading: "languages",
      values: "Typescript, Go, Python, HTML, CSS, JavaScript",
    },
    {
      heading: "libraries/frameworks",
      values: "React, Next.js, Node.js, Express.js, Tailwind CSS",
    },
    {
      heading: "backend",
      values: "ORMs - Prisma, Drizzle, REST APIs, Relational DBMS",
    },
    {
      heading: "design",
      values: "Figma",
    },
    {
      heading: "others",
      values: "Git & GitHub, Linux, Docker",
    },
  ];

  const quotes = [
    {
      text: "I know of no better life purpose than to perish in attempting the great and the impossible.",
      author: "Friedrich Nietzsche",
    },
    {
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
    },
  ];

  const photos = [
    "/photo.jpg",
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.png",
    "/photo5.png",
    "/photo6.png",
    "/photo7.png",
    "/photo8.png",
    "/photo9.png",
  ];

  return (
    <main>
      <h1 className="font-extrabold text-4xl mb-4 text-zinc-200">about</h1>
      <div
        className="inline-flex py-1 px-3 mb-6 text-sm text-zinc-400 animate-shimmer items-center justify-center rounded-full border border-green-900
        bg-[linear-gradient(110deg,#000103,45%,#1E3126,55%,#000103)] bg-[length:200%_100%] font-normal
        transition-colors"
      >
        <div className="h-2 w-2 mr-2 rounded-full bg-green-600"></div>
        open for work
      </div>
      <p className="mb-6">
        hello friend, this is neeraj, a cybersecurity professional transitioning
        into software engineering, with a keen interest across the complete
        stack, learning and building applications for fun.
      </p>
      <button className="rounded bg-zinc-200 text-black mb-12 px-4 py-2">
        download resume
      </button>
      <p className="font-semibold text-2xl mb-4 text-zinc-300">
        things that i can work with
      </p>
      <ul className="mb-12">
        {skills.map((skill) => (
          <li key={skill.heading} className="flex mb-3">
            <span className="mr-2">&gt;</span>
            <span>
              <span className="text-zinc-300 mr-2">{skill.heading}:</span>
              <span>{skill.values}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="font-semibold text-2xl mb-4 text-zinc-300">
        things that i like to do
      </p>
      <p className="mb-6">
        i like to take photos. i should probably make a full page displaying my
        photos. but here are some of them made during my college days.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mb-12"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 pl-2 md:pl-4"
            >
              <Card className="bg-black/0 border-0 rounded">
                <CardImage
                  src={photo}
                  alt="image"
                  className="object-cover aspect-square rounded"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <p className="font-semibold text-2xl mb-4 text-zinc-300">
        things that i want to do
      </p>
      <p className="mb-12">
        i always wanted to make a movie. apart from that i want to go Iceland,
        learn a martial art and play music. i want to learn to cook, run a 10K,
        build a SaaS and learn skating. i&apos;d also like a camper van.
      </p>
      <p className="font-semibold text-2xl mb-4 text-zinc-300">
        things that i&apos;m proud of
      </p>
      <p className="mb-12">
        i have always been the guy who turns down plans. but this year, i went
        to Thailand with my boys. also went to a concert, an IPL match. i&apos;m
        also very proud that i quit the job i didn&apos;t like and that i&apos;m
        pursuing what i&apos;ve always wanted to do.
      </p>
      <p className="font-semibold text-2xl mb-1 text-zinc-300">
        things that i live by
      </p>
      <p className="text-sm text-zinc-500 mb-4">or at least try to</p>
      <ul className="mb-12">
        {quotes.map((quote) => (
          <li key={quote.author} className="mb-6">
            <div className="border-l-4 border-zinc-300 pl-2 pr-1 py-2 rounded bg-zinc-900">
              <p className="text-base">{quote.text}</p>
              <p className="text-sm italic mt-1 text-zinc-500">
                {quote.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="font-semibold text-2xl mb-4 text-zinc-300">
        reach out to me
      </p>
      <Socials />
    </main>
  );
}
