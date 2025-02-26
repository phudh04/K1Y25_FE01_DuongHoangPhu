import React, { useState } from 'react'
import Input from './Inputs'
import Button from './Button'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["user"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn reload trang
    if (username === "test" && password === "test") {
      setCookie("user", "test", { path: "/" });
      navigate("/");
    } else {
      alert("Không đăng nhập được!!!!!");
    }
  };

  return (

    <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
      <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
        Đăng nhập
      </h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Nhập username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Nhập password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Đăng nhập</Button>
      </form>
      <div className="flex flex-col mt-4 items-center justify-center text-sm">
        <h3>
          <span className="cursor-default dark:text-gray-300">
            Have an account?
          </span>
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"

          >
            <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Log In
            </span>
          </a>
        </h3>
      </div>
      {/* Third Party Authentication Options */}
      <div
        id="third-party-auth"
        className="flex items-center justify-center mt-5 flex-wrap"
      >
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
            alt="Google"
          />
        </button>
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
            alt="Linkedin"
          />
        </button>
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px] filter dark:invert"
            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
            alt="Github"
          />
        </button>
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
            alt="Facebook"
          />
        </button>
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px] dark:gray-100"
            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
            alt="twitter"
          />
        </button>
        <button

          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
            alt="apple"
          />
        </button>
      </div>
      <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
        <p className="cursor-default">
          By signing in, you agree to our
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"

          >
            <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Terms
            </span>
          </a>
          and
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"

          >
            <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Privacy Policy
            </span>
          </a>
        </p>
      </div>
    </div>

  )
}
