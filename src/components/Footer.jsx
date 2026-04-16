import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'

const InstagramIcon = ({ size = 20 }) => (
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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-100 px-5 sm:px-8 pt-24 pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">

          {/* Brand */}
          <div className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-1 shadow-sm">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-slate-900 leading-none">Glorious Art</p>
                <p className="text-[10px] text-rose-500 font-extrabold uppercase tracking-widest mt-1">Academy</p>
              </div>
            </Link>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
              Chidambaram's official academy affiliated to ICVE. Best in Everything - Empowering women through professional vocational training.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-all">
                  <InstagramIcon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Courses', 'About', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-600 font-bold text-sm hover:text-rose-600 flex items-center gap-2 group transition-colors">
                    {link} <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-slate-400 mb-8">Courses</h4>
            <ul className="space-y-4">
              {['Aari Embroidery', 'Tailoring Design', 'Makeup Artistry', 'Handmade Crafts'].map(link => (
                <li key={link}>
                  <Link to="/courses" className="text-slate-600 font-bold text-sm hover:text-rose-600 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-slate-400 mb-8">Visit Us</h4>
            <div className="flex gap-4 items-start">
              <MapPin size={20} className="text-rose-500 shrink-0" />
              <p className="text-slate-600 font-medium text-sm">8A/2, Umayal Street, (Near National Shopping), Chidambaram, Tamil Nadu</p>
            </div>
            <div className="flex gap-4 items-start">
              <Phone size={20} className="text-rose-500 shrink-0" />
              <p className="text-slate-600 font-medium text-sm">+91 80727 69642, 73395 33550</p>
            </div>
            <div className="flex gap-4 items-start">
              <Mail size={20} className="text-rose-500 shrink-0" />
              <p className="text-slate-600 font-medium text-sm">glorious.art@creations.com</p>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© {currentYear} Glorious Art Creations</p>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Made with ❤️ for Chidambaram</p>
        </div>
      </div>
    </footer>
  )
}
