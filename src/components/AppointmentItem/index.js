// Write your code here
import './index.css'
const AppointmentItem = props => {
  const {eachAppointment} = props

  return (
    <li className="list-Container">
      <h1>eachAppointment.title</h1>
      <p>eachAppointment.Date</p>
    </li>
  )
}
export default AppointmentItem
