import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Clock, Users, Star, CheckCircle2, 
  MessageCircle, BookOpen, Award, Sparkles, ArrowRight 
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const courses = {
  'aari': {
    title: 'Aari Embroidery',
    subtitle: 'From Basic needlework to professional bridal blouse designing',
    description: 'Master the traditional art of Aari embroidery. This course covers everything from basic chain stitches to complex heavy bridal work using zari, beads, and stones.',
    duration: '3 Months',
    students: '150+',
    rating: 4.9,
    price: 'Admission Open',
    category: 'Embroidery',
    bgGradient: 'from-rose-600 to-purple-700',
    syllabus: [
      { title: 'Fundamentals', items: ['Needle handling', 'Chain stitch basics', 'Zig zag & fill'] },
      { title: 'Professional', items: ['Zardosi techniques', 'Sequins & Stone work', 'Cut work'] },
      { title: 'Bridal Mastery', items: ['Blouse marking', 'Neckline designs', 'Heavy sleeves'] }
    ],
    materials: ['Aari Stand', 'Traditional Hook', 'Silk Thread & Zari', 'Stone kit'],
    benefits: ['Govt Certificate', 'Business Guidance', 'Job Assistance']
  },
  'tailoring': {
    title: 'Tailoring & Fashion',
    subtitle: 'Professional Garment Construction',
    description: 'Learn professional tailoring from measurements to finished garments. Transform your passion into a boutique business.',
    duration: '4 Months',
    students: '120+',
    rating: 4.8,
    price: 'Admission Open',
    category: 'Fashion',
    bgGradient: 'from-purple-600 to-violet-800',
    syllabus: [
      { title: 'Basics', items: ['Machine handling', 'Basic seams', 'Hand finishing'] },
      { title: 'Blouse Specialist', items: ['Normal & cross-cut', 'Katori & Princess cut'] },
      { title: 'Ethnic Wear', items: ['Salwar suits', 'Anarkali construction', 'Kidswear'] }
    ],
    materials: ['Machine kit', 'Pattern paper', 'Tracing wheel', 'Fabric shears'],
    benefits: ['Hands-on training', 'Boutique tips', 'Flexible timings']
  },
  'makeup': {
    title: 'Makeup Artistry',
    subtitle: 'Bridal & Special Events',
    description: 'Master the art of professional makeup. From skin prep to high-definition bridal looks, become a certified makeup artist.',
    duration: '2 Months',
    students: '200+',
    rating: 5.0,
    price: 'Admission Open',
    category: 'Beauty',
    bgGradient: 'from-amber-500 to-amber-600',
    syllabus: [
      { title: 'Skin & Theory', items: ['Skin types', 'Color theory', 'Prep routine'] },
      { title: 'Eye Mastery', items: ['Cut crease', 'Smokey eyes', 'Lash app'] },
      { title: 'Bridal Look', items: ['Traditional Bridal', 'Reception glam'] }
    ],
    materials: ['Brush set', 'Professional Palette', 'Prep kit'],
    benefits: ['Live model practice', 'Kit building advice', 'Certification']
  },
  'crafts': {
    title: 'Creative Crafts',
    subtitle: 'Artisan Handicrafts',
    description: 'A unique course on silk thread crafts, varusa plates, and handcrafted items for special occasions.',
    duration: '1 Month',
    students: '180+',
    rating: 4.7,
    price: 'Admission Open',
    category: 'Crafts',
    bgGradient: 'from-teal-500 to-teal-600',
    syllabus: [
      { title: 'Silk Threads', items: ['Tassel making', 'Stone tassels', 'Jewelry basics'] },
      { title: 'Pooja Plates', items: ['Varusa plate art', 'Pooja plate decoration'] },
      { title: 'Business', items: ['Resale & Pricing', 'Marketing crafts'] }
    ],
    materials: ['Bead kit', 'Adhesives', 'Decorative base'],
    benefits: ['Home business ideal', 'Creative fulfillment', 'Certificate']
  }
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses[id]

  if (!course) return <div className="p-20 text-center">Course Not Found</div>

  return (
    <PageWrapper>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className={`pt-48 pb-16 lg:pt-64 lg:pb-32 px-5 sm:px-8 bg-linear-to-br ${course.bgGradient} text-white`}>
         <div className="container-custom">
            <Link to="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors font-bold text-sm uppercase tracking-widest">
               <ArrowLeft size={18} /> All Courses
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl text-[10px] sm:text-xs font-extrabold uppercase tracking-widest border border-white/20">{course.category} Certification</span>
                  <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight">{course.title}</h1>
                  <p className="text-white/80 font-medium text-lg leading-relaxed max-w-xl">{course.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-8 py-8 border-y border-white/10">
                     <div className="flex flex-col gap-1">
                        <Clock size={20} className="text-white/40 mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Duration</span>
                        <span className="font-bold">{course.duration}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <Users size={20} className="text-white/40 mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Students</span>
                        <span className="font-bold">{course.students} Trained</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <Star size={20} className="text-white/40 mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Rating</span>
                        <span className="font-bold">{course.rating}/5.0</span>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                     <a href="https://wa.me/918072769642" className="btn-premium btn-outline w-full sm:w-auto px-10 py-5 bg-white border-none shadow-2xl text-center">
                        Enroll via WhatsApp <MessageCircle size={22} className="text-green-500" />
                     </a>
                     <div className="px-8 py-5 rounded-3xl border border-white/30 bg-white/5 backdrop-blur-sm flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Tuition Fee</span>
                        <span className="font-bold text-lg">{course.price}</span>
                     </div>
                  </div>
               </div>

               <div className="hidden lg:block">
                  <div className="glass-card bg-white/10 border-white/20 rounded-[4rem] aspect-square flex items-center justify-center p-20">
                     <div className="text-center space-y-4">
                        <Sparkles size={80} className="text-white/20 mx-auto" strokeWidth={1} />
                        <p className="font-vibes text-4xl text-white/40">Premium Training</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Content ─────────────────────────────────────── */}
      <section className="section-padding px-5 sm:px-8 bg-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16">
               
               {/* Left: Syllabus */}
               <div className="lg:col-span-7 space-y-16">
                  <div className="space-y-6">
                     <h2 className="font-serif text-3xl font-bold text-slate-900 flex items-center gap-4">
                        <BookOpen className="text-rose-500" /> Course Overview
                     </h2>
                     <p className="text-slate-600 font-medium leading-relaxed text-lg">{course.description}</p>
                  </div>

                  <div className="space-y-8">
                     <h3 className="text-xl font-bold text-slate-900 font-serif">Curriculum Breakdown</h3>
                     <div className="grid gap-6">
                        {course.syllabus.map((m, i) => (
                           <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                              <div className="flex items-center gap-4 mb-6">
                                 <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">{i+1}</span>
                                 <h4 className="font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">{m.title}</h4>
                              </div>
                              <ul className="grid sm:grid-cols-2 gap-4">
                                 {m.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                                       <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right: Sidebar */}
               <div className="lg:col-span-5 space-y-10">
                  <div className="p-8 md:p-12 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                     <Award className="text-rose-500 mb-6" size={48} />
                     <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Career Benefits</h3>
                     <div className="space-y-4 w-full">
                        {course.benefits.map((b, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                              <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                              <span className="font-bold text-slate-700 text-sm">{b}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="p-8 md:p-12 rounded-[3rem] bg-linear-to-tr from-rose-50 to-purple-50 border border-rose-100/50">
                     <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8">Included Materials</h3>
                     <div className="flex flex-wrap gap-2">
                        {course.materials.map((m, i) => (
                           <span key={i} className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-rose-500 border border-rose-100 shadow-sm">{m}</span>
                        ))}
                     </div>
                     <p className="text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-widest text-center">Complete master-kit provided at enrollment</p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* final banner */}
      <section className="py-24 px-5 sm:px-8">
         <div className="container-custom">
            <div className="bg-slate-900 p-10 sm:p-20 rounded-[4rem] text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-linear-to-br from-rose-500 to-amber-500 translate-y-1/2 blur-[100px]" />
               <div className="relative z-10">
                  <div className="mb-6">
                    <span className="text-rose-400 font-extrabold uppercase tracking-widest text-xs">Summer Special Live</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-6xl font-bold text-white mb-8">Transform From <span className="italic text-rose-400">Hobbyist</span> <br /> to <span className="text-violet-400">Professional</span></h2>
                  <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-medium">Join now and get <span className="text-white font-bold">30 Days FREE</span> advanced training. Limited seats for June batch!</p>
                  <a href="https://wa.me/918072769642" className="btn-premium btn-gradient w-full sm:w-auto px-16 text-center">
                    Enroll with Free Offer <ArrowRight size={22} />
                  </a>
               </div>
            </div>
         </div>
      </section>
    </PageWrapper>
  )
}
