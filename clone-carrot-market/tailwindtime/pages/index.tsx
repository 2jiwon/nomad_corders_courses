import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-fuchsia-100 min-w-fit min-h-screen mx-auto font-sans">
      {/* div들 container */}
      <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-1 mx-16 min-h-screen py-20 place-items-center">
        {/* 첫번째 div */}
        <div className="bg-white w-4/5 h-full px-5 pt-10 md:-mr-4 lg:-mr-32">
          <h1 className="text-5xl font-extrabold">Weather</h1>

          <div className="grid grid-rows-4 gap-8 mt-10">
            <div className="border-black border-solid border-2 border-b-8 rounded-xl grid xs:grid-cols-1 lg:grid-cols-3 p-5">
              <div>
                <h1 className="font-extrabold">Casius</h1>
                <p className="text-xs font-bold">Mars, 12AM</p>
              </div>
              <div className="justify-self-end">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div className="justify-self-end">
                <h1 className="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div className="border-black border-solid border-2 border-b-8 rounded-xl grid xs:grid-cols-1 lg:grid-cols-3 p-5 bg-yellow-400">
              <div>
                <h1 className="font-extrabold">Dlacria</h1>
                <p className="text-xs font-bold">Mars, 12AM</p>
              </div>
              <div className="justify-self-end">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div className="justify-self-end">
                <h1 className="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div className="border-black border-solid border-2 border-b-8 rounded-xl grid xs:grid-cols-1 lg:grid-cols-3 p-5 bg-teal-400">
              <div>
                <h1 className="font-extrabold">NewYork</h1>
                <p className="text-xs font-bold">Mars, 12AM</p>
              </div>
              <div className="justify-self-end">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div className="justify-self-end">
                <h1 className="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div className="border-black border-solid border-2 border-b-8 rounded-xl grid xs:grid-cols-1 lg:grid-cols-3 p-5 bg-red-400">
              <div>
                <h1 className="font-extrabold">Zomato</h1>
                <p className="text-xs font-bold">Mars, 12AM</p>
              </div>
              <div className="justify-self-end">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div className="justify-self-end">
                <h1 className="text-4xl font-extrabold">85°</h1>
              </div>
            </div>
          </div>

          <div className="mx-auto my-20 border-black border-solid border-2 border-b-4 rounded-full w-14 h-14">
            <h1 className="text-4xl text-center mt-1">+</h1>
          </div>
        </div>
        {/* 첫번째 div End */}

        {/* 두번째 div */}
        <div className="bg-white w-4/5 h-full px-5">
          <div className="my-10 border-black border-solid border-2 border-b-4 rounded-full w-14 h-14">
            <h1 className="text-4xl text-center mt-1">X</h1>
          </div>
          <div>
            <div className="-my-10">
              <h3 className="text-gray-600 text-center font-extrabold text-lg">
                SIMPLE TAG
              </h3>
              <h1 className="pt-5 text-center font-extrabold text-4xl">
                Work with best designers
              </h1>
            </div>
          </div>
          <div className="my-10 grid sm:grid-cols-1 lg:grid-cols-2 xs:grid-rows-4 lg:grid-rows-2 gap-4 pt-10 place-items-center">
            <div className="border-black border-solid border-2 w-40 h-44 rounded-xl bg-yellow-400 xs:mr-0 lg:-mr-4">
              <div className="px-12 py-14">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="border-black border-solid border-2 w-40 h-44 rounded-xl bg-teal-400 xs:mr-0 lg:mr-4">
              <div className="px-12 py-14">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="border-black border-solid border-2 w-40 h-44 rounded-xl bg-pink-400 xs:mr-0 lg:-mr-4">
              <div className="px-12 py-14">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="border-black border-solid border-2 w-40 h-44 rounded-xl bg-red-400 xs:mr-0 lg:mr-4">
              <div className="px-12 py-14">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 place-items-center mx-4">
            <button className="bg-blue-700 rounded-lg text-center w-full text-white font-extrabold align-middle py-3">
              Let's get it done
            </button>
          </div>
        </div>
        {/* 두번째 div End */}

        {/* 세번째 div */}
        <div className="bg-yellow-400 w-4/5 h-full px-5 pt-10 md:mr-4 lg:mr-32">
          <div>〈</div>
          <h1>Friends</h1>
          <div>
            <div>Search with love</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* 세번째 div End */}
      </div>
      {/* div들 container End */}
    </div>
  );
};

export default Home;
