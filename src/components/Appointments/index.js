// Write your code here
import './index.css'
import {Component} from 'react'
import {format} from 'date-fns'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
class Appointments extends Component {
  state = {title: '', Date: '', AppointmentList: []}
  changeTitle = event => {
    this.setState({title: event.target.value})
  }
  changeDate = event => {
    const newAppointment = format(
      new Date(event.target.value),
      'dd MMMM yyyy,EEEE',
    )
    this.setState({Date: newAppointment})
  }
  updateAppointment = event => {
    event.preventDefault()
    const {title, Date, AppointmentList} = this.state
    const Appointment = {
      title,
      Date,
      isLiked:false
    }
    this.setState(prevState => ({
      AppointmentList: [...AppointmentList, Appointment],
      title: ' ',
      Date: '',
    }))
  }

  render() {
    const {title, Date, AppointmentList} = this.state
    return (
      <div className="bg-container">
        <form className="my-form" onSubmit={this.updateAppointment}>
          <h1>Add Appointment</h1>
          <div className="display-container">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              placeholder="Title"
              onChange={this.changeTitle}
            />{' '}
            <br />
          </div>
          <div className="display-container">
            <label htmlFor="date" placeholder="dd/mm/yyyy">
              Date
            </label>
            <input type="date" id="date" />
          </div>
          <button type="submit" className="Add-button">
            Add
          </button>
        </form>
        <ul>
          {AppointmentList.map(eachItem => {
            ;<AppointmentItem key={eachItem.id} eachAppointment={eachItem} />
          })}
        </ul>
      </div>
    )
  }
}
export default Appointments
