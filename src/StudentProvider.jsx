import { useState } from 'react'
import StudentContext from './StudentContext'

const initialStudents = [
  { id: 1, name: 'Balu' },
  { id: 2, name: 'Avinash' },
  { id: 3, name: 'Vicky' },
  { id: 4, name: 'Priya' },
  { id: 5, name: 'Ravi' },
  { id: 6, name: 'Anjali' }
]

function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents)
  const [favoriteStudents, setFavoriteStudents] = useState([])

  function addStudent(name) {
    setStudents((currentStudents) => {
      const nextId = currentStudents.reduce(
        (highestId, student) => Math.max(highestId, student.id),
        0
      ) + 1

      return [...currentStudents, { id: nextId, name }]
    })
  }

  function addFavoriteStudent(student) {
    setFavoriteStudents((currentFavorites) => {
      if (currentFavorites.some((favorite) => favorite.id === student.id)) {
        return currentFavorites
      }

      return [...currentFavorites, student]
    })
  }

  function removeFavoriteStudent(studentId) {
    setFavoriteStudents((currentFavorites) =>
      currentFavorites.filter((student) => student.id !== studentId)
    )
  }

  return (
    <StudentContext.Provider
      value={{ students, favoriteStudents, addStudent, addFavoriteStudent, removeFavoriteStudent }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
