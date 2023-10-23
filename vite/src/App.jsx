import './App.css'
import { UserInfoFC } from './components/UserInfoFC/UserInfoFC'

const usersData = [{
  id: 1,
  name: "ivan",
  status: "React",
  avatar: "https://dummyimage.com/200x100",
},
{
  id: 2,
  name: "Max",
  status: "React",
  avatar: "https://dummyimage.com/200x100",
},
{
  id: 3,
  name: "Anton",
  status: "React",
  avatar: "https://dummyimage.com/200x100",
},
]

function App() {

  return (
    <>
      {usersData.map(user => <UserInfoFC key={user.id} user={user}/>)}
    </>
  )
}

export default App
