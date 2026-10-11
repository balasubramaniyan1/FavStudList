import { useState } from 'react'
import StudentContext from './StudentContext'

const students = [
  { id: 1, name: 'Balu' },
  { id: 2, name: 'Avinash' },
  { id: 3, name: 'Vicky' },
  { id: 4, name: 'Priya' },
  { id: 5, name: 'Ravi' },
  { id: 6, name: 'Anjali' }
]

function StudentProvider({ children }) {
  const [favoriteStudents, setFavoriteStudents] = useState([])

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
      value={{ students, favoriteStudents, addFavoriteStudent, removeFavoriteStudent }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
