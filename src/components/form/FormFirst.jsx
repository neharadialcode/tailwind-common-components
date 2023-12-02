import React, { useState } from "react";

const FormFirst = () => {
  const [typicalForm, setTypicalForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    design: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      typicalForm.name !== "" &&
      typicalForm.email !== "" &&
      typicalForm.project !== "" &&
      typicalForm.budget !== "" &&
      typicalForm.design !== "" &&
      regex.test(typicalForm.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        email: "",
        project: "",
        budget: "",
        design: "",
      });
    }
  };
  return (
    <>
      <div className="max-w-[1188px] mx-auto px-6 pt-[72px] pb-[90px]">
        <form onSubmit={(e) => OnsubmitHandler(e)}>
          <p className="text-black font-Inter max-w-[440px] font-medium sm:text-[40px] text-[36px] leading-[120%]">
            Love to hear from you, Get in touch
          </p>
          <div className="flex justify-between items-center md:flex-row flex-col pt-8 gap-6">
            <div className="md:w-1/2 w-full">
              <p className="text-black font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                Your name
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Edward SnowDen"
                  className=" outline-[#00000070] w-full bg-[#EBEBEB] mt-[10px] mb-5 px-6 pt-3 pb-4 rounded-xl placeholder:text-[#474747] sm:text-sm text-xs font-Inter font-normal leading-[157%]"
                  onChange={(e) =>
                    setTypicalForm({ ...typicalForm, name: e.target.value })
                  }
                  value={typicalForm.name}
                />
                {error && typicalForm.name === "" ? (
                  <p className="text-red-600 absolute bottom-[-10%] left-0 font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                    Name is required
                  </p>
                ) : (
                  typicalForm !== ""
                )}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-black font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                Your email
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="itanexample@gamil.com"
                  className="outline-[#00000070] w-full bg-[#EBEBEB] mt-[10px] mb-5 px-6 pt-3 pb-4 rounded-xl placeholder:text-[#474747] sm:text-sm text-xs font-Inter font-normal leading-[157%]"
                  onChange={(e) =>
                    setTypicalForm({
                      ...typicalForm,
                      email: e.target.value,
                    })
                  }
                  value={typicalForm.email}
                />
                <p className="text-red-600 font-Inter absolute bottom-[-10%] left-0 font-medium leading-[157%] sm:text-sm text-xs">
                  {error && typicalForm.email === ""
                    ? "Email is required"
                    : error && regex.test(typicalForm.email) === false
                    ? ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          {/* input 2 */}
          <div className="flex justify-between items-center md:flex-row flex-col pt-8 gap-6">
            <div className="md:w-1/2 w-full relative">
              <p className="text-black font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                What you are interested
              </p>
              <input
                type="text"
                placeholder="Design & Branding"
                className="outline-[#00000070] w-full bg-[#EBEBEB] mt-[10px] px-6 pt-3 pb-4 rounded-xl placeholder:text-[#474747] sm:text-sm text-xs font-Inter font-normal leading-[157%]"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, design: e.target.value })
                }
                value={typicalForm.design}
              />
              {error && typicalForm.design === "" ? (
                <p className="text-red-600 absolute bottom-[-30%] left-0 font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                  Text is required
                </p>
              ) : (
                typicalForm !== ""
              )}
            </div>
            <div className="md:w-1/2 w-full relative">
              <p className="text-black font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                Project Budget
              </p>
              <input
                type="text"
                placeholder="select your budget"
                className="outline-[#00000070] w-full bg-[#EBEBEB] mt-[10px] px-6 pt-3 pb-4 rounded-xl placeholder:text-[#474747] sm:text-sm text-xs font-Inter font-normal leading-[157%]"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, budget: e.target.value })
                }
                value={typicalForm.budget}
              />
              {error && typicalForm.budget === "" ? (
                <p className="text-red-600 absolute bottom-[-30%] left-0 font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                  Text is required
                </p>
              ) : (
                typicalForm !== ""
              )}
            </div>
          </div>
          {/* textarea */}
          <div className="w-full pt-7 relative">
            <p className="text-black font-Inter font-medium leading-[157%] sm:text-sm text-xs">
              Message
            </p>
            <textarea
              type="text"
              placeholder="Let tell us know your project about"
              className="outline-[#00000070] w-full bg-[#EBEBEB] mt-[10px] px-6 pt-3 pb-4 rounded-xl placeholder:text-[#474747]  sm:text-sm text-xs font-Inter font-normal leading-[157%] h-[130px]"
              onChange={(e) =>
                setTypicalForm({ ...typicalForm, project: e.target.value })
              }
              value={typicalForm.project}
            />
            {error && typicalForm.project === "" ? (
              <p className="text-red-600 absolute bottom-[-10%] left-0 font-Inter font-medium leading-[157%] sm:text-sm text-xs">
                Text is required
              </p>
            ) : (
              typicalForm !== ""
            )}
          </div>
          <button className="bg-blue hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue text-white font-Inter font-semibold leading-[157%] sm:text-sm text-xs md:w-[410px] w-[205px] h-[52px] flex justify-center items-center rounded-xl mt-8">
            Just Send
          </button>
        </form>
      </div>
    </>
  );
};

export default FormFirst;
