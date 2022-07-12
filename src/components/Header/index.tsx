import Image from 'next/image';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <picture>
                    <img src="/images/logo.svg" alt="IG.News"/>
                </picture>
               
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    )
}