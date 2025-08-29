import styles from './index.module.css';

if (!process.env.SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in environment variables.');
}

export default function IndexPage() {
  return (
    <div className={styles.container}>{process.env.NEXT_PUBLIC_MESSAGE}</div>
  );
}
