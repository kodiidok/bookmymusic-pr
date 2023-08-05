"use client"

import styles from './page.module.css'

import { CardsCarousel } from '@/components/CardsCarousel'
import { NavbarNested } from '@/components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavbarNested></NavbarNested>
      <CardsCarousel></CardsCarousel>
    </main>
  )
}
