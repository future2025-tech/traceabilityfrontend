import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa6";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper
} from "@mui/material";

function Signup() {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [passwordErrors, setPasswordErrors] = useState({});
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      letter: /[A-Za-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordErrors(validatePassword(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validatePassword(formData.password);
    const isValid = Object.values(errors).every(Boolean);

    if (!isValid) {
      alert("Password does not meet requirements");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.ok) {
      alert("Signup successful, please login");
      navigate("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <Grid container justifyContent="center" mt={5}>
      <Grid item>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            height: "640px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {/* Left Side - Logo */}
          <Box
            sx={{
              width: 400,
              backgroundColor: "#EEFCF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid green",
            }}
          >
            <img src={logo} alt="logo" style={{ width: "300px" }} />
          </Box>

          {/* Right Side - Form */}
          <Box
            sx={{
              width: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h5" align="center">
                Signup
              </Typography>

              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdEmail />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RiLockPasswordFill />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Requirements */}
              {/* <Box sx={{ fontSize: 14, mt: -1 }}>
                <Typography>Password must contain:</Typography>
                <Typography sx={{ color: passwordErrors.length ? "green" : "red" }}>
                  {passwordErrors.length ? "✔" : "✘"} At least 8 characters
                </Typography>
                <Typography sx={{ color: passwordErrors.letter ? "green" : "red" }}>
                  {passwordErrors.letter ? "✔" : "✘"} At least 1 letter
                </Typography>
                <Typography sx={{ color: passwordErrors.number ? "green" : "red" }}>
                  {passwordErrors.number ? "✔" : "✘"} At least 1 number
                </Typography>
                <Typography sx={{ color: passwordErrors.special ? "green" : "red" }}>
                  {passwordErrors.special ? "✔" : "✘"} At least 1 special character
                </Typography>
              </Box> */}

              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaKey />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ backgroundColor: "green", fontWeight: "bold" }}
              >
                Signup
              </Button>

              <Typography align="center" sx={{ fontSize: 14 }}>
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Signup;
