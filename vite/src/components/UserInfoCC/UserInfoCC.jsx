import { Component } from 'react'

// const user = {
//     name: "ivan",
//     status: "React",
//     avatar: "https://dummyimage.com/200x100",
// }

export class UserInfoCC extends Component {
  render() {
    const { user } = this.props;
    return (
        <article>
            <img src={user.avatar} alt={`${user.name} avatar`}/>
            <h2>{user.name}</h2>
            <p>{user.status}</p>
        </article>
    )
  }
}
