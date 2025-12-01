'use client';

import { Race } from '@/app/lib/types';
import { pastRaces, futureRaces } from '@/app/lib/data';
import Image from "next/image";

export default function RacesPage() {

  return (
    <div className="flex min-h-screen items-center justify-center font-sans w-full">
      <main className="flex min-h-screen w-full flex-col items-center p-4 sm:items-start gap-4">
        <div className="flex flex-col items-center gap-4 w-full">
                    
          {RaceFrame("Future Races",false, futureRaces)}
                
          {RaceFrame("Past Races",true, pastRaces)}
                

        </div>
      </main>
    </div>
  );
}

function RaceFrame(title: string, opt: boolean, race: Race[]) {

  return (
    <>

      <div className="justify-center text-4xl text-stone-800 font-bold text-shadow-lg">
            {title}
          </div>

      <div className="border-t-2 border-stone-700 w-full"></div>
      <div className='flex flex-col gap-4 w-full'>

        {race.map((item: Race, idx) => {
          const thisDate = new Date(item.date)

          return (
            <div key={item.name}>

              <div className='flex flex-row text-stone-800 items-start p-4 gap-2 shadow' >
                <div className='flex w-40 justify-center'>
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
            </div>
          );
        })}

      </div>
    </>
  )
}


