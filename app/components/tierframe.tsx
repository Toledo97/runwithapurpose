'use client';
import { sponsors } from '@/app/lib/data';
import { Dictionary } from '@/app/lib/interfaces';
import { Sponsor } from '@/app/lib/types';
import Image from "next/image";
import { SocialIcon } from 'react-social-icons'

export default function TierFrame(Tier: string) {

    const TierSponsors = sponsors.filter((item) => item.tier === Tier)

    const colours: Dictionary = {
        "Platinum": "text-stone-400",
        "Gold": "text-amber-400",
        "Silver": "text-slate-300"
    };

    return (<>
        {TierSponsors.length !== 0 &&
            <>
                <div className="flex flex-col items-center gap-4 p-2 w-full">

                    <div className={`justify-center text-2xl text-shadow-lg font-bold ${colours[Tier]}`}>
                        {Tier}
                    </div>
                    <div className="border-t-2 border-stone-700 w-6/8"></div>
                    <div className="flex flex-wrap justify-center gap-2">

                        {
                            TierSponsors.map((item, idx) => {

                                return (
                                    BusinessCard(idx, item)
                                )
                            })
                        }
                    </div>


                </div>


            </>
        }
    </>
    )
};

function BusinessCard(idx: number, sponsor: Sponsor) {
    return (
        <div key={idx} className={`flex flex-col gap-2 p-4 rounded w-96 text-stone-800 shadow-xl`}>

            <div className='flex flex-row gap-4'>

                <div className='flex items-center'>

                    <Image
                        className={`${sponsor.bg}`}
                        src={`/sponsors${sponsor.logo}`}
                        alt={sponsor.name}
                        width={sponsor?.width || 96}
                        height={96}

                    />

                </div>
                <div className={`flex flex-col gap-2 w-64`}>
                    <div className='flex flex-wrap font-bold text-base'>
                        {sponsor.name}
                    </div>
                    {sponsor.subname && <div>
                        {sponsor.subname}
                    </div>}

                    <div className='flex flex-row gap-2 justify-between'>

                        <div className='flex flex-col gap-2'>

                            {sponsor.address.map((addr, idx) => {
                                return (
                                    <div className='text-sm' key={addr}>
                                        {addr}
                                    </div>
                                )
                            })}
                        </div>

                        <div className='text-sm'>
                            {sponsor.cityState}
                        </div>

                    </div>
                </div>

            </div>

            <div className='flex flex-row gap-2 justify-end'>
                {sponsor.socials.map((url) => {
                    return (
                        <SocialIcon key={url} url={url} style={{ height: 36, width: 36 }} />
                    )
                })}
            </div>
        </div>
    )
};



