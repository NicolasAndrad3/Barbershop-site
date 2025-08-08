import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen flex overflow-hidden bg-[#111827]">
      {/* COLUNA ESQUERDA (desktop intacto) */}
      <div className="w-1/2 flex flex-col justify-center px-6 sm:px-16 z-30 bg-[#111827]/90">
        <div className="mb-8 sm:mb-14 text-center relative">
          {/* Mobile: tamanho maior, mas controlado */}
          <h1 className="font-graffiti text-red-500 leading-none drop-shadow-[4px_4px_2px_rgba(0,0,0,0.7)] text-[15vw] sm:text-[200px]">
            Estilo
          </h1>

          {/* Subtítulo ajustado: mais para baixo no mobile e um pouco menor */}
          <h2
            className="
              absolute
              left-1/2 -translate-x-1/2 bottom-[-28px] text-[38px]
              sm:left-[48%] sm:translate-x-[-50%] sm:bottom-[-30px] sm:text-[70px]
              text-yellow-400 font-cursive drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]
            "
          >
            Barbershop
          </h2>
        </div>

        {/* Mobile: texto ligeiramente maior */}
        <p className="text-lg sm:text-lg text-red-300 max-w-[90%] sm:max-w-md mb-6 sm:mb-10 text-center mx-auto leading-relaxed">
          More than just a haircut — <span className="text-yellow-400 drop-shadow-[0_0_8px_#facc15]">Estilo</span> is identity, attitude, and tradition.
          <br />
          Welcome to the place where sharp looks meet sharp minds.
          <br />
          Timeless cuts. Modern edge.
        </p>

        <div className="flex justify-center">
          <a
            href="#calendar"
            className="px-8 py-2 sm:px-10 sm:py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Book now
          </a>
        </div>
      </div>

      {/* COLUNA DIREITA (imagem) — sem mudanças */}
      <div
        className="w-1/2 h-full relative overflow-hidden"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent z-10 pointer-events-none" />
        <img
          src="/banner.webp"
          alt="Business"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
