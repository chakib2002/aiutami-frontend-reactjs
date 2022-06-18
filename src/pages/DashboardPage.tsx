import { Dashboard } from '../components/Dashboard_components/Dashboard'
import { NavBar } from '../components/Home_components/Navbar'

export const DashboardPage = ({
    newNotificationNumber,
    setNewNotificationNumber} : {
    newNotificationNumber : number ,
    setNewNotificationNumber :Function}) => {

 

  return (
    <>
    <NavBar isAuthData ={true} newNotificationNumber={newNotificationNumber} setNewNotificationNumber={setNewNotificationNumber}/>
    <Dashboard />
  </>
  )
}
