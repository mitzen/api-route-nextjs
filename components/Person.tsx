import Link from 'next/link'
import { Person } from '../interfaces'
import styles from '../styles/index.module.css'

type PersonProps = {
  person: Person
}

export default function PersonComponent({ person }: PersonProps) {
  return (
    <li className={styles.example}>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        {person.name}
      </Link>
    </li>
  )
}
