import spacemanDouglas from '../assets/img/crew/spacemanDouglas.png';
import spacemanMark from '../assets/img/crew/spacemanMark.png';
import spacemanVictor from '../assets/img/crew/spacemanVictor.png';
import spacemanAnousheh from '../assets/img/crew/spacemanAnousheh.png';
import Image_0 from "../assets/img/technology/Bitmap (2).png";
import Image_1 from "../assets/img/technology/Bitmap (3).png";
import Image_2 from "../assets/img/technology/Bitmap (4).png";
import Image_3 from "../assets/img/technology/BitmapRes01.png";
import Image_4 from "../assets/img/technology/BitmapResp02.png";
import Image_5 from "../assets/img/technology/BitmapResp03.png";
import Image_6 from "../assets/img/technology/BitmapMobil_1.png";
import Image_7 from "../assets/img/technology/BitmapMobil_2.png";
import Image_8 from "../assets/img/technology/BitmapMobil_3.png";



export const crewData = [
    {
        id: 1,
        name: "Douglas Hurley",
        image: spacemanDouglas,
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        id: 2,
        name: "Mark Shuttleworth",
        image: spacemanMark,
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        id: 3,
        name: "Victor Glover",
        image: spacemanVictor,
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        id: 4,
        name: "Anousheh Ansari",
        image: spacemanAnousheh,
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

export const technologyData = [
    {
      id: 1,
      title: "LAUNCH VEHICLE",
      info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: Image_0,
      imageResponsive: Image_3,
      imageMobile: Image_6,
      
    },
    {
      id: 2,
      title: "SPACEPORT",
      info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch!",
      image: Image_1,
      imageResponsive: Image_4,
      imageMobile: Image_7,
    },
    {
      id: 3,
      title: "SPACE CAPSULE",
      info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: Image_2,
      imageResponsive: Image_5,
      imageMobile: Image_8,
    },
  ];
  