import { React } from "react";
import { BiArrowBack } from 'react-icons/bi';
import { titleCase } from "title-case";
import PcaPrediction from "../package/PcaPrediction";
import { useLocation,Link } from "react-router-dom";
import "../styles/prediction.css"
import ContentHeader from "./ContentHeader";

export default function Prediction() {
  const location = useLocation();
  const formValues = location.state;
  const pstatus = PcaPrediction(formValues);
  const filteredStatus = Object.fromEntries(
    Object.entries(pstatus).filter(([key]) => key !== "mismatched")
  );

  return (
    <div className="pd">
    <div className="card">
      <ContentHeader/>
        <section>
              <div>
                {pstatus.mismatched === false ? (
                  <div className="table-res">
                    <div className="std">
                      <div>Student Name: - {titleCase(formValues.studentName)}</div>
                      <div>Roll No.: - {formValues.rollNo}</div> 
                    </div>
                    <table>
                      <thead>
                        <tr >
                          <th>Role</th>
                          <th>Status</th>
                          <th>Package (Approximately)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(filteredStatus).map(([role, { placed, salary }], index) => (
                          <tr key={index}>
                            <td id="role">{role.replace('_', ' ')}</td>
                            <td>{placed ? "Good to go" : "Need Training"}</td>
                            <td>{placed ? (salary ? `₹${salary} Lacs` : "N/A") : "N/A"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="sorry-message">
                    <h5>Sorry! Total Score is below 60%. Criteria Mismatched!</h5>
                  </div>
                )}
              </div>
              
        </section>
        <div className="goback">
        <Link to='/data'>
        <button className='logout--button'>
          <BiArrowBack className='logout--icon' />Go Back
        </button>
        </Link>
        </div>
    </div>
    </div>
  );
}
