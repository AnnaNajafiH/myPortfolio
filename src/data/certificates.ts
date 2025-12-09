import WBSImage from '../assets/images/WBS-School.jpg';
import CS50PImage from '../assets/images/CS50P.png';
import HackfestivalImage from '../assets/images/Hackfestival2024.jpg';
import MentalHealthHackathonImage from '../assets/images/MentalHealth_Hackathon.jpg';
import noImage from '../assets/images/image.png';
import devOpsImage from '../assets/images/devOps.jpg';

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
      description: "17-week intensive bootcamp covering full stack web development, including JavaScript, React, Node.js, Express.js, Databases, Restfull APIs, AI Integration and more.",
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
      title: "DevOps Foundations: CI/CD",
      organization: "LinkedIn Learning",
      date: "July 2025",
      description: "A course exploring CI/CD principles, tools, and best practices to streamline software development and deployment workflows using DevOps methodologies.",
      image: devOpsImage,
      link: "https://www.linkedin.com/learning/certificates/85cdb20b0f9e7799ced067eca6973350153849e794a4e39ca40004c0847dee51?trk=share_certificate"
  
    },
    {
      id: 4,
      title: "Winner - Hackfestival 2024",
      organization: "The Hackathon Company",
      date: "06-08 September 2024",
      description: "Winner of the Roche Company Challenge at the Hackfestival 2024 in Mannheim, Germany, with a gamified web app that enables employees to track and reduce their individual CO₂ footprint through personalized challenges and workplace engagement.",
      image: HackfestivalImage,
      link: "https://www.roche.de/presse/news/innovationskraft-fuer-nachhaltigkeit-roche-auf-dem-hackfestival-mannheim#70b9d713-8821-4558-aabb-2b53cf68cd80-download-anchor"
    },
    {
      id: 5,
      title: "Mental Health Hackathon 2024",
      organization: "dgppn - Deutsche Gesellschaft für Psychiatrie und Psychotherapie, Psychosomatik und Nervenheilkunde",
      date: "28-29 November 2024",
      description: "a digital mental health platform that promotes the acceptance of digital solutions by addressing language barriers and enhancing accessibility.",
      image: MentalHealthHackathonImage,
      link: "https://www.dgppn.de/veranstaltungen/mental-health-hackathon.html"
  
    }
,
    {
      id: 6,
      title: "Winner - Decode Skincare Science (HerHackathon)",
      organization: "Beiersdorf — HerHackathon, Hamburg",
      date: "20–22 November 2025",
      description: "Participated in Beiersdorf's HerHackathon (Decode Skincare Science) and won the challenge for building an AI-powered Science-to-Content ecosystem that transforms R&D insights into trend-aware social and internal content. The system detects emerging skincare trends, generates accurate Gen-Z-facing Instagram content (human-in-the-loop approval), and produces internal briefs and training snippets to speed up storytelling and alignment.",
      image: noImage,
      link: "https://www.beiersdorf.com"
    }
  ];