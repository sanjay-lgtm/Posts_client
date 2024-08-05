import { Button } from "@headlessui/react"
import { Link } from "react-router-dom"


const SignUp = () => {


  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-500 ">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirm-password" className="block text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-indigo-600 focus:ring-0 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Sign Up
          </button>

          <div className="flex items-center justify-center">
            <h5>Already have a user? <Link to='/login' className="font-bold text-blue-700">Login</Link> </h5>
          </div>

        </form>
      </div>
    </div>

  )
}

export default SignUp
