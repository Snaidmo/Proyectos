import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
   // const format = (userName) => `@${userName}`
    return(
        <section className='App'>
        
          <TwitterFollowCard
            userName= "Snaidmo"  name= "snaider morillo"/>
          <TwitterFollowCard
            userName= "Teodoro"  name= "julio apaza"/>
        <TwitterFollowCard
          userName= "Auronplay"  name= "Samuel de Luque"/>
  </section>
      
    )
e
