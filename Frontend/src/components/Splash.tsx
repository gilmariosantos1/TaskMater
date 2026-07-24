import React, { useEffect, useState } from 'react';
import './Splash.css';

interface SplashProps {
  aoConcluir?: () => void;
}

const Splash: React.FC<SplashProps> = ({ aoConcluir }) => {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgresso((p) => {
        if (p >= 100) {
          clearInterval(timer);
          if (aoConcluir) aoConcluir();
          return 100;
        }
        return p + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [aoConcluir]);

  return (
    <div className="splash">
      <div className="topo">
        <h1>Task<span>Master</span></h1>
        <p><span>Organize</span> suas tarefas.</p>
        <p>Alcance seus <span>objetivos.</span></p>
      </div>

      <div className="icone">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 8 L86 28 L86 72 L50 92 L14 72 L14 28 Z" stroke="#007bff" strokeWidth="7" strokeLinejoin="round"/>
          <path d="M50 50 L86 28 M50 50 L14 28 M50 50 L50 92" stroke="#007bff" strokeWidth="7" strokeLinejoin="round"/>
          <path d="M32 38 L50 48 L68 38" stroke="#007bff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 55 L32 70 M68 55 L68 70" stroke="#007bff" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="rodape">
        <div className="barra">
          <div className="enchimento" style={{ width: `${progresso}%` }} />
        </div>
        <span>carregando...</span>
      </div>
    </div>
  );
};

export default Splash;
