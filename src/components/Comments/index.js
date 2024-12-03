import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {}
  render() {
    return (
      <div className="app-container">
        <div classname="input-container">
          <h1 className="heading">Comments</h1>
          <p className="from-description">
            Say Something about 4.0 technologies
          </p>
          <div className="input-heading">
            <form className="from">
              <input
                type="text"
                placeholder="Your Name"
                className="input-style"
              />
              <textarea
                placeholder="Your Comment"
                className="textarea-style"
                row="6"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
