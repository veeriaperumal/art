import { motion } from 'framer-motion'
import { Award, ShieldCheck, Heart, Star, Users, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import SEO from '../components/SEO'
import aboutImg from '../assets/about.png'

const SectionTitle = ({ subtitle, title, description, center = false }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
    <span className="text-rose-600 font-extrabold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">
      {subtitle}
    </span>
    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
      {title}
    </h2>
    {description && (
      <p className={`text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
        {description}
      </p>
    )}
  </div>
)

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Glorious Art Creations",
    "description": "Premium fashion and beauty training in Chidambaram specializing in Aari embroidery and tailored fashion.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chidambaram",
      "addressRegion": "Tamil Nadu"
    }
  }

  return (
    <PageWrapper>
      <SEO 
        title="Meet the Masters | Glorious Art Creations Success Story" 
        description="Learn the history and mission of Glorious Art Creations. Discover how we empower women through expert fashion and beauty training."
        url="/about"
        schema={aboutSchema}
      />

      {/* ── Header ────────────────────────────────────────── */}
      <section className="pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                 <SectionTitle 
                   subtitle="Our Mission for Chidambaram"
                   title="Empowering Women Through Skilled Artistry"
                   description="OUR MISSION of worldwide: To transform hidden creative talents into independent professional careers for women."
                 />
                 <div className="space-y-6 mb-10">
                    <p className="text-slate-600 font-medium leading-relaxed italic">
                      "Work until an signature becomes an Autograph."
                    </p>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/contact" className="btn-premium btn-gradient w-full sm:w-auto px-12 text-center">
                      Join Our Academy <ArrowRight size={20} />
                    </Link>
                    <Link to="/courses" className="btn-premium btn-outline w-full sm:w-auto px-12 text-center">
                      Explore Catalog <ArrowRight size={20} />
                    </Link>
                 </div>
             </div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative"
             >
                <div className="absolute -inset-4 bg-rose-200/30 rounded-[3rem] rotate-3" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                   <img src={aboutImg} alt="Expert Aari Embroidery training in Chidambaram" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Expert Instructor (GEO Improvement) ───────────────── */}
      <section className="section-padding px-5 sm:px-8 bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[4rem] bg-slate-100 overflow-hidden shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                       <Users size={120} strokeWidth={1} />
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 glass-effect p-8 rounded-[3rem] shadow-premium max-w-xs">
                    <p className="font-vibes text-3xl text-rose-600 mb-2">Master Trainer</p>
                    <p className="text-slate-900 font-bold leading-tight">8 Years of Professional Boutique Experience</p>
                 </div>
              </div>
              <div className="space-y-8">
                 <SectionTitle 
                   subtitle="The Expertise"
                   title="Guided by <span className='gradient-text'>Industry Experts</span>"
                   description="Our training programs are led by master artisans who have spent decades perfecting the craft of bridal embroidery and garment construction."
                 />
                 <ul className="space-y-4">
                    {['Certified Professional Trainer', 'Expert in 50+ Aari stitches', 'Boutique Management Consultant', '100% Success Rate with Students'].map(point => (
                       <li key={point} className="flex items-center gap-4 text-slate-600 font-bold">
                          <Check className="text-green-500" size={20} /> {point}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
              {[
                { icon: <Heart />, title: 'Women-Centric', desc: 'Focusing exclusively on skills that build financial independence for women.' },
                { 
                  icon: <Star />, 
                  title: 'World Record', 
                  desc: 'No 1 world won ACADEMY on DEC 6. 2025 for 4 Categories.',
                  highlight: true 
                },
                { icon: <ShieldCheck />, title: 'Govt Certified', desc: 'Official recognition with ISO 9001:2015 for every professional course.' },
                { icon: <Users />, title: 'Alumni Network', desc: 'A supportive community of 500+ successful graduates and business owners.' }
              ].map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl ${
                    v.highlight 
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl' 
                    : 'bg-white border-slate-100'
                  }`}
                >
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                     v.highlight ? 'bg-rose-500 text-white' : 'bg-rose-600/10 text-rose-600'
                   }`}>
                      {v.icon}
                   </div>
                   <h3 className={`font-serif text-2xl font-bold mb-4 ${v.highlight ? 'text-white' : 'text-slate-900'}`}>{v.title}</h3>
                   <p className={`text-sm font-medium leading-relaxed ${v.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{v.desc}</p>
                </motion.div>
              ))}

      {/* ── Final Call ────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8">
        <div className="container-custom">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-linear-to-tr from-rose-900/40 to-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                 <div className="mb-6">
                    <span className="text-rose-400 font-extrabold uppercase tracking-widest text-xs">Summer Special Live</span>
                 </div>
                 <h2 className="font-serif text-3xl sm:text-6xl font-bold text-white mb-8 leading-tight">Be Our Next <span className="gradient-text italic font-normal">Success Story</span></h2>
                 <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-medium">Join Chidambaram's #1 academy today and get an exclusive <span className="text-white font-bold underline decoration-rose-500 underline-offset-8">30 Days FREE Advanced Mastery training.</span></p>
                  <Link to="/contact" className="btn-premium btn-gradient w-full sm:w-auto px-16 text-center">
                    Enroll with Free Offer <ArrowRight size={22} />
                  </Link>
              </div>
           </div>
        </div>
      </section>
    </PageWrapper>
  )
}
