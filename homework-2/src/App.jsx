import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  const users = [
    {id:2, name:"Стаc Мамаев", email:"test2@gmail.com"},
    {id:3, name:"Тимур Медиханов", email:"test3@gmail.com"},
    {id:4, name:"Бекзат Убниев", email:"test4@gmail.com"},
    {id:5, name:"Радмир Абраев", email:"test5@gmail.com"},
    {id:1, name:"Айдос Амангельды ", email:"test1@gmail.com"},
  ]

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Список моих крашей</h1>
        <div className="row g-4 justify-content-center">
          {users.map((user) => (
            <div className="col-auto" key={user.id}>
              <UserCard name={user.name} email={user.email}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
