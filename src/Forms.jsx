import { useState } from "react";
function Form() {
    const[isSignedUp, setIsSignedUp] = useState(true)
  return (
        <div>
            <div  className="welcome">
            <h1>Welcome to WPNZ Platform</h1>
            <button onClick={()=>{
                setIsSignedUp(true)
            }}>Sign Up</button>
            <button onClick={()=>{
                setIsSignedUp(false)
            }}>Already have an account Login !</button>
            </div>

            {
                isSignedUp == true ?
                (
                    <div>
        <form action="">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please Fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Ebter Password"
              name="psw"
              required
            />
            <label htmlFor="psw-repeat">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <div className="clearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
                ):
        
       <form action="" method="post">
             <h2>Login Form</h2>
          <div className="imgcontainer">
            <img src="" alt="profile-picture" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button type="submit">Login</button>
          </div>
          <div class="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
   }
</div>
   
  )
}
export default Form;
