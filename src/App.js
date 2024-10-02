import {Component} from "react"
import axios from "axios"
import Header from "./components/Header"
import "./App.css"

class App extends Component{
  state = {name:'',userAddress:''}

  changeUsername = event => {
    this.setState({name:event.target.value})
  }

  changeAddress = event => {
    this.setState({userAddress:event.target.value})
  }
  onSubmitForm = async(event) => {
    const {name,userAddress} = this.state
    event.preventDefault()
    const userDetails = {name,userAddress}
    await axios.post("http://localhost:3004/register",{userDetails})
  }
  render(){
    const {name,userAddress} = this.state
    return (
      <div> 
      <Header/>
      <div className="main-container">
        <form onSubmit={this.onSubmitForm} action="POST" className="form-container">
         <h2 className="title">Let's Work<br/><span className="sub-title">Together</span></h2>
        <div>
          <p className="label-names">Name:</p>
          <input type="text" className="user-name" placeholder="Username" onChange={this.changeUsername} value={name} required/>
          </div>
          <div>
          <p className="label-names">Address:</p>
          <textarea cols={30} rows={5} placeholder="Type address here..." onChange={this.changeAddress} value={userAddress} className="user-name" required/>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default App