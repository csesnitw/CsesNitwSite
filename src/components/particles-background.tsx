export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[hsl(222,47%,11%)]">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center ferrofluid orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] animate-[ferroMorph_8s_ease-in-out_infinite]">
        <div
          className="w-full h-full animate-[ferroDrift_14s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(ellipse at 40% 45%, rgba(0,255,65,0.22) 0%, rgba(0,200,50,0.10) 30%, rgba(0,255,65,0.04) 55%, transparent 80%)",
            borderRadius: "30% 70% 60% 40% / 60% 30% 70% 40%",
            filter: "blur(35px)",
          }}
        />
      </div>
    </div>
  );
}