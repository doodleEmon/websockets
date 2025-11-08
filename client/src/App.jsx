import { io } from 'socket.io-client'
import './App.css'
import { useEffect } from 'react';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const socket = io("http://localhost:3000");
  const [scores, setScores] = useState({});
  const [allScores, setAllScores] = useState([]);

  function connection() {
    socket.on("connection", (socket) => { })

    socket.on("playerScores", (playerScores) => {
      setAllScores(playerScores);
    })

    return () => {
      socket.disconnect();
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    const currentObj = { [name]: value };
    setScores((pre) => ({ ...pre, ...currentObj }));
  }

  const sendScores = () => {
    socket.emit("scores", scores);
  }

  useEffect(() => {
    connection();
  }, [])

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold text-center'>Multiplayer Game Dashboard</h1>
      <div className='flex flex-col items-center justify-center mt-5 gap-y-4'>
        <Input className="border-2 rounded-md border-red-400 focus:outline-red-400 px-3 py-2 w-sm text-gray-700" name="name" handleSubmit={handleSubmit} placeholder="Enter your name..." />
        <Input className="border-2 rounded-md border-red-400 focus:outline-red-400 px-3 py-2 w-sm text-gray-700" name="score" handleSubmit={handleSubmit} placeholder="Enter your score..." />
        <button className='bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:outline-2 hover:outline-green-400' onClick={sendScores}>Publish Scores</button>
      </div>
      <div className='mt-5 flex justify-center'>
        {
          allScores.length > 0 && <table className='border w-md'>
            <thead className='border'>
              <tr>
                <th className='border border-black p-2 text-red-400'>Name</th>
                <th className='border border-black p-2 text-red-400'>Score</th>
              </tr>
            </thead>
            <tbody>
              {
                allScores.map((data, index) => (
                  <tr key={index}>
                    <td className='border p-2'>{data.name}</td>
                    <td className='border p-2'>{data.score}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default App;
