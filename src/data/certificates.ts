import WBSImage from '../assets/images/WBS-School.jpg';
import CS50PImage from '../assets/images/CS50P.png';
import HackfestivalImage from '../assets/images/Hackfestival2024.jpg';
import MentalHealthHackathonImage from '../assets/images/MentalHealth_Hackathon.jpg';

export interface Certificate {
    id: number;
    title: string;
    organization: string;
    date: string;
    description: string;
    image: string;
    link?: string;
  }
  
  export const certificates: Certificate[] = [
    
    {
      id: 1,
      title: "Full Stack Web & App Development Bootcamp",
      organization: "WBS Coding School",
      date: "April - August 2024",
      description: "17-week intensive bootcamp covering full stack web development, including React, Node.js, JavaScript, and more.",
      image: WBSImage,
      link: "https://www.wbscodingschool.com/web-app-development-bootcamp/"
    },
    {
      id: 2,
      title: "CS50's Introduction to Programming with Python",
      organization: "Harvard University via edX",
      date: "May 2025",
      description: "Comprehensive course covering Python programming fundamentals, data structures, and algorithmic thinking.",
      image: CS50PImage,
      link: "https://cs50.harvard.edu/python/2022/"
    },
    {
      id: 3,
      title: "Winner - Hackfestival 2024",
      organization: "The Hackathon Company",
      date: "March 2024",
      description: "Winner of the Roche Company Challenge at the Hackfestival 2024 in Mannheim, Germany, with a gamified web app that enables employees to track and reduce their individual CO₂ footprint through personalized challenges and workplace engagement.",
      image: HackfestivalImage,
      link: "https://www.roche.de/presse/news/innovationskraft-fuer-nachhaltigkeit-roche-auf-dem-hackfestival-mannheim#70b9d713-8821-4558-aabb-2b53cf68cd80-download-anchor"
    },
    {
      id: 4,
      title: "Mental Health Hackathon 2024",
      organization: "dgppn - Deutsche Gesellschaft für Psychiatrie und Psychotherapie, Psychosomatik und Nervenheilkunde",
      date: "November 2024",
      description: "a digital mental health platform that promotes the acceptance of digital solutions by addressing language barriers and enhancing accessibility.",
      image: MentalHealthHackathonImage,
      link: "https://www.dgppn.de/veranstaltungen/mental-health-hackathon.html"
  
    }
  ];