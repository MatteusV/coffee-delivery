import Image from 'next/image'

import { Advantage } from '@/app/components/advantage'
import { CardCoffee } from '@/app/components/cardCoffee'
import coffee from '@/assets/coffee.png'

import { getProducts } from './api/getProducts'

export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <section className="flex justify-between 2xl:justify-around items-center w-full py-[5.87rem] px-40 bg-background bg-[url('../assets/background.png')] bg-cover bg-no-repeat">
        <div>
          <h1 className="text-base-title text-5xl font-baloo2 font-extrabold leading-[130%]">
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p className="text-base-subtitle text-xl leading-[130%] mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </p>

          <div className="grid grid-cols-2 gap-4 mt-16">
            <Advantage icon="cart" text="Compra simples e segura" key="cart" />
            <Advantage
              icon="box"
              text="Embalagem mantém o café intacto"
              key="box"
            />
            <Advantage
              icon="timer"
              text="Entrega rápida e rastreada"
              key="timer"
            />
            <Advantage
              icon="cup"
              text="O café chega fresquinho até você"
              key="cup"
            />
          </div>
        </div>
        <div>
          <Image src={coffee} alt="" />
        </div>
      </section>
      <main className="py-8 max-sm:px-1 px-40 bg-background w-screen">
        <h1 className="font-baloo2 text-[2rem] leading-[130%] font-extrabold text-base-subtitle">
          Nossos cafés
        </h1>

        <div className="mt-[3.37rem] grid place-items-center max-[528px]:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 gap-8 w-full">
          {products.map((product) => (
            <CardCoffee
              id={product.id}
              price={product.price}
              title={product.name}
              subtitle={product.description as string}
              image={product.imageUrl}
              key={product.id}
            />
          ))}
        </div>
      </main>
    </>
  )
}
