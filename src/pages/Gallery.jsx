import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Plus } from 'lucide-react'
import SEO from '../components/SEO'

// Assets
import heroImg from '../assets/hero.png'
import aariImg from '../assets/aari.png'
import tailoringImg from '../assets/tailoring.png'
import makeupImg from '../assets/makeup.png'

const InstagramIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const items = [
  { img: aariImg, title: 'Bridal Embroidery', cat: 'Student Work', alt: 'Intricate Aari embroidery bridal work by student' },
  { img: tailoringImg, title: 'Designer Blouse', cat: 'Masterclass', alt: 'Professional designer blouse tailoring in Chidambaram' },
  { img: makeupImg, title: 'Bridal Glam', cat: 'Professional', alt: 'Bridal makeup artistry by expert student' },
  { img: heroImg, title: 'Fashion Design', cat: 'Aesthetics', alt: 'Advanced fashion designing student project' },
  { img: aariImg, title: 'Silk Work', cat: 'Embroidery', alt: 'Silk thread Aari embroidery detailing' },
  { img: tailoringImg, title: 'Boutique Collection', cat: 'Student Work', alt: 'Boutique collection displayed at Glorious Art' },
]

export default function Gallery() {
  return (
    <PageWrapper>
      <SEO 
        title="Student Work Portfolio | Art & Fashion Gallery Chidambaram" 
        description="Explore the stunning portfolio of our students. From professional Aari embroidery to designer tailoring, see why we are Chidambaram's #1 academy."
        url="/gallery"
      />

      <section className="pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-600 font-extrabold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block"
          >
            Visual Showcase
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
          >
            The Art <span className="gradient-text italic">Portfolio</span>
          </motion.h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
            A glimpse into the creativity and precision of our students and trainers in Chidambaram. Every piece tells a story of dedication and skill.
          </p>
        </div>
      </section>

      <section className="section-padding px-5 sm:px-8 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all h-[400px]"
                >
                   <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                   <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   
                   <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-rose-400 text-[10px] font-extrabold uppercase tracking-widest">{item.cat}</span>
                      <h3 className="text-white text-2xl font-serif font-bold mt-1">{item.title}</h3>
                   </div>
                   
                   <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-rose-600 shadow-xl">
                         <Plus size={24} />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Social Call */}
      <section className="py-24 px-5 sm:px-8 bg-slate-50">
        <div className="container-custom text-center">
           <div className="glass-card rounded-[3rem] p-10 md:p-20 border-rose-100 text-center shadow-premium bg-white">
              <div className="text-rose-500 mx-auto mb-8 flex justify-center">
                <InstagramIcon size={48} />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Stay Inspired</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Follow our daily artistic journeys and student progress on Instagram. Get your daily dose of creative energy.
              </p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium btn-gradient w-full sm:w-auto px-12 text-center"
              >
                Follow @gloriousartcreations <InstagramIcon size={18} />
              </a>
           </div>
        </div>
      </section>
    </PageWrapper>
  )
}
