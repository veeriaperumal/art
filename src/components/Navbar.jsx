import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        {/* ── Urgency Ribbon (Black - Top) ── */}
        <div className="hidden sm:block bg-slate-900 text-white py-1.5 overflow-hidden whitespace-nowrap border-b border-white/5">
          <div className="flex animate-marquee-reverse gap-12 items-center">
            {[1,2,3,4,5,6].map(i => (
              <span key={i} className="text-[10px] font-extrabold uppercase tracking-[.2em] flex items-center gap-2">
                <Sparkles size={12} className="text-rose-500" /> Next Batch Starts: June 1st, 2026 — Limited Seats Available! — Enroll Now
              </span>
            ))}
          </div>
        </div>

        {/* ── Summer Special Urgency Banner (Rose-Violet) ────── */}
        <div className="bg-linear-to-r from-rose-600 to-purple-700 text-white py-1 md:py-1.5 overflow-hidden whitespace-nowrap border-b border-white/10">
          <div className="flex animate-marquee gap-8 items-center">
            {[1,2,3,4,5,6].map(i => (
              <span key={i} className="text-[9px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                🌞 Summer Special: Join any Professional Course and get 30 Days FREE! <Sparkles size={12} className="text-yellow-300" /> 
              </span>
            ))}
          </div>
        </div>

        {/* ── Main Navigation ── */}
        <div className={`transition-all duration-500 px-3 sm:px-8 ${scrolled ? 'pt-1.5' : 'pt-2 md:pt-4'}`}>
          <div className={`mx-auto max-w-7xl px-4 md:px-6 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-500 glass-effect shadow-premium ${scrolled ? 'py-1.5' : 'py-2 md:py-3'
            }`}>
          <div className="flex items-center justify-between h-12 md:h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 group">
              <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center p-1 shadow-sm group-hover:rotate-3 transition-transform duration-300">
                <img src="/logo.png" alt="Glorious Art Academy" className="w-full h-full object-contain" />
              </div>
              <div className="hidden xs:block sm:block">
                <p className="font-serif text-sm md:text-xl font-extrabold leading-none text-slate-900 group-hover:text-rose-600 transition-colors">Glorious Art</p>
                <p className="text-[8px] md:text-[10px] text-rose-500 tracking-[0.2em] font-extrabold uppercase mt-0.5 md:mt-1">Academy</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-[1.5rem] border border-slate-200/50">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-5 py-2.5 text-xs font-bold font-sans uppercase tracking-[0.05em] rounded-[1.25rem] transition-all duration-300 ${isActive
                      ? 'bg-white text-rose-600 shadow-sm'
                      : 'text-slate-500 hover:text-rose-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="btn-premium btn-gradient py-3.5 px-8 text-xs uppercase tracking-widest"
              >
                Enroll Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-900 hover:text-rose-600 transition-all shadow-sm active:scale-90"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open
                  ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} /></motion.div>
                  : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu size={22} /></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden bg-slate-900/40 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white border-l border-slate-100 p-8 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full gap-10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center p-1 shadow-sm">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <p className="font-serif text-xl font-extrabold text-slate-900">Glorious Art</p>
                  </Link>
                  <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-rose-600 mb-2 px-4">Navigation</p>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all ${isActive
                            ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
                            : 'text-slate-600 hover:bg-rose-50 hover:text-rose-600'
                          }`
                        }
                      >
                        {link.label}
                        <ArrowRight size={20} className="opacity-40" />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-6">
                  <Link
                    to="/contact"
                    className="btn-premium btn-gradient w-full py-5 text-base"
                  >
                    Start Your Journey <Sparkles size={18} />
                  </Link>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© Chidambaram Academy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
