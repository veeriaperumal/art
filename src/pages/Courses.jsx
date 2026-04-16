import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, ArrowRight, ShieldCheck, Phone, Plus } from 'lucide-react'
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
    subtitle: 'Professional Bridal Art',
    duration: '3 Months',
    students: '150+',
    rating: 4.9,
    description: 'Master the traditional art of Aari embroidery in Chidambaram — from basic needles to complex bridal blouse designing.',
    badge: '★ Best Seller'
  },
  {
    id: 'tailoring',
    category: 'Fashion',
    img: tailoringImg,
    title: 'Fashion Designing',
    subtitle: 'Boutique Specialist',
    duration: '4 Months',
    students: '120+',
    rating: 4.8,
    description: 'Learn garment construction, pattern making, and boutique-style stitching from scratch with expert tailoring classes.',
    badge: '★ Professional'
  },
  {
    id: 'makeup',
    category: 'Beauty',
    img: makeupImg,
    title: 'Makeup Artistry',
    subtitle: 'Bridal & Grooming',
    duration: '2 Months',
    students: '200+',
    rating: 5.0,
    description: 'Professional makeup artistry in Chidambaram covering everyday glam to heavy bridal looks and hair styling.',
    badge: '★ Expert Rated'
  },
  {
    id: 'beautician',
    category: 'Beauty',
    emoji: '💄',
    title: 'Professional Beautician',
    subtitle: 'Full Salon Mastery',
    duration: '3 Months',
    students: '90+',
    rating: 4.9,
    description: 'A comprehensive diploma covering skin care, hair styling, facials, and complete salon management techniques.',
    badge: '★ Career Focus'
  },
  {
    id: 'mehandi',
    category: 'Beauty',
    emoji: '🌿',
    title: 'Mehandi Artistry',
    subtitle: 'Traditional & Arabic Art',
    duration: '1 Month',
    students: '110+',
    rating: 4.8,
    description: 'Master the art of Mehandi designing, from basic patterns to complex bridal henna and mythological designs.',
    badge: '★ Artistic'
  },
  {
    id: 'saree-art',
    category: 'Saree Art',
    emoji: '👘',
    title: 'Saree Pre-pleating & Draping',
    subtitle: 'Professional Stylist',
    duration: '15 Days',
    students: '75+',
    rating: 5.0,
    description: 'Learn the high-demand skills of saree pre-pleating, box folding, and professional draping for events and weddings.',
    badge: '★ Hot Choice'
  },
  {
    id: 'tassels',
    category: 'Saree Art',
    emoji: '🧵',
    title: 'Saree Tassels & Kuchu',
    subtitle: 'Artisan Bead Work',
    duration: '15 Days',
    students: '60+',
    rating: 4.7,
    description: 'Exquisite saree tassel designs, crochet kuchu, and designer bead work to enhance the beauty of any saree.',
    badge: '★ Creative'
  },
  {
    id: 'crafts',
    category: 'Crafts',
    emoji: '🧶',
    title: 'Brooches & 3D Art',
    subtitle: 'Handmade Jewelry',
    duration: '1 Month',
    students: '180+',
    rating: 4.7,
    description: 'Learn to create stunning 3D brooches, silk thread jewelry, and handmade decorative items for festive occasions.',
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
          "name": "Glorious Art Academy",
          "sameAs": "https://gloriousartacademy.com"
        }
      }
    }))
  }

  return (
    <PageWrapper>
      <SEO 
        title="Professional Fashion Courses | Aari, Tailoring & Makeup in Chidambaram" 
        description="Browse our master catalog of fashion arts. From Aari embroidery to bridal makeup, get certified by Chidambaram's top-rated academy with 100% placement support."
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
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`whitespace-nowrap px-8 py-3 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest transition-all ${
                     activeCategory === cat 
                     ? 'bg-slate-900 text-white shadow-xl' 
                     : 'bg-white text-slate-500 hover:bg-rose-50 border border-slate-100'
                   }`}
                 >
                   {cat}
                 </button>
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
                         <img src={c.img} alt={`Professional ${c.title} course at Glorious Art Academy Chidambaram`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0" loading="lazy" decoding="async" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-7xl bg-white">{c.emoji}</div>
                       )}
                       <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-extrabold uppercase tracking-widest text-slate-900">
                          {c.badge}
                       </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full sm:w-[55%] p-8 lg:p-10 flex flex-col justify-between items-start bg-white">
                      <div className="w-full">
                        <span className="text-rose-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">{c.category} Course</span>
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{c.title}</h2>
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

                      <Link 
                        to={`/course/${c.id}`}
                        className="btn-premium btn-gradient w-full py-4 text-[10px] uppercase tracking-widest text-center"
                      >
                        Explore Syllabus <ArrowRight size={16} />
                      </Link>
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
