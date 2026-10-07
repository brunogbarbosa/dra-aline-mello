'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Naturalidade', label: 'EM CADA ESCOLHA' },
  { value: '03594', label: 'REGISTRO CRBM' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Sofisticação e naturalidade">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">SOFISTICAÇÃO</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">NATURALIDADE</textPath>
      </text>
      <text className="campaign-seal-mark" x="90" y="104" textAnchor="middle" fill="currentColor">am.</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL · RIO DE JANEIRO</p>
        <h1 id="campaign-title" aria-label="Sua beleza. Sua essência.">
          <span className="campaign-title-line"><span>SUA BELEZA.</span></span>
          <span className="campaign-title-line"><span>SUA</span></span>
          <span className="campaign-title-line"><span>ESSÊNCIA.</span></span>
        </h1>
        <p className="campaign-subtitle">Rejuvenescimento com sofisticação<br/>e naturalidade.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Retrato da Dra. Aline Mello com a mão sob o queixo" fill preload sizes="(max-width:700px) 90vw, (max-width:1100px) 50vw, 45vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Seu rosto.<br/>Sua história.<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Naturalidade e registro profissional">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. ALINE MELLO</p><em>Biomédica Esteta · CRBM 03594</em></div></div>
    </div>
  </section>;
}
