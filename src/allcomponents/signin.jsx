import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { updateProfile } from "firebase/auth";
import { NewContex } from "./contaxt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'





function Signin() {
    
    const {googlesign,allreadysigni,githubsign} = useContext(NewContex)
    const [suc,setsuc] = useState('')
    const [passer,setpasser] = useState('')
    const naviga = useNavigate()
    const locat = useLocation()

    const githubk = () => {
      githubsign()
      .then((result)=> {
        // console.log(resul.user)
        Swal.fire({
          title: "Good job!",
          text: "You Successfully Signin",
          icon: "success"
        })
        naviga(locat.state ? locat.state : '/')
        updateProfile(result.user,{
          displayName : result.user.displayName,
          photoURL : result.user.photoURL,
          email:result.user.email,
          password:result.user.password
        })
        .then(()=> {
          console.log('username')
          
      })
        .catch((err)=> console.log(err))
      })
      .catch((err)=> toast(err.message))
    }
    


    const googlesi = () => {
        googlesign()
            .then((resul)=> {
              console.log(resul.user)
              naviga(locat.state ? locat.state : '/')
              Swal.fire({
                title: "Good job!",
                text: "You Successfully Signin",
                icon: "success"
              })
              updateProfile(resul.user,{
                displayName : resul.user.displayName,
                email:resul.user.email,
                password:resul.user.password,
                photoURL:resul.user.photoURL
              })
              .then(()=> {
                console.log('username')
                
            })
              .catch((err)=> console.log(err))
            })
            .catch((err)=> toast(err.message))
    }


    
    

const submiti = (e) => {
e.preventDefault()

setpasser('')
setsuc('')       
  const email = e.target.email.value
  const password = e.target.password.value
  

  

  allreadysigni(email,password)
    .then(result=> {
      console.log(result.user)
      e.target.reset()
      Swal.fire({
        title: "Good job!",
        text: "You Successfully Signin",
        icon: "success"
      })
      naviga(locat.state ? locat.state : '/')
    })
    .catch(err=> toast(err.message))

}

    
    return(
        <div>

<ToastContainer />
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={submiti}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="login" className="btn btn-primary w-full" />
        </div>
      </form>
      <div className="text-center mt-[-14px]">
                <button onClick={googlesi} className="btn btn-primary w-[210px]">google</button><br />
                <button onClick={githubk} className=" mt-4 btn btn-primary w-[210px]">github</button>
                <div className="py-4">
                <Link to='/register' ><button className="text-white">create new account ? Register</button></Link>
              </div>
            </div>
        
    </div>
  </div>
</div>

        </div>
    )
}

export default Signin