import React from "react";
import { Reveal } from "./Reveal";
import preschoolScreener1 from "../../assets/preschool-screeners-1.png";
import preschoolScreener3 from "../../assets/preschool-screeners-3.png";
import preschoolScreener4 from "../../assets/preschool-screeners-4.png";
import preschoolScreener5 from "../../assets/preschool-screeners-5.png";

const screenFor = [
     "Speech sounds (Articulation) - how clearly your child is understood",
     "Language skills - understanding and using words and sentences",
     "Vocabulary and sentence development",
     "Listening and comprehension",
     "Early school readiness skills (following instructions, expressing needs, answering questions)"
];

const screenEarly = [
     "Identify children who may need support before school starts",
     "Support language and literacy foundations",
     "Improve confidence, participation and social interaction",
     "Provide clear, actionable strategies to parents and educators",
     "Reduce the risk of ongoing learning difficulties "
];

const howItWorks = [
     "Each child participates in a 15minute individual screening session",
     "Screenings are conducted at your preschool",
     "Sessions are play-based and engaging",
     "Minimal disruption to the child’s day"
];

const PreeschoolSection: React.FC = () => (
     <>
          <section id="preschoolScreeners" className="py-10 bg-pink-100 h-full">
               <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <Reveal>
                         <h3 className="text-3xl font-semibold text-center mb-10">Preschool Screeners</h3>
                         <p className="mb-4 text-lg font-bold leading-relaxed">
                              Early Identification. Clear guidance. School readiness support. 
                         </p>
                         <p className="mb-4 text-lg leading-relaxed">
                              We offer 15 minute Speech and Language screening sessions for children aged 3-6 years, designed specifically for preschools 
                              wanting to support children’s communication development and school readiness. We offer 15 minute Speech and Language screening 
                              sessions for children aged 3-6 years, designed specifically for preschools wanting to support children’s communication development 
                              and school readiness. 
                         </p>
                         <p className="mb-4 text-lg leading-relaxed">
                              These brief screeners help identify children who may benefit from additional support before starting school, giving educators and families clear, practical direction. 
                         </p>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             What we screen for
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             Each session provides a snapshot of your child’s communication skills, including:
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {screenFor.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                        <img
                                             src={preschoolScreener1}
                                             alt="Supervision"
                                             className="max-w-full max-h-[350px]"
                                        />
                                   </div>
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             What you'll receive
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             Following the screener, preschools and families will receive a brief summary outlining:
                                        </p>
                                        <ol className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        <li className="pl-2 tracking-wide">
                                             Child’s strengths
                                        </li>
                                        <li className="pl-2 tracking-wide">
                                             Areas of difficulty or concern
                                        </li>
                                        <li className="pl-2 tracking-wide">
                                             Recommendations for support
                                             <ul className="">
                                                  <li className="pl-2 tracking-wide">Strategies for educators</li>
                                                  <li className="pl-2 tracking-wide">Suggestions for home</li>
                                                  <li className="pl-2 tracking-wide">Guidance on whether further assessment is recommended</li>
                                             </ul>
                                        </li>
                                        </ol>
                                   </div>
                              </div>
                              <div className="w-full md:w-1/3 flex justify-center"> 
                                   <img
                                        src={preschoolScreener3}
                                        alt="Preschool Screener 3"
                                        className="max-w-full max-h-[350px]"
                                   />
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"> 
                              <div className="w-full md:w-1/3 flex justify-center"> 
                                   <img
                                        src={preschoolScreener4}
                                        alt="Preschool Screeners 4"
                                        className="max-w-full max-h-[350px]"
                                   />
                              </div>
                              <div className="w-full md:w-2/3 flex justify-center"> 
                                   <div>
                                        <h4 className="text-2xl text-center font-semibold mb-6">
                                             Why screen early
                                        </h4>
                                        <p className="mb-4 text-lg leading-relaxed">
                                             Early screening helps to:
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {screenEarly.map((area, index) => (
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
                                             How it works
                                        </h4>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        {howItWorks.map((area, index) => (
                                        <li key={index} className="pl-2 tracking-wide">
                                             {area}
                                        </li>
                                        ))}
                                        </ul>
                                        <p className=" text-lg underline leading-relaxed">
                                             Cost: 
                                        </p>
                                        <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                                        <li className="pl-2 tracking-wide">Accounts for report, time and travel to the preschool </li>
                                        </ul>
                                        <p className="mb-4 text-xs italic leading-relaxed">Cost per child may vary to account for travel, depending on location. Further details available upon enquiry.</p>
                                   </div>
                              </div>
                              <div className="w-full md:w-1/3 flex justify-center"> 
                                   <img
                                        src={preschoolScreener5}
                                        alt="Preschool Screener 5"
                                        className="max-w-full max-h-[350px]"
                                   />
                              </div>
                         </div>
                    </Reveal>
                    <Reveal>
                         <h3 className="text-2xl font-semibold text-center mb-10">Additional Services</h3>
                         <p className="mb-4 text-lg leading-relaxed">
                              For children requiring further support, we also provide
                              <ul className="text-left mt-2 space-y-3 text-base md:text-lg list-disc pl-5">
                                   <li className="pl-2 tracking-wide">1:1 comprehensive assessment and ongoing intervention</li>
                                   <li className="pl-2 tracking-wide">Intervention tailored to the child’s needs and frequency</li>
                                   <li className="pl-2 tracking-wide">This can be conducted at home, early learning centre or in the community</li>
                                   <li className="pl-2 tracking-wide">We support funding from NDIS, Medicare and Private Health</li>
                              </ul>
                         </p>
                         <p className="mb-4 text-lg leading-relaxed">
                              We also support early learning centres and schools through;
                              <ul className="text-left mt-2 space-y-3 text-base md:text-lg list-disc pl-5">
                                   <li className="pl-2 tracking-wide">Tailored training and consultation services</li>
                                   <li className="pl-2 tracking-wide">Workshops are designed to suit the specific needs and demographics of your setting</li>
                                   <li className="pl-2 tracking-wide">Provide practical strategies for educators</li>
                                   <li className="pl-2 tracking-wide">Opportunities for open discussion and questions</li>
                              </ul>
                              Cost is $190 per hour (enquire via email) 
                         </p>
                    </Reveal>
               </div>
          </section>
     </>
)

export default PreeschoolSection
