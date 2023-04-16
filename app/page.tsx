import Link from 'next/link';
import styles from './page.module.css';
export default function Home (){
  return (
  <div className={styles.container}>
  <h1 className={styles.greetings}>Hey there,</h1>
  <nav>
      <Link href="/takenote" className={styles.applink}>Click Me!</Link>
  </nav>
  </div>
  );
}