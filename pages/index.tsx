import useSWR from 'swr'
import PersonComponent from '../components/Person'
import type { Person } from '../interfaces'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<Person[]>('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/kittens'>Kittens</Link>
      </nav>
      <h1>Home</h1>
    </div>
  )
}
