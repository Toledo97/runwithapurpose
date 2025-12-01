'use client';
import TierFrame from '@/app/components/tierframe';

export default function SponsorsPage() {

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center p-4 sm:items-start gap-4">

        <div  className="flex flex-col items-center gap-4">

          <div className="justify-center text-4xl text-stone-800 font-bold text-shadow-lg">
            2025 - 2026 Sponsors
          </div>

          <div className="border-t-2 border-stone-700 w-full"></div>

          {TierFrame("Platinum")}

          {TierFrame("Gold")}

          {TierFrame("Silver")}
        </div>
      </main>
    </div>
  );
}




