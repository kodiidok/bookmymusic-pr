"use client"

import { AuthenticationForm } from '@/components/form/AuthenticationForm'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <AuthenticationForm></AuthenticationForm>
    </main>
  )
}
