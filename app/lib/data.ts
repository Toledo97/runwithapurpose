import {
    HomeIcon,
} from '@heroicons/react/24/outline';
import { SportsScore } from '@mui/icons-material';
import { BiDonateHeart } from "react-icons/bi";
import { LiaDonateSolid } from "react-icons/lia";

const links = [
    { name: 'Home', href: '/', textcolor: "white", icon: HomeIcon },
    { name: 'Races', href: '/races', textcolor: "white", icon: SportsScore },
    { name: 'Safe Haven Fundraiser', href: 'https://fundraisers.hakuapp.com/carlosruns4haven', textcolor: "white", icon: LiaDonateSolid },
    { name: 'Sponsors', href: '/sponsors', textcolor: "white", icon: BiDonateHeart },
];


const sponsors = [
    {
        "name": "La Sandwichera Cafe",
        "address": ["2721 W Division St."],
        "cityState": "Chicago, IL",
        "logo": "/LSC-logo.png",
        "width": 128,
        "tier": "Gold",
        "socials": [
            "https://www.instagram.com/lasandwicheracafe/?hl=en",
            "https://www.facebook.com/LaSandwicheraCafe/"
        ]
    }, {
        "name": "Dope Drip Cafe",
        "address": [
            "2617 W. Division St.",
            "15 W Washington St.",
        ],
        "cityState": "Chicago, IL",
        "logo": "/dope.jpg",
        "bg": "rounded-full",
        "tier": "Silver",
        "socials": [
            "https://dopedripcafe.com/",
            "https://www.instagram.com/dopedripcafe/?hl=en",
            "https://www.facebook.com/p/Dope-Drip-Cafe-100067486202387/"
        ]
    }, {
        "name": "Chucherias Tropical Creations",
        "address": ["2627 W Division St."],
        "cityState": "Chicago, IL",
        "logo": "/chucherias.png",
        "width": 100,
        "tier": "Gold",
        "socials": [
            "https://www.instagram.com/chucheriastropicalcreations/?hl=en",
            "https://www.facebook.com/chucheriastropicalcreations/"
        ]
    },
    {
        "name": "Sara's Cocina",
        "address": ["2723 W Division St."],
        "cityState": "Chicago, IL",
        "logo": "/sc-logo.jpg",
        "bg": "rounded-full",
        "tier": "Silver",
        "socials": [
            "https://www.sarascocina.com/",
            "https://www.instagram.com/p/DOILwC4DV-v/",
            "https://www.facebook.com/sarascocina/"
        ]
    }, {
        "name": "Plena Mercancia",
        "address": ["2628 W Division St."],
        "cityState": "Chicago, IL",
        "logo": "/plena.png",
        "tier": "Gold",
        "socials": [
            "https://www.instagram.com/plenamercancia/?hl=en",
            "https://www.facebook.com/p/Plena-Mercanc%C3%ADa-61573510046428/"
        ]
    }, {
        "name": "Reina's Cakes",
        "address": ["2550 W Division St."],
        "cityState": "Chicago, IL",
        "logo": "/Reinas.png",
        "tier": "Silver",
        "socials": [
            "https://www.instagram.com/reinascakes1/?hl=en",
            "https://www.facebook.com/cakesdereina/"

        ]
    }, {
        "name": "Finco Customs",
        "address": [""],
        "cityState": "IL",
        "logo": "/FC.png",
        "width": 156,
        "tier": "Silver",
        "socials": ["https://www.facebook.com/finco.customz"
        ]
    }

]

const races =
    [
        {
            name: "Chicago Marathon",
            date: "08-11-2026",
            imageData: { alt: "Bank of America Chicago Marathon", src: "/chimarathon.png", w: 70, h: 50},
            distance: "26.2 mi",
            time: {hours: 0, minutes: 0, seconds: 0}
        }, {
            name: "Chicago 13.1",
            date: "06-07-2026",
            imageData: { alt: "Bank of America Chicago 13.1 - Half Marathon", src: "/chi13.png", w: 70, h: 0},
            distance: "13.1 mi",
            time: {hours: 0, minutes: 0, seconds: 0}
        },{
            name: "Shamrock Shuffle",
            date: "03-22-2026",
            imageData: { alt: "Shamrock Shuffle", src: "/shamrock.png", w: 135, h: 100},
            distance: "8k",
            time: {hours: 0, minutes: 0, seconds: 0}
        },{

            name: "New Years Eve 5k",
            date: "12-31-2025",
            imageData: { alt: "New Years Eve 5k", src: "/nye5k.avif", w: 100, h: 90 },
            distance: "5 km",
            time: {hours: 0, minutes: 0, seconds: 0}
        }, {

            name: "Chi Town Turkey Trot",
            date: "11-27-2025",
            imageData: { alt: "Stan's Donuts 5k", src: "/turkey25.png", w: 120, h: 90 },
            distance: "10 km",
            time: {hours: 0, minutes: 58, seconds: 37}
        }, {

            name: "Coquito Dash",
            date: "11-22-2025",
            imageData: { alt: "Coquito Dash", src: "/coquito.png", w: 100, h: 100 },
            distance: "5 km",
            time: {hours: 0, minutes: 28, seconds: 33}
        }, {

            name: "Hot Chocolate Run",
            date: "11-02-2025",
            imageData: { alt: "Hot Chocolate Run", src: "/hotcho.webp", w: 100, h: 100 },
            distance: "5 km",
            time: {hours: 0, minutes: 31, seconds: 52}
        }, {

            name: "El Trote De Las Calacas",
            date: "10-18-2025",
            imageData: { alt: "El Trote De Las Calacas", src: "/trote.png", w: 128, h: 128 },
            distance: "5 km",
            time: {hours: 0, minutes: 41, seconds: 50}
        }, {

            name: "Race to Wrigley",
            date: "09-21-2025",
            imageData: { alt: "Race to Wrigley", src: "/wrigley.png", w: 100, h: 100 },
            distance: "5 km",
            time: {hours: 0, minutes: 35, seconds: 15}
        }, {

            name: "El Grito 5k",
            date: "09-14-2025",
            imageData: { alt: "El Grito 5k", src: "/grito.png", w: 100, h: 100 },
            distance: "5 km",
            time: {hours: 0, minutes: 38, seconds: 11}
        }, {

            name: "Stan's Donuts",
            date: "07-28-2025",
            imageData: { alt: "Stan's Donuts 5k", src: "/DonutRunLogo.png", w: 145, h: 118 },
            distance: "5 km",
            time: {hours: 0, minutes: 37, seconds: 18}
        }, {

            name: "San Juan Run",
            date: "06-29-2025",
            imageData: { alt: "San Juan Run", src: "/sanjuanrun.png", w: 100, h: 130 },
            distance: "5 km",
            time: {hours: 0, minutes: 41, seconds: 15}

        },

]

export { links, races, sponsors };
