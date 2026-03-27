"use client";

import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import MagicRings from '@/components/ui/MagicRings';
import Button from '@/components/ui/Button';

export default function HireCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const t = useTranslations('HireCategoryPages');
  const tServices = useTranslations('ServicesPage.hiring.developer');

  const validSlugs = [
    'hire-mobile-app-development',
    'hire-frontend-development',
    'hire-ui-ux-design',
    'hire-devops-engineering'
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const skillItems = t.raw(`${slug}.flowingMenu`) as Array<{ text: string; details: string; image: string }>;

  return (
    <div className="relative w-full flex flex-col select-none overflow-x-hidden pt-20">
      
      {/* Section 1: Hero with MagicRings (The "vòng tròn cũ" from About Us) */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 -z-10 opacity-60">
             <MagicRings
                color="#fc42ff"
                colorTwo="#42fcff"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
                rotation={0}
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={0.2}
                hoverScale={1.2}
                parallax={0.05}
                clickBurst={false}
              />
          </div>
          
          <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center">
              <div className="max-w-4xl w-full flex flex-col items-center text-center">
                  <div className="space-y-4 flex flex-col items-center">
                      <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
                      >
                          <Sparkles className="w-4 h-4 text-primary" />
                          <span className="section-subtitle">{t(slug ? `${slug}.subtitle` : 'subtitle')}</span>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                      >
                          <h1 className="section-title text-center max-w-none!">
                              {t.rich(slug ? `${slug}.title` : 'title', {
                                  highlight: (chunks) => <span className="text-primary">{chunks}</span>
                              })}
                          </h1>
                      </motion.div>
                  </div>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="section-desc text-center max-w-3xl font-medium mt-8 mx-auto"
                  >
                      {t(slug ? `${slug}.description` : 'description')}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-10 flex justify-center"
                  >
                      <Button 
                        variant="body" 
                        onClick={() => router.push('/contact')}
                      >
                          {tServices('hireButton')}
                      </Button>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Section 2: Skills Card Grid */}
      <section className="relative w-full z-10 bg-transparent py-24">
        <div className="container mx-auto max-w-7xl px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
               <h2 className="section-subtitle mb-4 uppercase tracking-[0.3em]">
                  {t('coreCompetencies')}
               </h2>
               <div className="h-1 w-20 bg-primary/40 mx-auto rounded-full" />
             </motion.div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillItems.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 relative overflow-hidden backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center h-full"
                    >
                        {/* Interactive Spotlight Effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center h-full">
                            <div className="w-24 h-24 mb-8 rounded-4xl overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all duration-500 shadow-2xl bg-white/5 flex items-center justify-center p-1">
                                <img 
                                  src={skill.image} 
                                  alt={skill.text} 
                                  className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-1000 group-hover:scale-110" 
                                />
                            </div>
                            
                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                {skill.text}
                            </h3>
                            
                            <p className="text-zinc-400 group-hover:text-zinc-200 transition-all duration-500 leading-relaxed font-medium">
                                {skill.details}
                            </p>

                            {/* Decorative Line on Hover */}
                            <div className="mt-8 w-0 h-[2px] bg-primary group-hover:w-12 transition-all duration-500 rounded-full" />
                        </div>
                    </motion.div>
                ))}
             </div>
        </div>
      </section>
    </div>
  );
}
