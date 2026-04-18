import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, ArrowRight, ShieldCheck, Phone, Plus, Sparkles } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SEO from '../components/SEO'

// Assets
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'

const coursesData = [
  {
    id: 'aari',
    category: 'Embroidery',
    img: aariImg,
    title: 'Aari Embroidery',
    subtitle: 'Proficient enchanting with threads',
    duration: '35 Days, 3 Mos, 6 Mos',
    students: '150+',
    rating: 4.9,
    description: 'Master the traditional art of Aari embroidery — from basic needles to complex bridal designs.',
    badge: '★ Best Seller'
  },
  {
    id: 'tailoring',
    category: 'Fashion',
    img: tailoringImg,
    title: 'Fashion Designing (FD)',
    subtitle: 'Legacy elegance in every thread',
    duration: '6 Months, 10 Months',
    students: '120+',
    rating: 4.8,
    description: 'Professional sewing with passion. Learn garment construction, pattern making, and boutique styling.',
    badge: '★ Professional'
  },
  {
    id: 'makeup',
    category: 'Beauty',
    img: makeupImg,
    title: 'Makeup Artistry',
    subtitle: 'Unveil your natural glow',
    duration: '2 Months',
    students: '200+',
    rating: 5.0,
    description: 'Professional makeup artistry covering everyday glam to heavy bridal looks.',
    badge: '★ Expert Rated'
  },
  {
    id: 'beautician',
    category: 'Beauty',
    emoji: '💄',
    title: 'Professional Beautician',
    subtitle: 'Wake up & makeup',
    duration: '3 Months',
    students: '90+',
    rating: 4.9,
    description: 'Full Salon Mastery covering skin care, hair styling, and salon management.',
    badge: 'Career Focus'
  },
  {
    id: 'mehandi',
    category: 'Beauty',
    emoji: '🌿',
    title: 'Mehandi Artistry',
    subtitle: 'Mehandi licious',
    duration: '35 Days, 3 Mos, 6 Mos',
    students: '110+',
    rating: 4.8,
    description: 'Master henna mixology and intricate patterns from basic to bridal mastery.',
    badge: '★ Artistic'
  },
  {
    id: 'saree-art',
    category: 'Saree Art',
    emoji: '👘',
    title: 'Saree Pre-pleating & Draping',
    subtitle: 'Elegance in minutes',
    duration: '15 Days',
    students: '75+',
    rating: 5.0,
    description: 'Six yards of pure grace. Professional draping and pre-pleating for events.',
    badge: 'Hot Choice'
  },
  {
    id: 'tassels',
    category: 'Saree Art',
    emoji: '🧵',
    title: 'Saree Tassels & Kuchu',
    subtitle: 'pallu perfection',
    duration: '15 Days',
    students: '60+',
    rating: 4.7,
    description: 'Exquisite bead work and designer tassels to enhance any saree.',
    badge: '★ Creative'
  },
  {
    id: 'crafts',
    category: 'Crafts',
    emoji: '🧶',
    title: 'Brooches & Fabric Painting',
    subtitle: 'Expression of artistry',
    duration: '35 Days, 3 Mos, 6 Mos',
    students: '180+',
    rating: 4.7,
    description: 'Every stroke tells a story. 3D brooches and fine fabric painting techniques.',
    badge: '★ Mini Course'
  }
]

