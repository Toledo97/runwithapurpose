'use client';
import { DirectionsRun } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { links } from '@/app/lib/data';

export default function SideNav() {
    const pathname = usePathname();
// bg-stone-800 rounded-b-xl md:rounded-bl-none md:rounded-r-xl
    return (
        <div className="flex flex-col h-full px-3 py-4 md:px-2 "> 
            <Link
                className="mb-2 flex justify-center rounded-md bg-amber-900 p-4 text-white"
                href="/">
                <div className="flex flex-row gap-2 items-center">
                    <DirectionsRun fontSize={'large'} />
                    <div className=''>
                        Running with a Purpose
                    </div>
                </div>
            </Link>
            <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    const urlColour = (pathname === link.href) ? `text-stone-800 border-2 border-dashed` : `text-${link.textcolor}`
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-label={link.name}
                            className={clsx(
                                `flex h-[48px] shadow grow 
                                items-center justify-center gap-2 p-3
                                rounded-md text-sm font-medium
                                hover:border-solid
                                hover:border-2
                                bg-amber-700
                                md:flex-none md:justify-start md:p-2 md:px-3 ${urlColour}`,
                            )}>
                            <LinkIcon className="w-6" size={48} />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
