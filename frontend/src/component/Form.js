import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import PcaPrediction from "../package/PcaPrediction";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    studentName: "",
    rollNo: "",
    degree: "",
    score: "",
    aptitude: "",
    english: "",
    quantitative: "",
    analytical: "",
    domain: "",
    computerFundamental: "",
    coding: "",
    personality: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidForm()) {
      const numericStudent = convertFormValuesToNumbers(student);

      try {
        const response = await fetch('http://localhost:3001/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(numericStudent),
        });

        if (response.ok) {
          PcaPrediction(numericStudent);
          navigate("/prediction", { state: numericStudent });
        } else {
          const errorData = await response.json();
          alert('Error submitting form data: ' + (errorData.error || 'Unknown error'));
        }
      } catch (error) {
        alert('Error submitting form data: ' + error.message);
      }
    } else {
      alert('Please fill in all required fields with valid data.');
    }
  };

  const isValidForm = () => {
    return Object.values(student).every((value) => value.trim() !== "") &&
      !isNaN(student.score) &&
      !isNaN(student.aptitude) &&
      !isNaN(student.english) &&
      !isNaN(student.quantitative) &&
      !isNaN(student.analytical) &&
      !isNaN(student.domain) &&
      !isNaN(student.computerFundamental) &&
      !isNaN(student.coding);
  };

  const convertFormValuesToNumbers = (values) => {
    const numericValues = { ...values };
    for (let key in numericValues) {
      if (key !== "studentName" && key !== "rollNo" && key !== "degree" && key !== "personality") {
        numericValues[key] = parseFloat(numericValues[key]);
      }
    }
    return numericValues;
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        left: "50%",
        width: "100%",
        transform: "translateX(-50%)",
      }}
    >
      <Grid
        component="form"
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Student Name"
            type="text"
            name="studentName"
            value={student.studentName}
            onChange={handleChange}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Roll No."
            type="text"
            name="rollNo"
            value={student.rollNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Degree"
            type="text"
            name="degree"
            value={student.degree}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Score / 800"
            type="text"
            name="score"
            value={student.score}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Aptitude"
            type="text"
            name="aptitude"
            value={student.aptitude}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="English"
            type="text"
            name="english"
            value={student.english}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Quantitative"
            type="text"
            name="quantitative"
            value={student.quantitative}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Analytical"
            type="text"
            name="analytical"
            value={student.analytical}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Domain"
            type="text"
            name="domain"
            value={student.domain}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Computer Fundamental"
            type="text"
            name="computerFundamental"
            value={student.computerFundamental}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Coding"
            type="text"
            name="coding"
            value={student.coding}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            margin="normal"
            color="primary"
            required
            label="Personality"
            type="text"
            name="personality"
            value={student.personality}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '25%',
              mt: 2,
              backgroundColor: '#dde6ed',
              color: '#27374d',
              transition: 'background-color 0.3s, color 0.3s',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#27374d',
                color: '#dde6ed',
              },
            }}
          >
            Submit to Predict
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