const categories = ['All', 'Embroidery', 'Fashion', 'Beauty', 'Saree Art', 'Crafts']

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' 
    ? coursesData 
    : coursesData.filter(c => c.category === activeCategory)

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": coursesData.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "provider": {
          "@type": "Organization",
          "name": "Glorious Art Creations",
          "sameAs": "https://gloriousartcreations.com"
        }
      }
    }))
  }

  return (
    <PageWrapper>
      <SEO 
        title="Professional Fashion Courses | Aari, Tailoring & Makeup in Chidambaram" 
        description="Browse our master catalog of fashion arts. From Aari embroidery to bridal makeup, get certified by Glorious Art Creations — #1 in Chidambaram."
        url="/courses"
        schema={coursesSchema}
      />

      {/* ── Title Banner ─────────────────────────────────── */}
      <section className="pt-48 pb-16 md:pt-64 md:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-rose-600 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block"
            >
              Excellence in Arts
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
            >
              The Master <span className="gradient-text italic">Catalog</span>
            </motion.h1>
            
            {/* Horizontal Filter - Scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
               {categories.map(cat => (
                 <motion.button
                   key={cat}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => setActiveCategory(cat)}
                   className={`whitespace-nowrap px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                     activeCategory === cat 
                     ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                     : 'bg-white text-slate-500 hover:bg-rose-50 border border-slate-100'
                   }`}
                 >
                   {cat}
                 </motion.button>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses Grid ──────────────────────────────────── */}
      <section className="py-16 pb-32 px-5 sm:px-8 bg-white min-h-[600px]">
        <div className="container-custom">
          <motion.div layout className="grid md:grid-cols-2 gap-10">
             <AnimatePresence mode="popLayout">
               {filtered.map((c, i) => (
                 <motion.article
                   key={c.id}
                   layout
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col sm:flex-row h-full hover:shadow-2xl transition-all duration-500"
                 >
                    {/* Visual Side */}
                    <div className="w-full sm:w-[45%] relative aspect-square sm:aspect-auto min-h-[250px] overflow-hidden bg-slate-100">
                       {c.img ? (
                         <img src={c.img} alt={`Professional ${c.title} course at Glorious Art Creations Chidambaram`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0" loading="lazy" decoding="async" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-7xl bg-white">{c.emoji}</div>
                       )}
                        <div className="absolute top-6 left-6 z-20">
                           {c.badge === 'Career Focus' ? (
                             <motion.div 
                               initial={{ scale: 0.8, opacity: 0 }}
                               whileInView={{ scale: 1, opacity: 1 }}
                               transition={{ type: 'spring', damping: 15 }}
                               className="px-4 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-purple-200 flex items-center gap-2 border border-white/20"
                             >
                               <ShieldCheck size={12} className="text-purple-200" /> Career Focus
                             </motion.div>
                           ) : c.badge === 'Hot Choice' ? (
                             <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', damping: 15 }}
                                className="px-4 py-2 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-200 flex items-center gap-2 border border-white/20"
                             >
                                <Sparkles size={12} className="text-orange-200" /> Hot Choice
                             </motion.div>
                           ) : (
                             <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-800 shadow-sm border border-slate-100/50">
                               {c.badge}
                             </div>
                           )}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full sm:w-[55%] p-8 lg:p-10 flex flex-col justify-between items-start bg-white">
                      <div className="w-full">
                        <span className="text-rose-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">{c.category} Course</span>
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{c.title}</h2>
                        <p className="text-slate-500 text-xs font-bold italic mb-4">"{c.subtitle}"</p>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">{c.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                           <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                              <Clock size={16} className="text-rose-500" /> {c.duration}
                           </div>
                           <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                              <Users size={16} className="text-purple-500" /> {c.students} Trained
                           </div>
                        </div>
                      </div>

                      <a 
                        href="https://wa.me/918072769642"
                        className="btn-premium btn-gradient w-full py-4 text-[10px] uppercase tracking-widest text-center"
                      >
                        Enroll Now <ArrowRight size={16} />
                      </a>
                    </div>
                 </motion.article>
               ))}
             </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Help CTA ──────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom">
           <div className="glass-card rounded-[4rem] p-10 md:p-20 text-center border-white shadow-premium relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-rose-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <ShieldCheck className="mx-auto text-rose-500 mb-8" size={56} />
                <h2 className="font-serif text-3xl sm:text-6xl font-bold text-slate-900 mb-8 leading-tight">Need Career Advice?</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto mb-12">
                  Not sure which course is right for you? Talk to our master trainers in Chidambaram for a <span className="text-rose-600 font-bold underline decoration-rose-200 underline-offset-8">Free 1-on-1 Consultation.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <Link to="/contact" className="btn-premium btn-gradient w-full sm:w-auto px-12 text-center">
                     Start Free Consultation <ArrowRight size={18} />
                   </Link>
                   <a href="tel:+918072769642" className="btn-premium btn-outline w-full sm:w-auto px-12 text-center">
                     Call for Admission <Phone size={18} className="ml-2" />
                   </a>
                </div>
              </div>
           </div>
        </div>
      </section>
    </PageWrapper>
  )
}
