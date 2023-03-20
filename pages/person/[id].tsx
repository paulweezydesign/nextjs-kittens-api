import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import type { Person, ResponseError } from '../../interfaces';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function PersonPage() {
  const { query } = useRouter();
  const { data, error, isLoading, isValidating } = useSWR<
    Person,
    ResponseError
  >(() => (query.id ? `/api/people/${query.id}` : null), fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <img src={data.image2} alt="kitten pic" />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <Link href="/">Back</Link>
    </div>
  );
}
