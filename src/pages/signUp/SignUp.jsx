import { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
        const {createUser, } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email= form.email.value;
        const pass = form.pass.value;
        createUser(email, pass)
        .then(result => {
            console.log('worked',result.user)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
         <div className="flex justify-center">
        <div className="md:w-2/5 w-full p-2 ">
           
                <form onSubmit={handleSignUp}>

                    <div className="card-body p-2 md:p-8  border-2 border-[#ABABAB] rounded-md">
                        <fieldset className="fieldset">
                            <h2 className="text-lg font-bold">Register</h2>
                            <label className="label">First Name</label>
                            <input type="text" className="input w-full" placeholder="First Name" />
                            <label className="label">Last name</label>
                            <input type="text" className="input w-full" placeholder="Last Name" />
                            <label className="label">Username or Email</label>
                            <input type="email" className="input w-full" name="email" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" name="pass" placeholder="New Password" />
                            <label className="label">Confirm Password</label>
                            <input type="password" className="input w-full" placeholder="Cpmfirm Password" />
                         
                            <div>
                                <button className="btn w-full primary-bg mt-4">SignUp</button>
                            </div>
                            <h3 className="text-base font-bold text-center">Already have an Account?<span className="text-red-500"><Link to="/login">Login</Link></span></h3>
                        </fieldset>
                    </div>

                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-t border-[#ABABAB]" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow border-t border-[#ABABAB]" />
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 font-semibold text-base p-2 border-2 rounded-full border-[#ABABAB]">
                    <div className="w-8 "><FaFacebookF /></div>
                    <p >Continue with Facebook</p>
                </div>
                
                <div className="flex items-center justify-center gap-2 font-semibold text-base p-2 border-2 rounded-full border-[#ABABAB]">
                    <div className="w-8 "><FaGoogle /></div>
                    <p>Continue with Google</p>
                </div>
                </div>
            </div>
            </div>
    );
};

export default SignUp;