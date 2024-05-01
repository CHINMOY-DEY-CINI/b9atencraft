import { useContext, useState } from "react"
import { updateProfile } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { NewContex } from "./contaxt"
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Resigster() {

    const {newcreator} = useContext(NewContex)

    const [psserr,setpasserr] = useState('')
  const [succ,setsucc] = useState('')
  const [eye,seteye] = useState(false)
  const navigao = useNavigate()

  const huku = () => {
    seteye(!eye)
  }

  const submik = (e) => {
    e.preventDefault()

      setpasserr('')
      setsucc('')
      const name = e.target.name.value        
      const email = e.target.email.value
      const password = e.target.password.value
      const fotourl = e.target.fotoi.value
      console.log(name,email,password,fotourl)

      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        toast('give a valid email')
        return
      }

      if(password.length < 6){
        toast('give a 6 length password')
        return ;
      }
      if(!/[A-Z]/.test(password)){
        toast('give one uppercase caracter in password')
        return ;
      }
      if(!/[a-z]/.test(password)){
        toast('give one lowercase caracter in password')
        return ;
      }

      newcreator(email,password)
        .then(resu=> {
          console.log(resu.user)
          toast('user created successfully')
          navigao(locat.state ? locat.state : '/')
          // updateProfile(resu.user,{
          //   displayName : resu.user.displayname,
          //   email : email,
          //   password : password,
          //   photoURL : fotourl
          // })
          .then(()=> {console.log('username')
            }
        )
          .catch((err)=> {
            console.log(err)
          })
        })
        .catch(err=> toast(err))

  }
    

    return(
        <div>
            <ToastContainer />
            
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Resigter now!</h1>
     </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={submik}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <input  type={eye ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered relative" required />
          <span onClick={huku} className="absolute ml-[210px] mt-[55px]">{eye ? <FaEyeSlash /> : <FaEye />}</span></div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="url" name="fotoi" placeholder="photourl" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    <div className="text-center pb-4">
       <Link to='/login'><button className="text-white">all ready have account login</button></Link>
       </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Resigster