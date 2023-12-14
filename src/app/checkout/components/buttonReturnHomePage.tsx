'use client'
export function ButtonReturnHomePage() {
  return (
    <button
      onClick={() => {
        window.location.replace('/')
      }}
      className="w-full rounded-md text-white font-roboto font-bold text-sm leading-[160%] uppercase bg-yellow py-3 px-2 mt-6 hover:bg-yellow-dark hover:transition-all"
    >
      Voltar ao catálogo
    </button>
  )
}
