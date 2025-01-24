// Componente de carga reutilizable
export function Loading({ className = "h-[400px]" }: { className?: string }) {
  return <div className={`${className} bg-[#1C1C1C] rounded-lg animate-pulse`} />
}

