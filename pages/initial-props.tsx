import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

type Props = {
  data: {
    rows: Array<{
      id: Number;
      name: String;
      description: String;
      price: String;
    }>;
  };
};

const WithInitialProps: NextPage<Props> = ({ data }) => {
  const productObject = data.rows.map(product => (
    <ul>
      <li>
        {product.name} - {product.description} - {product.price}
      </li>
    </ul>
  ));

  return (
    <Layout>
      <h2>Here are the objects {productObject}</h2>
      <p>
        <Link href="/home">
          <a>Go back to Start Dude</a>
        </Link>
      </p>
      data:
      <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(data.rows)}</div>
    </Layout>
  );
};

WithInitialProps.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:8000/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      id: query.id
    })
  });

  const data = await response.json();
  console.log(data);

  return { data };
};

export default WithInitialProps;
