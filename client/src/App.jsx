import { io } from 'socket.io-client'
import './App.css'
import { useEffect } from 'react';

function App() {
  const socket = io("http://localhost:3000");

  function connection() {
    socket.on("connection", (socket) => {
      console.log(socket);
    })
  }

  useEffect(() => {
    connection();
  }, [])

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold text-center'>Multiplayer Game Dashboard</h1>
    </div>
  )
}

export default App
