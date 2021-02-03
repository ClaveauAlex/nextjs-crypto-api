import Head from 'next/head'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar type="text" placeholder="Search"/>
    </div>
  )
}
