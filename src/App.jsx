import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {

  return (
    <>
      <Header></Header>
      <main className='grid md:grid-cols-4 gap-4 p-4 md:p-0'>
        <Courses></Courses>
        <SelectedCourses></SelectedCourses>
      </main>
    </>
  )
}

export default App
