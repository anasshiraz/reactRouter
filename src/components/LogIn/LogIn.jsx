import {} from "react";

function LogIn() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form  className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1 font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-700 text-white mt-2 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            onClick={(e)=> e.preventDefault()}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;