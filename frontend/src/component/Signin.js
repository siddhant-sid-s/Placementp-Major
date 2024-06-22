import React, { useState } from 'react';
import * as mui from "@mui/material";
import logo from "../img/tint.png";
import backgroundImage from '../img/Home_Background2.jpg'; // Import the background image
import * as faIcon from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"; // Use faSignInAlt for better clarity


export default function Signin() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');

  const handleSignIn = () => {
    // Basic validation
    if (!email || !password) {
     
      alert('Please enter both email and password.'); // Show error in dialog box
      return;
    }

    // Simulated authentication logic (replace with your own authentication logic)
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      // Authentication successful, redirect to admin page
      window.location.href = '/admin';
    } else {
      
      alert('Invalid email or password.'); // Show error in dialog box
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <mui.Container
        component="main"
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <mui.CssBaseline />
        <mui.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 3,
            boxShadow: "11px 10px 20px 5px rgba(0, 0, 0, 0.35)",
            borderRadius: 2,
            width: '100%',
            maxWidth: 360, // Adjust the maximum width
          }}
        >
          <img src={logo} alt="TINT LOGO" width="100px" /> {/* Adjust the logo size */}
          <mui.Typography component="h1" variant="h6">
            Admin Login
          </mui.Typography>
          <mui.Box
            component="form"
            noValidate
            sx={{ mt: 1, textAlign: "center" }}
          >
            <mui.TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <mui.TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
              <mui.Button
                variant="contained"
                sx={{ mt: 3, mb: 2, maxWidth: "200px", width: "100%" }}
                color="primary"
                onClick={handleSignIn}
              >
                Sign In&nbsp;
                <faIcon.FontAwesomeIcon icon={faSignInAlt} />
              </mui.Button>
              {error && (
              <mui.Typography color="error" sx={{ mt: 1 }}>
                {error}
              </mui.Typography>
            )}
            
          </mui.Box>
          <mui.Typography
            color="text.secondary"
            align="center"
            sx={{ mt: 2, fontSize: 14, color: "#333" }}
          >
            <faIcon.FontAwesomeIcon icon={faCopyright} transform="shrink-2 left-1" />{" "}
            {currentYear} | PLACEMENT PREDICTOR
          </mui.Typography>
        </mui.Box>
      </mui.Container>
    </div>
  );
}
