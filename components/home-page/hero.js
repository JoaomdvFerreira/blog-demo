import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero({}) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/john.jpeg"
          alt="An image showing john"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m John</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
