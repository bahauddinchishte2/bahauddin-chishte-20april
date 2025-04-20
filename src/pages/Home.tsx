import React from 'react';
import Hero from '../components/Hero';
import EducationJourney from '../components/EducationJourney';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Interests from '../components/Interests';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Companies from '../components/Companies';

export default function Home() {
  return (
    <div className="space-y-8 w-full overflow-hidden">
      <Hero />
      <EducationJourney />
      <Experience />
      <Projects />
      <Gallery />
      <Companies />
      <Impact />
      <Achievements />
      <Interests />
      <Contact />
    </div>
  );
}