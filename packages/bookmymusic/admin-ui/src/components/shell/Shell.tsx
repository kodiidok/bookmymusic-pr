import styles from '../../app/page.module.css';

import { NavbarNested } from '@/components/navbar/Navbar';
import { UserButton } from '../button/UserButton';

interface ShellProps {
    children: React.ReactElement;
}

export default function Shell({ children }: ShellProps) {
    return (
        <main className={styles.main}>
            <NavbarNested></NavbarNested>
            <div className={`${styles.hero} ${styles.div}`}>
                <div className={`${styles.userbtn} ${styles.div}`}>
                    <UserButton
                        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        name="Ann Hathaway"
                        role="superadmin"
                    />
                </div>
                <div>{children}</div>
            </div>
        </main>
    );
}
