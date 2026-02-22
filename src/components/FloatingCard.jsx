"use client";

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  position,
  variant = "default",
  avatar,
  name,
  message,
  reference,
  animationDelay = 0,
}) {
  if (variant === "portal") {
    return (
      <div
        className="absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg transition-[scale] duration-300 hover:scale-105 cursor-default animate-float-in"
        style={{
          backgroundColor: color,
          "--card-rotation": rotation,
          "--animation-delay": `${animationDelay}s`,
          ...position,
        }}
      >
        <div className="h-10 w-20 shrink-0 overflow-hidden rounded-full bg-gray-600">
          {avatar ? (
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-700 to-amber-900 text-xs font-bold text-white">
              {name?.charAt(0) || "J"}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">{name}</span>
          <span className="text-xs text-gray-500 max-w-[180px] truncate">{message}</span>
          <span className="text-xs font-medium text-indigo-700">{reference}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute flex items-center gap-3 rounded-full px-6 py-3.5 shadow-lg transition-[scale] duration-300 hover:scale-105 cursor-default animate-float-in"
      style={{
        backgroundColor: color,
        "--card-rotation": rotation,
        "--animation-delay": `${animationDelay}s`,
        ...position,
      }}
    >
      {Icon && <Icon className="h-5 w-5 text-white" strokeWidth={2} />}
      <span className="text-base font-semibold text-white whitespace-nowrap">{label}</span>
    </div>
  );
}
