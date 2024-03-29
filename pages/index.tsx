import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { Task } from '../types'
import Toggler from '../components/Toggler'

const initialData = [
  {
    id: '1',
    text: 'Buy groceries'
  },
  {
    id: '2',
    text: 'Make a React Tutorial'
  },
  {
    id: '3',
    text: 'Drink Water'
  },
]

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Home: NextPage = () => {
  const [data, setData] = useState(initialData)

  const handleDelete = (item: Task) => {
    setData(prevData => {
      const newData = prevData.filter(i => i.id !== item.id)
      return newData
    })
  }

  const handleSubmit = (text: string) => {
    const id = nanoid()
    setData(prevData =>
      [
        {
          id,
          text: text
        },
        ...prevData
      ]
    )
  }

  return (
    <>
      <Head>
        <title>Animated Task List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

      <header>
        <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 relative px-10 rounded-b-[150px] sm:rounded-b-full">
          <div className="absolute left-0 top-4">
            <Toggler />
          </div>
          <h1 className="absolute z-10 bottom-1/4 right-[18%] sm:right-1/4 text-xl text-slate-100 font-bold drop-shadow-xl">What&apos;s up, Mate!</h1>
          <div className="flex justify-center">
            <img src={`${prefix}/tasker.png`} width="300px" height="300px" alt="Task Bot Image" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center mt-8 px-2 sm:px-0">
        <TaskInput onSubmit={handleSubmit} />

        <TaskList data={data} onDelete={handleDelete} />
      </main>

    </>
  )
}

export default Home
