import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post {
  id: number,
  title: string,
  body: string
}

interface DataBlog {
  dataBlog: Post[]
}

export default function BlogPage(props: DataBlog) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
