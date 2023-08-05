'use client';

import styles from '../../page.module.css';

import { NavbarNested } from '@/components/Navbar';
import Table from '@/components/Table';

export default function Home() {
    return (
        <main className={styles.main}>
            <NavbarNested></NavbarNested>
            <div className={`${styles.div} ${styles.hero}`}>
                <h1>Tickets</h1>
                <Table></Table>
            </div>
        </main>
    );
}
