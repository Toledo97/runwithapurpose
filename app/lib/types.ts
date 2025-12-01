
export type Sponsor = {
    name: string;
    subname?: string;
    address: string[];
    cityState: string;
    tier: string;
    logo: string;
    width?: number;
    bg?: string;
    socials: string[];
}

export type ImageData = {
    alt: string;
    src: string;
    w: number;
    h: number;
}

export type Time = {
    hours: number;
    minutes: number;
    seconds: number;
}

export type Race = {
    name: string;
    date: string;
    imageData: ImageData
    distance: string;
    time: Time;
}