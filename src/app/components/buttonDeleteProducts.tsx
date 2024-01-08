'use client'

import { deleteProductsToCart } from '../api/deleteProductsToCart'
import { Button } from './ui/button'
import { DrawerClose } from './ui/drawer'

interface ButtonDeleteProductsProps {
  hidden: boolean
}

export function ButtonDeleteProducts({ hidden }: ButtonDeleteProductsProps) {
  function handleDeleteProducts() {
    deleteProductsToCart()
  }
  return (
    <DrawerClose onClick={handleDeleteProducts}>
      <Button
        variant="secondary"
        data-hidden={hidden}
        className="data-[hidden=true]:hidden"
      >
        Remover produtos
      </Button>
    </DrawerClose>
  )
}
