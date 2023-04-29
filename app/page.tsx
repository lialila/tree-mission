import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mission}>
        <h2>Mission</h2>
        <h1>This is the headline</h1>
        <p>
          Our mission? To make the protection of our natural resources more
          valuable than its destruction. To shape our future for the better by
          valuing its preservation. Together.
        </p>
        <p>
          That's why our diverse team found a new technology venture that
          unlocks the carbon capture potential of out forests. How? By bringing
          together forest owners, carbon offsetters and public authorities.
        </p>
        <button>Learn more about our mission</button>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <Image
              src="/Lightbulb.svg"
              width="30"
              height="30"
              alt="Lightbulb"
            />
          </div>
          <div className={styles.text}>
            <h3>Small Headline</h3>
            <p>
              Forest owners have accesss to expertise and inventory data needed
              to make smart decisions about their forest assets.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <Image src="/Coin.svg" width="30" height="30" alt="Coin" />
          </div>
          <div className={styles.text}>
            <h3>Small Headline</h3>
            <p>
              Forest owners know how to tap into the carbon market and generate
              revenit from carbon in their forests.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            <Image src="/Arrows.svg" width="30" height="30" alt="Arrows" />
          </div>
          <div className={styles.text}>
            <h3>Small Headline</h3>
            <p>
              Forest owners and carbon buyers can easily buy and sell European
              carbon certificates on one platform.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
