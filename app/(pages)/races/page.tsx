'use client';
import { Race } from '@/app/lib/types';
import { races } from '@/app/lib/data';
import Image from "next/image";



export default function RacesPage() {

  const currentTime = new Date();

  const pastRaces = races.filter((item) => new Date(item.date) < currentTime)
  const futureRaces = races.filter((item) => new Date(item.date) >= currentTime)

  return (
    <div className="flex min-h-screen items-center justify-center font-sans w-full">
      <main className="flex min-h-screen w-full flex-col items-center p-4 sm:items-start gap-4">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="justify-center text-4xl text-stone-800 font-bold text-shadow-lg">
            Future Races
          </div>
          <div className="border-t-2 border-stone-700 w-full"></div>
          <div className='flex flex-col gap-4 w-full'>
            {futureRaces.map((item, idx) => {
              return (
                <div key={item.name}>
                  {RaceFrame(false, item)}
                </div>
              );
            })}
          </div>

          <div className="justify-center text-4xl text-stone-800 font-bold text-shadow-lg">
            Past Races
          </div>

          <div className="border-t-2 border-stone-700 w-full"></div>
          <div className='flex flex-col gap-4 w-full'>
            {pastRaces.map((item, idx) => {
              return (
                <div key={item.name}>
                  {RaceFrame(true, item)}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function RaceFrame(opt: boolean, item: Race) {
  const thisDate = new Date(item.date)

  return (
    <div className='flex flex-row text-stone-800 items-start p-4 gap-2 shadow' >
      <div className='flex w-1/3 justify-center'>
        <Image
          className={`rounded-4xl`}
          src={`/races${item.imageData.src}`}
          alt={item.name}
          width={item.imageData.w}
          height={item.imageData.h}

        />
      </div>

      <div className='flex flex-col'>
        <div >
          {item.name}
        </div>

        <div className='flex flex-row gap-2'>
          <div >
            {item.distance}
          </div>

          {opt && <div>
            {item.time.hours !== 0 && `${item.time.hours}:`} {item.time.minutes !== 0 && `${item.time.minutes}:${item.time.seconds}`}
          </div>}
        </div>

        <div >
          {thisDate.getMonth() + 1}/{thisDate.getDate()}/{thisDate.getFullYear()}
        </div>
      </div>
    </div>
  )
}


