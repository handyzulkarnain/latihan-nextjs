import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profpic.png" width={200} height={200} alt="profpic" />
      <h1 className={styles['title-homepage']}>Welcome Handy!</h1>
    </Layout>
  );
}
