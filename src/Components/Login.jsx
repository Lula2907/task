import { useEffect, React } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "./Context/useAuthstore";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const base_usel = "https://task-backend-2-eq1x.onrender.com";
  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuthstore();
  const [adminemail, setAdminemail] = useState("");
  const [adminpass, setAdminpass] = useState("");

  // const { checkAuth, isAuthenticated } = useAuthstore();
  // useEffect(async () => {
  //   await checkAuth();
  // }, [isAuthenticated]);

  const handelLogin = async (e) => {
    // await checkAuth();
    // console.log("after log a", isAuthenticated);

    e.preventDefault();
    try {
      const admin = {
        adminemail: adminemail,
        adminpass: adminpass
      };

      await login(admin, navigate);
    } catch (error) {
      console.log("error in log", error);
    }
  };

  return (
    <>
      <div className="w-full  ">
        <svg
          style={{ backgroundColor: "#e7008a" }}
          className="absolute sm:w-[100%] w-full sm:block top-[70px] hidden "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,288L34.3,250.7C68.6,213,137,139,206,96C274.3,53,343,43,411,85.3C480,128,549,224,617,234.7C685.7,245,754,171,823,165.3C891.4,160,960,224,1029,213.3C1097.1,203,1166,117,1234,80C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center items-center h-screen sm:top-[2px]  top-[-30px] relative overflow-hidden">
        <div className="xl:w-[700px] w-full h-[600px] px-10 sm:h-[450px] pt-[90px] rounded-3xl xl:shadow-xl z-10">
          <h1 className=" text-center text-3xl font-bold mt-2 mb-2 z-30 relative left-0 sm:left-[100px]">
            Admin Login
          </h1>

          <div className="flex justify-center mt-10">
            <form
              onSubmit={(e) => {
                handelLogin(e);
              }}
              className="z-30 "
              action
            >
              <input
                required
                onChange={(e) => {
                  setAdminemail(e.target.value);
                }}
                type="text"
                name
                id
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                placeholder="Enter your email"
              />

              <br />
              <br />
              <input
                required
                onChange={(e) => {
                  setAdminpass(e.target.value);
                }}
                type="text"
                name
                id
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                placeholder="Enter your password"
              />
              <div className="flex justify-end mt-3 mb-4">
                <a href="#" className="text-blue-700">
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                className="py-3 bg-indigo-400 text-white w-full rounded-md font-bold min-h-[50px] max-h-[50px]"
              >
                {!isLoggingIn ? (
                  <p>Login</p>
                ) : (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-lime-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
