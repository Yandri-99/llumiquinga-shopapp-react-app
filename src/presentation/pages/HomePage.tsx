import { Button } from '@/presentation/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-xl rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          MoviCore
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Bienvenido a ShopApp React
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Arquitectura hexagonal, Tailwind y shadcn/ui listos para continuar con los módulos.
        </p>
        <div className="mt-6 flex justify-center">
          <Button>Continuar</Button>
        </div>
      </div>
    </div>
  )
}
