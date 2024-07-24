import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {
  const[selectedCourses, setSelectedCourses] = useState([]);
  const[creditHours, setCreditHours] = useState(0);
  const[totalPrice, setTotalPrice] = useState(0);
  const[remainingHours, setRemainingHours] = useState(0);

  const handleSelected = (title, credit, price) => {
    const newCredit = creditHours + credit;
    if(newCredit > 20){
      toast.warn("Your credit can't be exceeded to 20!", {
        position: "top-center",
        className: 'h-24 text-blue-400 font-bold text-lg'
      });
    }
    else{
      if(!selectedCourses.includes(title)){
        const newCourses = [...selectedCourses, title];
        setSelectedCourses(newCourses);
        setCreditHours(creditHours + credit);
        setTotalPrice(totalPrice + price);
        setRemainingHours(20 - newCredit);
      }
      else{
        toast.warn("You can't take a course twice!", {
          position: "top-center",
          className: 'h-24 text-blue-400 font-bold text-lg'
        });
      }
    }
  }

  return (
    <>
      <Header></Header>
      <main className='grid md:grid-cols-4 gap-4 p-4 md:p-0'>
        <Courses handleSelected={handleSelected}></Courses>
      <SelectedCourses selectedCourses={selectedCourses} creditHours={creditHours}totalPrice={totalPrice} remainingHours={remainingHours}></SelectedCourses>
      </main>
      <ToastContainer className="w-auto"></ToastContainer>
    </>
  )
}

export default App
