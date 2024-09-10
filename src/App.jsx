// like the "main page" of the React app

import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {

  return ( //The return part is what gets displayed on the page. It's rendering the ToDoInput and ToDoList components inside a <main> HTML element in index.html
    <main>
      <ToDoInput/> {/*smaller components that are being displayed inside this App component*/}
      <ToDoList/>
    </main>
      
  )
}

export default App
