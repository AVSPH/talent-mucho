import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Shane Morales",
    role: "Attendee",
    image: "SM",
    quote:
      "Yaaaay I'll wait for that! I definitely want to learn how to modify my own Sarah.",
  },
  {
    name: "Camille Oriel",
    role: "Attendee",
    image: "CO",
    quote:
      "Thanks for this Abie and Meri. I really learned a lot and want to keep learning. Looking forward to 2nd session!",
  },
  {
    name: "Kristen Cascano",
    role: "Attendee",
    image: "KC",
    quote:
      "So brilliant! These lessons could change lives, super worth it as an upskilling, can't wait to learn more.",
  },
  {
    name: "Andre Swartz",
    role: "Attendee",
    image: "AS",
    quote: "Thank you Abie & Meri!",
  },
  {
    name: "Atasha Balbis",
    role: "Attendee",
    image: "AB",
    quote:
      "TBH, this is the first time I attend for AI session. I am looking forward for the next session. I want to learn more. Thank you guys.",
  },
  {
    name: "Nat",
    role: "Attendee",
    image: "N",
    quote: "You guys are awesome!",
  },
  {
    name: "Ernie Pascual",
    role: "Attendee",
    image: "EP",
    quote: "thnk you guys for organizing this session",
  },
  {
    name: "Nica",
    role: "Attendee",
    image: "N",
    quote:
      "The amount of effort you guys are putting in to offer this for free. WOW! Thank you.",
  },
  {
    name: "Apple Cuenca",
    role: "Attendee",
    image: "AC",
    quote: "2nd session please",
  },
  {
    name: "Norife Ramales",
    role: "Attendee",
    image: "NR",
    quote: "You're great coaches!!!",
  },
  {
    name: "Pia Verona",
    role: "Attendee",
    image: "PV",
    quote: "i honestly can't believe this free. thank you so much guys",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3),
);

export default function WallOfLoveSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-beige-100 relative overflow-hidden"
    >
      <div className="section-container relative z-10 w-full">
        <div className="mx-auto max-w-6xl text-center mb-16 md:mb-24">
          <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            AI Training Feedback
          </p>
          <h2
            className="text-charcoal-900 mb-6 leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Voices from the May 1 AI Training Zoom.
          </h2>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto leading-relaxed">
            These testimonials are from attendees who joined the live training
            session.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-6">
              {chunk.map(({ name, role, quote, image }, index) => (
                <Card
                  key={index}
                  className="border border-beige-200/50 shadow-sm hover:shadow-md transition-shadow rounded-2xl"
                >
                  <CardContent className="pt-6 bg-white rounded-2xl">
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                      <Avatar className="size-10 border border-beige-200/50">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback className="bg-clay-50/50 text-clay-600">
                          {image}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold text-charcoal-900">
                          {name}
                        </h3>

                        <span className="text-taupe-400 block text-xs font-medium tracking-wide mt-0.5">
                          {role}
                        </span>
                      </div>
                    </div>

                    <blockquote className="mt-4">
                      <p className="text-taupe-500 text-sm leading-relaxed">
                        &ldquo;{quote}&rdquo;
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
