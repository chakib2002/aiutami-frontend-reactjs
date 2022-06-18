import { Dashboard } from '../components/Dashboard_components/Dashboard'
import { NavBar } from '../components/Home_components/Navbar'

export const DashboardPage = () => {

 

  return (
    <>
    <NavBar isAuthData ={true}/>
    <Dashboard />
  </>
  )
}
