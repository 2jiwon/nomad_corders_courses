import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div class="bg-fuchsia-100 w-auto min-h-screen mx-auto font-sans">
      {/* div들 container */}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 mx-8 lg:mx-16 min-h-screen py-20 place-items-center">
        {/* 첫번째 div */}
        <div class="bg-white w-5/6 h-full px-5 py-20 mr-0 lg:-mr-32">
          <h1 class="text-5xl font-extrabold">Weather</h1>

          <div class="grid grid-rows-4 gap-8 mt-10">
            <div class="border-black border-solid border-2 border-b-8 rounded-xl grid grid-cols-1 xl:grid-cols-3 p-5">
              <div>
                <h1 class="text-2xl font-extrabold">Casius</h1>
                <p class="text-sm font-bold">Mars, 12AM</p>
              </div>
              <div class="justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="justify-self-end">
                <h1 class="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div class="border-black border-solid border-2 border-b-8 rounded-xl grid grid-cols-1 xl:grid-cols-3 p-5 bg-yellow-400">
              <div>
                <h1 class="text-2xl font-extrabold">Dlacria</h1>
                <p class="text-sm font-bold">Mars, 12AM</p>
              </div>
              <div class="justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="justify-self-end">
                <h1 class="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div class="border-black border-solid border-2 border-b-8 rounded-xl grid grid-cols-1 xl:grid-cols-3 p-5 bg-teal-400">
              <div>
                <h1 class="text-2xl font-extrabold">NewYork</h1>
                <p class="text-sm font-bold">Mars, 12AM</p>
              </div>
              <div class="justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="justify-self-end">
                <h1 class="text-4xl font-extrabold">85°</h1>
              </div>
            </div>

            <div class="border-black border-solid border-2 border-b-8 rounded-xl grid grid-cols-1 xl:grid-cols-3 p-5 bg-red-400">
              <div>
                <h1 class="text-2xl font-extrabold">Zomato</h1>
                <p class="text-sm font-bold">Mars, 12AM</p>
              </div>
              <div class="justify-self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="justify-self-end">
                <h1 class="text-4xl font-extrabold">20°</h1>
              </div>
            </div>
          </div>

          <div class="mx-auto my-20 border-black border-solid border-2 border-b-4 rounded-full w-14 h-14">
            <h1 class="text-4xl text-center mt-1">+</h1>
          </div>
        </div>
        {/* 첫번째 div End */}

        {/* 두번째 div */}
        <div class="bg-white w-5/6 h-full px-5 py-10">
          <div class="mt-10 border-black border-solid border-2 border-b-4 rounded-full w-14 h-14">
            <h1 class="text-3xl text-center font-bold my-2">X</h1>
          </div>
          <div class="mb-3">
            <h3 class="text-gray-600 text-center font-extrabold text-lg">
              SIMPLE TAG
            </h3>
            <h1 class="pt-5 text-center font-extrabold text-4xl">
              Work with best designers
            </h1>
          </div>
          <div class="my-10 grid grid-cols-1 xl:grid-cols-2 grid-rows-4 xl:grid-rows-2 gap-4 place-items-center">
            <div class="border-black border-solid border-2 w-44 h-48 rounded-xl bg-yellow-400 xl:place-self-end">
              <div class="px-14 py-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="border-black border-solid border-2 w-44 h-48 rounded-xl bg-teal-400 xl:place-self-start">
              <div class="px-14 py-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="border-black border-solid border-2 w-44 h-48 rounded-xl bg-pink-400 xl:place-self-end">
              <div class="px-14 py-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="border-black border-solid border-2 w-44 h-48 rounded-xl bg-red-400 xl:place-self-start">
              <div class="px-14 py-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 place-items-center mx-4 my-5">
            <button class="bg-blue-700 rounded-lg text-center w-full text-white font-extrabold align-middle py-3">
              Let's get it done
            </button>
          </div>
        </div>
        {/* 두번째 div End */}

        {/* 세번째 div */}
        <div class="bg-yellow-400 w-5/6 h-full px-5 py-10 mr-0 lg:mr-32">
          <div class="grid grid-cols-3 place-content-center">
            <div class="bg-white my-10 border-black border-solid border-2 border-b-4 rounded-full w-14 h-14">
              <h1 class="text-3xl text-center font-bold my-2">〈</h1>
            </div>
            <div class="place-self-center">
              <h1 class="text-center font-extrabold text-3xl">Friends</h1>
            </div>
          </div>

          <div class="grid xs:grid-rows-6 gap-3 my-4">
            <div class="relative mb-5">
              <input
                class="w-full h-16 bg-white rounded-xl text-left text-xl px-5 border-black border-solid border-2 border-b-8 
                placeholder:text-black placeholder:font-semibold placeholder:font-montserrat"
                type="text"
                placeholder="Search with love ..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 absolute right-0 -mt-12 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div class="bg-white border-black border-solid border-2 rounded-xl w-full h-22 p-6">
              <div class="grid gap-2 sm:grid-cols-1 xl:grid-cols-5 xs:grid-rows-3 xl:grid-rows-1 place-items-center">
                <div class="xs:place-self-center xl:place-self-start">
                  <div class="bg-red-400 rounded-full w-14 h-14 border-black border-solid border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="xs:place-self-center xl:place-self-start xl:col-span-3 pt-0 justify-self-start">
                  <h1 class="text-2xl font-extrabold">Bill Rizer</h1>
                  <p class="font-montserrat font-semibold">Planet Designer</p>
                </div>
                <div class="xl:place-self-end">
                  <button class="bg-yellow-400 w-20 h-12 rounded-xl border-black border-solid border-2 border-b-4 text-md font-extrabold">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white border-black border-solid border-2 rounded-xl w-full h-22 p-6">
              <div class="grid gap-2 sm:grid-cols-1 xl:grid-cols-5 xs:grid-rows-3 xl:grid-rows-1 place-items-center">
                <div class="xs:place-self-center xl:place-self-start">
                  <div class="bg-teal-500 rounded-full w-14 h-14 border-black border-solid border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="xs:place-self-center xl:place-self-start xl:col-span-3 pt-0 justify-self-start">
                  <h1 class="text-2xl font-extrabold">Genbei Yagy</h1>
                  <p class="font-montserrat font-semibold">Planet Designer</p>
                </div>
                <div class="xl:place-self-end">
                  <button class="bg-yellow-400 w-20 h-12 rounded-xl border-black border-solid border-2 border-b-4 text-md font-extrabold">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white border-black border-solid border-2 rounded-xl w-full h-22 p-6">
              <div class="grid gap-2 sm:grid-cols-1 xl:grid-cols-5 xs:grid-rows-3 xl:grid-rows-1 place-items-center">
                <div class="xs:place-self-center xl:place-self-start">
                  <div class="bg-red-400 rounded-full w-14 h-14 border-black border-solid border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="xs:place-self-center xl:place-self-start xl:col-span-3 pt-0 justify-self-start">
                  <h1 class="text-2xl font-extrabold">Nancy Neo</h1>
                  <p class="font-montserrat font-semibold">Rogue Corp</p>
                </div>
                <div class="xl:place-self-end">
                  <button class="bg-black w-20 text-white h-12 rounded-xl border-black border-solid border-2 border-b-4 text-md font-extrabold">
                    Invited
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white border-black border-solid border-2 rounded-xl w-full h-22 p-6">
              <div class="grid gap-2 sm:grid-cols-1 xl:grid-cols-5 xs:grid-rows-3 xl:grid-rows-1 place-items-center">
                <div class="xs:place-self-center xl:place-self-start">
                  <div class="bg-yellow-500 rounded-full w-14 h-14 border-black border-solid border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="xs:place-self-center xl:place-self-start xl:col-span-3 pt-0 justify-self-start">
                  <h1 class="text-2xl font-extrabold">Bill Rizer</h1>
                  <p class="font-montserrat font-semibold">Hard Cops</p>
                </div>
                <div class="xl:place-self-end">
                  <button class="bg-yellow-400 w-20 h-12 rounded-xl border-black border-solid border-2 border-b-4 text-md font-extrabold">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white border-black border-solid border-2 rounded-xl w-full h-22 p-6">
              <div class="grid gap-2 sm:grid-cols-1 xl:grid-cols-5 xs:grid-rows-3 xl:grid-rows-1 place-items-center">
                <div class="xs:place-self-center xl:place-self-start">
                  <div class="bg-pink-400 rounded-full w-14 h-14 border-black border-solid border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="xs:place-self-center xl:place-self-start xl:col-span-3 pt-0 justify-self-start">
                  <h1 class="text-2xl font-extrabold">Konami</h1>
                  <p class="font-montserrat font-semibold">Xenon Creator</p>
                </div>
                <div class="xl:place-self-end">
                  <button class="bg-yellow-400 w-20 h-12 rounded-xl border-black border-solid border-2 border-b-4 text-md font-extrabold">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 세번째 div End */}
      </div>
      {/* div들 container End */}
    </div>
  );
};

export default Home;
