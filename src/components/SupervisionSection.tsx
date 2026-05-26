import React from "react";
import { Reveal } from "./Reveal";
import supervision1 from "../../assets/supervision-1.png";
import supervision2 from "../../assets/supervision-2.png";
import supervision3 from "../../assets/supervision-3.png";

const supportAreas = [
     "Clinical reasoning",
     "Assessment and report writing (including NDIS)",
     "Therapy planning and intervention approaches",
     "Complex cases (AAC, dysphagia etc)",
     "Managing risk and ethical decision making",
     "Professional identity and confidence building",
     "Navigating private practice or workplace challenges"
];

const supervisionFor = [
     "New graduates and early career Speech Pathologists",
     "Clinicians returning to practice or changing areas",
     "Sole traders or private practitioners"
];

const whatToExpect = [
     "Case discussions and problem solving",
     "Review of reports, goals or therapy plans",
     "Skill-building and reflective practice",
     "Guidance around difficult conversations or ethical issues",
     "Actionable strategies you can apply immediately"
];

const whyMatters = [
     "Improve client outcomes",
     "Reduce burnout and isolation",
     "Build confidence in decision-making",
     "Maintain safe and ethical practice"
];

const SupervisionSection: React.FC = () => (
     <>
          <section id="supervision" className="py-10 bg-pink-100 h-full">
               <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <Reveal>
                         <h3 className="text-3xl font-semibold text-center mb-10">Supervision</h3>
                         <p className="mb-4 text-lg font-bold leading-relaxed">
                              Grow your confidence, clinical skills and career with supportive, evidence-based supervision
                         </p>
                         <p className="mb-4 text-lg leading-relaxed">
                              Whether you’re an early career clinician, transitioning into a new area, or an experienced Speech Pathologist looking for reflective practice, 
                              supervision provides a space to build clinical reasoning, strengthen decision making, and feel supported. 
                         </p>
                         <p className="mb-4 text-lg leading-relaxed">
                              We offer online supervision across Australia, as well as in-person sessions in Melbourne and Geelong. 
                         </p>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             What supervision can support with?
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             Supervision is tailored to your individual goals and caseload. 
                                             <span className="block mt-1">Areas of support may include:</span>
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {supportAreas.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                   </div>
                              </div>
                              <div className="w-full md:w-1/3 flex justify-center"> 
                                   <img
                                        src={supervision1}
                                        alt="Supervision"
                                        className="max-w-full max-h-[350px]"
                                   />
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-1/3 flex justify-center"> </div>
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             Who is supervision for?
                                        </h4>
                                        <br />
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {supervisionFor.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             Flexible Supervision options
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             We offer:
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                             <li className="pl-2 tracking-wide">Online Supervision - accessible Australia-wide</li>
                                             <li className="pl-2 tracking-wide">In-person sessions - Melbourne & Geelong</li>
                                             <li className="pl-2 tracking-wide">1:1 supervision - personlised and goal-focused</li>
                                             <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                                  <li className="pl-2 tracking-wide">1hr Supervision sessions - $190 p/hour</li>
                                             </ul>
                                             <li className="pl-2 tracking-wide"> Small group supervision - shared learning and case discussion
                                             <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                                  <li className="pl-2 tracking-wide">1.5hr Group supervision - $120 p/hour</li>
                                             </ul>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="w-full md:w-1/3 flex justify-center" />
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-1/3 flex justify-center"> 
                                   <img
                                        src={supervision2}
                                        alt="Supervision"
                                        className="max-w-full max-h-[350px]"
                                   />
                              </div>
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             What to expect
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             Supervision sessions may include:
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {whatToExpect.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-1/2 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             Why supervision matters
                                        </h4>
                                        <br />
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {whyMatters.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                   </div>
                              </div>
                              <div className="w-full md:w-1/2 flex justify-center"> 
                                    <img
                                        src={supervision3}
                                        alt="Supervision"
                                        className="max-w-full max-h-[350px]"
                                   />    
                              </div>
                         </div>
                    </Reveal>
               </div>
          </section>
     </>
)

export default SupervisionSection
