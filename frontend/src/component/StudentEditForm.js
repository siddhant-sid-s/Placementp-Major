import React, { useState, useEffect } from 'react';
import "../styles/StudentEdit.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Slidebar from './Slidebar';
import ContentHeader from './ContentHeader';

const StudentEditForm = () => {
  const [student, setStudent] = useState({
    studentName: '',
    rollNo: '',
    degree: '',
    score: '',
    aptitude: '',
    english: '',
    quantitative: '',
    analytical: '',
    domain: '',
    computerFundamental: '',
    coding: '',
    personality: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/students/read/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/students/update/${id}`, student);
      navigate('/data/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (

    <div>
      <div className='adbody'>
        <div className='dashboard'>
          <Slidebar />
          <div className='my--content dashboard--content' style={{ height: "500px" }}>
            <ContentHeader />
            <div>
              <h2 style={{ marginBottom: "20px", }}>Edit Student</h2>
              <form onSubmit={handleSubmit}>
                <input className="editInput"
                  type="text"
                  name="studentName"
                  value={student.studentName}
                  onChange={handleChange}
                  placeholder="Student Name"
                  required
                />
                <input className="editInput"
                  type="text"
                  name="rollNo"
                  value={student.rollNo}
                  onChange={handleChange}
                  placeholder="Roll No"
                  required
                />
                <input className="editInput"
                  type="text"
                  name="degree"
                  value={student.degree}
                  onChange={handleChange}
                  placeholder="Degree"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="score"
                  value={student.score}
                  onChange={handleChange}
                  placeholder="Score"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="aptitude"
                  value={student.aptitude}
                  onChange={handleChange}
                  placeholder="Aptitude"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="english"
                  value={student.english}
                  onChange={handleChange}
                  placeholder="English"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="quantitative"
                  value={student.quantitative}
                  onChange={handleChange}
                  placeholder="Quantitative"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="analytical"
                  value={student.analytical}
                  onChange={handleChange}
                  placeholder="Analytical"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="domain"
                  value={student.domain}
                  onChange={handleChange}
                  placeholder="Domain"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="computerFundamental"
                  value={student.computerFundamental}
                  onChange={handleChange}
                  placeholder="Computer Fundamental"
                  required
                />
                <input className="editInput"
                  type="number"
                  name="coding"
                  value={student.coding}
                  onChange={handleChange}
                  placeholder="Coding"
                  required
                />
                <input className="editInput"
                  type="text"
                  name="personality"
                  value={student.personality}
                  onChange={handleChange}
                  placeholder="Personality"
                  required
                />
                <br />
                <button className='submit_btn' type="submit">Go Back</button>
                &nbsp;&nbsp;
                <button className='submit_btn' style={{ backgroundColor: "#a8aeb4"}} type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEditForm;