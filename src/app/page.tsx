import styles from './index.module.css';

export default function IndexPage() {
  return (
    <div className={styles.container}>{process.env.NEXT_PUBLIC_MESSAGE}</div>
  );
}
