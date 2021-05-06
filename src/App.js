import './App.css';
import Component from './profile/Component';
function App() {
const name = "Bilel"
const biographie = "Looking for new opportunities"
const job = "Full Stack JS Developer"
const fn = () => alert(name)
 
  return (

    <div className="App">
      <Component fullname={name} bio={biographie} profession={job} greeting={fn} />
      <img src="/profilPhoto.jpg" alt='user'width="400" />
    </div>
  );
}

export default App;