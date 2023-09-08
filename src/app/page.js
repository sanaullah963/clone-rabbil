import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Recomended from '@/components/Recomended'
import Whyus from '@/components/Whyus'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <Recomended/>
      <Whyus/>
    </main>
  )
}
