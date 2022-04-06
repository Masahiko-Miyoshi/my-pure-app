import styles from '../styles/Home.module.css'
import Link from 'next/link'

const PostLink = props => (  
      <Link href={`${props.url}`} >
        {/* <a target="_blank" className={styles.card} >  */}
        <a className={styles.card} > 
        <h2>{props.title}&rarr;</h2> 
        <p>{props.infomation}</p>
        </a>
      </Link>     
  )

  export default PostLink