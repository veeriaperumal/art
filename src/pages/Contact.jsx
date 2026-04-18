import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const selectedCourse = searchParams.get('course') || ''

  return (
    <PageWrapper>
      <SEO 
        title="Contact Admissions | Enroll at Glorious Art Creations" 
        description="Ready to start your creative career? Contact Glorious Art Creations in Chidambaram for admission details, course fees, and schedule information."
        url="/contact"
      />
      
      {/* ── Title Banner ─────────────────────────────────── */}
      <section className="pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-600 font-extrabold uppercase tracking-[.4em] text-[10px] sm:text-xs mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
          >
            Contact <span className="gradient-text italic">Admissions</span>
          </motion.h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
             We're here to help you choose the perfect creative path. Reach out to us for admission details, fees, or course schedules.
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <section className="section-padding px-5 sm:px-8 bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-12">
                 <div className="space-y-4">
                    <h2 className="font-serif text-3xl font-bold text-slate-900">Information</h2>
                    <p className="text-slate-500 font-medium">Located conveniently at the heart of the temple city, Chidambaram.</p>
                 </div>

                 <div className="space-y-8">
                     {[
                        { icon: <MapPin />, title: 'Main Campus', text: '8A/2, Umayal Street, (Near National Shopping), Chidambaram, Tamil Nadu' },
                        { icon: <MapPin />, title: 'Bhuvanagiri Branch', text: 'Main Road, Bhuvanagiri, Tamil Nadu' },
                        { icon: <Phone />, title: 'Direct Line', text: '+91 80727 69642, 73395 33550' },
                        { icon: <Mail />, title: 'Email Support', text: 'gacgloriousartcreationsstrust07@gmail.com' },
                     ].map((item, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                         className="flex gap-6 items-start"
                       >
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 text-rose-600 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                             {item.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                             <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.text}</p>
                          </div>
                       </motion.div>
                    ))}
                 </div>

                 {/* WhatsApp CTA */}
                 <div className="p-8 rounded-[2.5rem] bg-linear-to-br from-green-50 to-teal-50 border border-green-100 flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-16 h-16 rounded-3xl bg-green-500 text-white flex items-center justify-center shrink-0 shadow-xl shadow-green-200">
                       <MessageCircle size={32} />
                    </div>
                    <div className="text-center sm:text-left">
                       <p className="font-bold text-slate-900">Instant Chat</p>
                       <p className="text-xs text-slate-500 mb-4">Start a conversation on WhatsApp for quick replies.</p>
                       <a 
                        href="https://wa.me/918072769642" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 font-extrabold uppercase tracking-widest text-[10px] items-center gap-2 inline-flex hover:translate-x-1 transition-transform"
                       >
                         Chat Now <ArrowRight size={14} />
                       </a>
                    </div>
                 </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                 <div className="glass-card rounded-[3rem] p-8 sm:p-12 md:p-16 relative shadow-premium bg-white">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-10">Enrollment Inquiry</h3>
                    <form className="space-y-6 relative z-10">
                       <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                             <input type="text" placeholder="Your Name" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">Mobile Number</label>
                             <input type="tel" placeholder="+91 00000 00000" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium" />
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">Interested Course</label>
                          <select 
                            defaultValue={selectedCourse}
                            className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium appearance-none cursor-pointer"
                          >
                             <option value="">Select a Course</option>
                             <option value="aari">Aari Embroidery</option>
                             <option value="tailoring">Tailoring & Fashion</option>
                             <option value="makeup">Makeup Artistry</option>
                             <option value="crafts">Creative Crafts</option>
                          </select>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                          <textarea placeholder="Tell us about your learning goals..." className="w-full min-h-[160px] p-8 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-rose-400 focus:outline-hidden transition-all text-slate-900 font-medium resize-none"></textarea>
                       </div>

                       <button type="submit" className="btn-premium btn-gradient w-full py-5 text-base">
                          Send Request <Send size={20} />
                       </button>
                    </form>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom">
           <div className="h-[400px] w-full rounded-[3rem] bg-slate-200 relative overflow-hidden flex items-center justify-center">
              <div className="text-center">
                 <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                 <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Interactive Map Loading...</p>
              </div>
           </div>
        </div>
      </section>
    </PageWrapper>
  )
}
