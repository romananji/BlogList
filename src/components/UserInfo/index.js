// Write your JS code here
import './index.css'

const UserInfo = props => (
  <div className="userprofile-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="userprofile-image"
    />
    <h1 className="userprofile-heading">Wade Warren</h1>
    <p className="userprofile-about">Software developer at UK</p>
  </div>
)

export default UserInfo
