import Head from 'next/head'
import TestByMM from './aaa'

export default function Home(){
  return(
    
    <div>
      <Head>
        <title>ぼくのサイト</title>
      </Head>
      
        <article>
          <h1>すきなどうぶつ</h1>
          <ul>
            <li>ねこ</li>
            <li>いぬ</li>
            <li>とり</li>
          </ul>
        </article>

        <TestByMM />
     
      </div>
      
  )
}

