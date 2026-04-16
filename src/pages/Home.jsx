import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Sparkles, Award, Users, BookOpen, Clock, 
  ChevronRight, ArrowRight, CheckCircle2, Star, Plus, Play, Quote, Phone, ShieldCheck 
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SEO from '../components/SEO'

// Assets
import heroImg from '../assets/hero.png'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'
import aboutImg from '../assets/about.png'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const SectionTitle = ({ subtitle, title, description, center = false }) => (
  <div className={`mb-12 md:mb-20 ${center ? 'text-center' : ''} max-w-4xl ${center ? 'mx-auto' : ''}`}>
    <motion.div {...fadeIn}>
      <span className="text-rose-600 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block underline decoration-rose-200 underline-offset-8">
        {subtitle}
      </span>
    </motion.div>
    <motion.h2 
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: 0.1 }}
      className="heading-special text-slate-900 font-bold mb-8"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {description && (
      <motion.p 
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.2 }}
        className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </div>
)

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null)

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Glorious Art Academy",
    "image": "https://gloriousartacademy.com/hero.png",
    "@id": "",
    "url": "https://gloriousartacademy.com",
    "telephone": "+918072769642",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "West Car Street",
      "addressLocality": "Chidambaram",
      "postalCode": "608001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.399,
      "longitude": 79.693
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  }

  const courses = [
    { id: 'aari', title: 'Aari Embroidery', category: 'Professional', img: aariImg, price: 'Premium' },
    { id: 'tailoring', title: 'Fashion Tailoring', category: 'Creative', img: tailoringImg, price: 'Premium' },
    { id: 'makeup', title: 'Makeup Artistry', category: 'Beauty', img: makeupImg, price: 'Premium' },
    { id: 'crafts', title: 'Handmade Crafts', category: 'Art', emoji: '🎨', price: 'Creative' }
  ]

  const testimonials = [
    { name: 'Priya R.', role: 'Boutique Owner', text: 'Completed Aari classes and started my own boutique in Chidambaram. The individual attention here is unmatched.' },
    { name: 'Anitha S.', role: 'Fashion Student', text: 'The tailoring course focused on bridal blouses helped me earn while studying. Highly recommend for women!' },
    { name: 'Meera K.', role: 'Makeup Artist', text: 'Professional grooming and makeup techniques taught here are industry standard. I feel so confident now.' }
  ]

  const faqs = [
    { q: 'How much are the fashion designing course fees in Chidambaram?', a: 'Our fees are structured to be affordable yet premium. Please visit our contact page or WhatsApp us for the latest fee structure for Aari and Tailoring.' },
    { q: 'Can I learn embroidery as a complete beginner?', a: 'Absolutely! Our courses start from basics - like how to hold the needle - and move to professional bridal work. No prior experience is required.' },
    { q: 'Is the certification valid for jobs?', a: 'Yes, our certificate is recognized by leading boutiques and fashion houses. It is also an essential document if you plan to register your own shop.' },
    { q: 'Do you offer online classes for students outside Chidambaram?', a: 'We have a high-quality online curriculum with HD recordings and weekly live review sessions via WhatsApp and Zoom.' },
    { q: 'Are there weekend batches for working women?', a: 'Yes, we have special weekend batches and flexible timings designed specifically for working professionals and students.' }
  ]

  return (
    <PageWrapper>
      <SEO 
        title="Best Aari Embroidery & Fashion Academy in Chidambaram" 
        description="Join Chidambaram's #1 academy for Aari embroidery, Tailoring, and Makeup Artistry. Govt certified courses with 100% placement support for women."
        keywords="aari embroidery chidambaram, tailoring classes chidambaram, fashion designing course chidambaram, makeup academy chidambaram, bridal blouse stitching chidambaram"
        schema={homeSchema}
      />

      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center pt-32 sm:pt-40 lg:pt-48 pb-20 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-[-10%] w-[80vw] lg:w-[60vw] h-[80vw] lg:h-[60vw] bg-rose-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] lg:w-[50vw] h-[60vw] lg:h-[50vw] bg-purple-50 rounded-full blur-[100px] opacity-40" />
        
        <div className="container-custom relative z-10 px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left space-y-8 lg:space-y-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-effect border-rose-100/50 shadow-sm mx-auto lg:mx-0"
              >
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                </div>
                <span className="text-[10px] xs:text-xs font-extrabold uppercase tracking-widest text-slate-700">Join 500+ successful Women in Chidambaram</span>
              </motion.div>

              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="heading-special text-slate-900 font-bold"
                >
                  Master <span className="gradient-text italic font-normal">Fashion Arts</span> <br />
                  & Vocational Diplomas
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-slate-500 font-medium text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Turn your creativity into professional skills with Chidambaram's premier academy for Aari embroidery, Tailoring, and Makeup.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start"
              >
                <Link to="/contact?course=aari" className="btn-premium btn-gradient w-full sm:w-auto text-lg px-12 text-center">
                  Start Your Journey <ArrowRight size={22} />
                </Link>
                <Link to="/courses" className="btn-premium btn-outline w-full sm:w-auto text-lg px-12 group">
                   <div className="flex items-center gap-3">
                     View Catalog <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-[580px]"
              >
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl animate-float group">
                  <img src={heroImg} alt="Master Aari Embroidery in Chidambaram" className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Courses ────────────────────────────── */}
      <section className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-custom text-center lg:text-left">
          <SectionTitle 
            subtitle="The Academy Program"
            title="Premium <span className='italic font-normal'>Courses</span> in Fashion"
            description="Explore our specialized training designed for boutique-level mastery and professional certification."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {courses.map((c, i) => (
              <motion.div
                key={c.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  {c.img ? (
                    <img src={c.img} alt={`Learn ${c.title} in Chidambaram`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" decoding="async" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl bg-slate-50">{c.emoji}</div>
                  )}
                </div>
                <div className="p-8">
                  <span className="text-rose-500 text-[10px] font-extrabold uppercase tracking-[.3em] mb-3 block">{c.category}</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">{c.title}</h3>
                  <Link to={`/course/${c.id}`} className="btn-premium btn-outline w-full py-3 text-xs uppercase tracking-widest group">
                    View Syllabus <Plus size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academy Advantages (Brochure Details) ────────────── */}
      <section className="py-24 px-5 sm:px-8 bg-slate-900 overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-slate-900 opacity-50" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
               <div>
                  <span className="text-rose-400 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs block mb-4">Official Accreditation</span>
                  <h2 className="font-serif text-3xl sm:text-6xl font-bold text-white leading-tight">
                    Chidambaram's Trusted <br /> 
                    <span className="italic font-normal text-rose-300 underline decoration-rose-500/30 underline-offset-[12px]">ICVE Affiliate</span>
                  </h2>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: '100% Job Guarantee', desc: 'A complete skill training institute with guaranteed placement assistance.' },
                    { title: 'Daily & Weekend Batches', desc: 'Flexible timings designed for students, homemakers, and professionals.' },
                    { title: 'Certified Trainers', desc: 'Learn from experienced female master-artisans with professional degrees.' },
                    { title: 'Entrepreneur Support', desc: 'Expert consultation to start your own boutique or beauty studio.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-400">
                        <ShieldCheck size={20} />
                      </div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="aspect-square rounded-[4rem] bg-white flex flex-col items-center justify-center p-8 lg:p-16 text-center border-4 border-rose-500 shadow-[0_0_50px_rgba(225,29,72,0.3)] relative group overflow-hidden"
               >
                  <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 space-y-8">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-slate-50 flex items-center justify-center p-4 border border-slate-100 mx-auto group-hover:rotate-6 transition-transform">
                       <Award size={64} className="text-rose-500" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-4">
                      <div className="text-slate-900 font-extrabold text-xs tracking-[.4em] uppercase">National Recognition</div>
                      <h3 className="text-slate-900 font-serif text-2xl sm:text-3xl font-bold leading-tight">Indian Council for <br /> Vocational Education</h3>
                    </div>
                    <div className="py-4 px-6 bg-rose-600 rounded-2xl text-white font-extrabold text-sm uppercase tracking-widest inline-block shadow-lg shadow-rose-200">
                       100% Govt Recognized
                    </div>
                    <p className="text-slate-400 text-xs max-w-xs mx-auto font-medium">Providing globally valid certificates for all fashion & beauty programs since 2018.</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof / Testimonials ────────────────────── */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
           <SectionTitle 
             subtitle="Student Success"
             title="Chidambaram's <span className='gradient-text'>Success Stories</span>"
             center
           />
           <div className="grid md:grid-cols-3 gap-12">
              {testimonials.map((t, i) => (
                 <motion.div 
                   key={i}
                   {...fadeIn}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all"
                 >
                    <Quote className="text-rose-100 absolute top-10 right-10 group-hover:text-rose-200 transition-colors" size={60} />
                    <div className="flex gap-1 text-amber-400 mb-6">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10 italic">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-slate-200" />
                       <div>
                          <p className="font-bold text-slate-900">{t.name}</p>
                          <p className="text-[10px] uppercase font-extrabold text-rose-500 tracking-widest">{t.role}</p>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ── FAQ Section (AEO optimized) ──────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Your Questions Answered" 
            title="Common <span className='italic font-normal'>Inquiries</span>" 
            center 
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm"
                {...fadeIn}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-800">{faq.q}</span>
                  <div className={`p-3 rounded-2xl transition-all ${activeFaq === i ? 'bg-rose-600 text-white rotate-45' : 'bg-slate-50'}`}>
                    <Plus size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="px-10 pb-10 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ──────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[5rem] overflow-hidden bg-slate-900 p-12 sm:p-24 text-center group">
            <div className="absolute inset-0 bg-linear-to-tr from-rose-900/60 to-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 space-y-12">
               <div className="space-y-4">
                  <span className="text-rose-400 font-extrabold uppercase tracking-[.4em] text-[10px] sm:text-xs">Limited Time Offer</span>
                  <h2 className="heading-special text-white font-bold">
                    Secure Your Spot for the <br />
                    <span className="gradient-text italic font-normal">June Batch</span>
                  </h2>
               </div>
               
               <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                 Join any Professional course today and get <span className="text-white font-bold underline decoration-rose-500 underline-offset-8">30 Days of Advanced Training for FREE!</span> This summer special expires soon.
               </p>

               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <Link to="/contact" className="btn-premium btn-gradient w-full sm:w-auto px-16 text-lg py-5 shadow-rose-900/40 text-center">
                    Enroll with Free Offer <ArrowRight size={22} />
                  </Link>
                  <a href="tel:+918072769642" className="text-white font-bold flex items-center gap-3 hover:text-rose-400 transition-colors">
                    <Phone size={24} className="text-rose-500" /> +91 80727 69642
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
