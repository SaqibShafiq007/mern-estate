import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className='max-w-5xl mx-auto px-6 py-16'>
      
      {/* Hero Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
        <div>
          <span className='text-xs font-medium tracking-widest uppercase text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block mb-5'>
            Est. 2024 — Lahore
          </span>
          <h1 className='text-5xl font-bold text-slate-800 leading-tight mb-5'>
            We find you a place to call{' '}
            <span className='text-green-700'>home</span>
          </h1>
          <p className='text-slate-500 text-base leading-relaxed font-light'>
            Saqib Estate is a leading real estate agency specializing in helping
            clients buy, sell, and rent properties in the most desirable
            neighborhoods across Pakistan.
          </p>
        </div>

        {/* Visual Card */}
        <div className='bg-green-50 rounded-2xl h-64 flex items-center justify-center'>
          <div className='text-center'>
            <svg className='w-20 h-20 mx-auto' viewBox="0 0 80 80" fill="none">
              <rect x="10" y="35" width="60" height="35" rx="3" fill="#1D9E75"/>
              <polygon points="40,8 5,38 75,38" fill="#0F6E56"/>
              <rect x="28" y="50" width="10" height="20" rx="1" fill="#E1F5EE"/>
              <rect x="42" y="50" width="10" height="14" rx="1" fill="#E1F5EE"/>
            </svg>
            <p className='text-green-700 font-semibold mt-3'>Saqib Estate</p>
            <p className='text-green-600 text-xs mt-1'>Your trusted property partner</p>
          </div>
        </div>
      </div>

      <hr className='border-slate-100 mb-12' />

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-12'>
        {[
          { title: 'Expert agents', desc: 'Our experienced team is dedicated to making your property journey smooth and stress-free.' },
          { title: 'Top rated service', desc: 'We believe buying or selling property should be an exciting and rewarding experience.' },
          { title: 'Market knowledge', desc: 'Deep understanding of local markets ensures you always get the best deal possible.' },
        ].map((card) => (
          <div key={card.title} className='bg-slate-50 rounded-xl p-5 border border-slate-100'>
            <div className='w-9 h-9 bg-green-100 rounded-lg mb-4' />
            <h3 className='text-sm font-medium text-slate-800 mb-2'>{card.title}</h3>
            <p className='text-sm text-slate-500 leading-relaxed font-light'>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className='border-l-4 border-green-500 pl-6 py-4 bg-slate-50 rounded-r-xl mb-12'>
        <p className='text-slate-700 italic text-lg leading-relaxed'>
          "Our mission is to help clients achieve their real estate goals through expert advice,
          personalized service, and a deep understanding of the local market."
        </p>
        <cite className='text-slate-400 text-xs mt-2 block not-italic'>— Saqib Shafiq, Founder</cite>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-3 gap-4 text-center'>
        {[
          { num: '500+', label: 'Properties sold' },
          { num: '98%', label: 'Client satisfaction' },
          { num: '5+', label: 'Years of experience' },
        ].map((stat) => (
          <div key={stat.label} className='py-5'>
            <span className='block text-4xl font-bold text-green-700'>{stat.num}</span>
            <span className='block text-xs text-slate-400 mt-1'>{stat.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}