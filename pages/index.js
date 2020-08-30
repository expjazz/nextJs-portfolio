import Head from 'next/head'
import SideBar from '../components/SideBar/index'
export default function Home() {
 const sections = [
  {id: 'top', name: 'intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },

] 
  return (
    <>
      <SideBar sections={sections} />
    </>

    )
}
