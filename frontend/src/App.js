import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signin from './component/Signin';
import { Footer } from './component/Footer';
import Content from './component/Content';
import Admin from './component/Admin';
import Prediction from './component/Prediction';
import Card from './component/Card';
import StudentList from './component/StudentList'; // Import StudentList component
import StudentEditForm from './component/StudentEditForm'; // Import StudentEditForm component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={<HomeWithNavbarFooter />} />

          {/* Route for Signin */}
          <Route path="/signin" element={<SigninWithNavbarFooter />} />

          {/* Route for Content */}
          <Route path="/content" element={<Content />} />

          {/* Route for Admin */}
          <Route path="/admin" element={<Admin />} />

          {/* Route for Prediction */}
          <Route path="/prediction" element={<Prediction />} />

          {/* Route for displaying all students */}
          <Route path="/admin/students" element={<StudentList />} />

          {/* Route for editing a student */}
          <Route path="/admin/edit/:id" element={<StudentEditForm />} />

          <Route path="/data" element={<Card />} />

          {/* Default Route */}
          <Route path="*" element={<HomeWithNavbarFooter />} />
        </Routes>
      </Router>
    </div>
  );
}

// Component for Home with Navbar and Footer
function HomeWithNavbarFooter() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

// Component for Signin with Navbar and Footer
function SigninWithNavbarFooter() {
  return (
    <>
      <Navbar />
      <Signin />
      <Footer />
    </>
  );
}

export default App;
