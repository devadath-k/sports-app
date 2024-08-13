import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div  className="w-full h-auto p-2">
        <div className="rounded-md shadow-md mt-10 px-2 py-4  bg-white/10 max-w-[400px] w-full h-auto mx-auto backdrop-blur-sm">
          <Typography variant="h6" className="text-white text-center uppercase">
            Sign in to your account
          </Typography>
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 mt-2 px-3">
                <div className="w-full">
                  <TextField 
                    id="email" 
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange} 
                    variant="standard" 
                    className="w-full" 
                    sx={{ input: { color: 'white' , borderColor: 'white'}, label: { color: 'white' } }} />
                </div>
                <div className="w-full">
                  <TextField 
                    id="password" 
                    label="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={onChange} 
                    variant="standard" 
                    className="w-full" 
                    sx={{ input: { color: 'white' }, label: { color: 'white' } }} />
                </div>
              </div>
              <div className="pt-4 w-full flex justify-center">
                <Button type="submit" variant="contained" className="w-[200px]">
                  Sign In
                </Button>
              </div>
              <p className="text-center text-white mt-4">
                Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
              </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
