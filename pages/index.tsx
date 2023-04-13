import useSWR from 'swr'
import PersonComponent from '../components/Person'
import type { Person } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<Person[]>('/api/people', fetcher)

  console.log('mydata', data)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <ul>
      {data.map((p) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
  )
}

// export async function getStaticProps(context) {
//   console.log('getStaticProps')
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
// export async function getStaticPaths() {
//     return {
//     paths: [],
//     fallback: '', // can also be true or 'blocking'
//   }
// }
