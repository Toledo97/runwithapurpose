'use client';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center font-sans w-full">
      <main className="flex min-h-screen w-full flex-col items-center p-4 sm:items-start gap-4">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="text-4xl text-stone-800 font-bold text-shadow-lg">
            Running with a Purpose
          </div>

          <div className="border-t-2 border-stone-700 w-full"></div>
          <div className="text-xl text-stone-800 font-bold text-shadow-lg">
            Mission Statement
          </div>
          <div className="border-t-2 border-stone-700 w-1/2"></div>
          <div className="text-stone-800 text-shadow-sm">
            Everyone faces difficult moments, and it's not always easy to see the way through them. Throughout my life, the Humboldt Park community has been a source of strength, culture, and belonging for me. Although I didn’t grow up in the neighborhood, it has always felt like home. For years, I’ve attended Humboldt Park events to stay connected to my Puerto Rican roots, and each experience has given me pride, joy, and a deep sense of community.
            <br /> <br />
            Now, I want to give back to the place that has given me so much love and support. I’m reaching out to local businesses for donations that directly support my participation in upcoming races. In return, I offer logo placement on my running shirt, volunteer support, and social media tags featuring your business in event photos. Together, we can uplift the community that continues to uplift so many of us.
          </div>
          <div className="text-xl text-stone-800 font-bold text-shadow-lg">
            About me
          </div>
          <div className="border-t-2 border-stone-700 w-1/2"></div>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">

            <Image
              className={`flex rounded-4xl`}
              src={`/me.jpg`}
              alt={"about me"}
              width={300}
              height={150}
            />

            <div className="text-stone-800 text-shadow-sm">
              I was born and raised in Elgin, Illinois and studied Computer Engineering at UIUC. I currently work in healthcare and I directly help healthcare providers with the applications they use for patient records. I am half Mexican and Puerto Rican.
              My first race this year was the San Juan Run in Humboldt Park, and I have been doing a race nearly every month since then. By the end of 2025, I will have completed nine races. Continuing my journey, I will be participating in the Chicago Running Series in 2026.
              The series consists of three races, including the Chicago Marathon.

              <br /><br />

              My participation in the 2026 Chicago Marathon is thanks to the Safe Haven Foundation. You can find my fundraiser link <Link className="underline text-blue-800" href="https://fundraisers.hakuapp.com/carlosruns4haven"> here</Link>.

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



