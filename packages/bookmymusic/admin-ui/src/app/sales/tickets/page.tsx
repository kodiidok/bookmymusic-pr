'use client';

import styles from '../../page.module.css';

import Shell from '@/components/shell/Shell';
import Table from '@/components/table/Table';

export default function Home() {
    return (
        <Shell 
            children={
                <>
                    <h1>Tickets</h1>
                    <Table></Table>
                </>
            }
        />
    );
}
