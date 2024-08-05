import { Link } from "react-router-dom"


const Login = () => {

  return (
 
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Login Up</h1>
        <form className="space-y-6">
        
          <div>
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
      
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Login
          </button>
          <div className="flex items-center justify-center">
            <h5>Didn't have a account? <Link to='/signup' className="font-bold text-blue-700">SignUp</Link> </h5>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
