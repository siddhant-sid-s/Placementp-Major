import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { titleCase } from "title-case";
import { Link, useNavigate } from 'react-router-dom';
import PcaPrediction from "../package/PcaPrediction";
import '../styles/StudentList.css'; // Import CSS file for styling

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/students/read');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  
  const navigate = useNavigate();
  
  const handlePredict = async (student) => {
    const studentData = {
      studentName: student.studentName,
      rollNo: student.rollNo,
      degree: student.degree,
      score: student.score,
      aptitude: student.aptitude,
      english: student.english,
      quantitative: student.quantitative,
      analytical: student.analytical,
      domain: student.domain,
      computerFundamental: student.computerFundamental,
      coding: student.coding,
      personality: student.personality,
    };

    const prediction = await PcaPrediction(studentData);
    navigate("/prediction", { state: { ...studentData, prediction } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/students/delete/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="pd">
      <div className="card">
        <h2>Student List</h2>
        <div className="table-res" style={{ maxHeight: "500px", height: "100%", overflowY: "auto", width: "100%", overflowX: "hidden", }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Degree</th>
                <th>Score/800</th>
                <th>Aptitude</th>
                <th>English</th>
                <th>Quantitative</th>
                <th>Analytical</th>
                <th>Domain</th>
                <th>Computer Fundamental</th>
                <th>Coding</th>
                <th>Personality</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{titleCase(student.studentName)}</td>
                  <td>{student.rollNo}</td>
                  <td>{titleCase(student.degree)}</td>
                  <td>{student.score}</td>
                  <td>{student.aptitude}</td>
                  <td>{student.english}</td>
                  <td>{student.quantitative}</td>
                  <td>{student.analytical}</td>
                  <td>{student.domain}</td>
                  <td>{student.computerFundamental}</td>
                  <td>{student.coding}</td>
                  <td>{titleCase(student.personality)}</td>
                  <td>
                    <button onClick={() => handlePredict(student)} className="action-button">Predict</button>
                    <Link to={`/admin/edit/${student._id}`} className="action-button">Edit</Link>
                    <button onClick={() => handleDelete(student._id)} className="action-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
