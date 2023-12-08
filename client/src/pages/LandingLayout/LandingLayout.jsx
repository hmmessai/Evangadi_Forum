// // import React,{useState} from 'react'
// // import Header from "../../components/Header/Header";
// // import bg from '../../assets/bg.jpg'
// // import './LandingLayout.css'
// // import LogIn from '../../components/LogIn/LogIn';
// // import SignUp from '../../components/SignUp/SignUp';
// // // import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
// // // import "../../../node_modules/bootstrap/dist/js/bootstrap";

// // const Landinglayout = () => {
// //   const  [currentPage, setCurrentPage] = useState("signup");
// //   return (
// //     <section>
// //       <Header />
// //       <main
// //         className="landing bg-body-tertiary bg-img"
// //         style={{
// //           background: `url(${bg})`,
// //           backgroundRepeat: "no-repeat",
// //           backgroundSize: "cover",
// //         }}>
// //         <section className="container d-md-flex pt-5 gap-5">
// //           {/* form Login/signup */}

// //           {currentPage === "login" && (
// //             <LogIn setCurrentPage={setCurrentPage}></LogIn>
// //           )}

// //           {currentPage === "signup" && (
// //             <SignUp setCurrentPage={setCurrentPage}></SignUp>
// //           )}
// //           {/* <LogIn></LogIn> */}
// //           {/* <SignUp></SignUp> */}

// //           {/* welcome section */}

// //           <div className="col mt-5">
// //             <p className="table-warning fw-semibold text-warning">About</p>
// //             <h1 className="fw-bold">Evangadi Networks Q&A</h1>
// //             <div className="d-flex flex-column gap-4 ">
// //               <p>
// //                 No matter what stage of life you're in, whether you're just
// //                 starting elementary school or being promoted to CEO of a Fortune
// //                 500 company, you have much to offer those who are trying to
// //                 follow in your footsteps.
// //               </p>
// //               <p>
// //                 Whether you are willing to share your knowledge or you are just
// //                 looking to meet mentors of your own, please start by joining the
// //                 network here.
// //               </p>
// //             </div>
// //             <div>
// //               <button
// //                 className="btn btn-warning text-white fw-bold py-2 px-5 mt-3"
// //                 style={{ background: "#FF8500" }}>
// //                 HOW IT WORKS
// //               </button>
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //     </section>
// //   );
// // }

// // export default Landinglayout





// import React, { useState } from "react";
// import Header from "../../components/Header/Header";
// import bg from "../../assets/bg.jpg";
// import "./LandingLayout.css";
// import LogIn from "../../components/LogIn/LogIn";
// import SignUp from "../../components/SignUp/SignUp";
// import { Link } from "react-router-dom";

// const Landinglayout = () => {
//   const [currentPage, setCurrentPage] = useState("signup");

//   return (
//     <section>
//       <Header />
//       <main
//         className="landing bg-body-tertiary bg-img"
//         style={{
//           background: `url(${bg})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}>
//         <section className="container d-md-flex pt-5 gap-5">
//           {currentPage === "login" && <LogIn setCurrentPage={setCurrentPage} />}

//           {currentPage === "signup" && (
//             <SignUp setCurrentPage={setCurrentPage} />
//           )}

//           <div className="col mt-5">
//             <p className="table-warning fw-semibold text-warning">About</p>
//             <h1 className="fw-bold">Evangadi Networks Q&A</h1>
//             <div className="d-flex flex-column gap-4 ">
//               <p>
//                 No matter what stage of life you're in, whether you're just
//                 starting elementary school or being promoted to CEO of a Fortune
//                 500 company, you have much to offer those who are trying to
//                 follow in your footsteps.
//               </p>
//               <p>
//                 Whether you are willing to share your knowledge or you are just
//                 looking to meet mentors of your own, please start by joining the
//                 network here.
//               </p>
//             </div>
//             <div>
//               <button
//                 className="btn btn-warning text-white fw-bold py-2 px-5 mt-3"
//                 style={{ background: "#FF8500" }}>
//                 HOW IT WORKS
//               </button>

//               {/* Add Link to Home */}
//               <Link
//                 to="/home"
//                 className="btn btn-primary text-white fw-bold py-2 px-5 mt-3 ml-3">
//                 Go to Home
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//     </section>
//   );
// };

// export default Landinglayout;


import React, { useState } from "react";
import Header from "../../components/Header/Header";
import bg from "../../assets/bg.jpg";
import Login from "../../components/LogIn/LogIn";
import SignUp from "../../components/SignUp/SignUp";

function LandingLayout() {
  const [currentPage, setCurrentPage] = useState("signup"); // Fixed typo here
  return (
    <section>
      <Header />
      <main
        className="landing bg-body-tertiary"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="container d-md-flex pt-5 gap-5">
          {/* form login/signup */}
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}

          {/* welcome */}
          <div className="col mt-5">
            <p className="text-warning fw-swmibold">About</p>
            <h1 className="fw-bold">Evangadi Networks Q&A</h1>
            <div className="d-flex flex-column gap-4 fs-5">
              <p>
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps!
              </p>
              <p>
                Whether you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
              <div>
                <button
                  className="btn btn-warning text-white fw-bold py-2 px-5 mt-3 "
                  style={{ background: "#fe8402" }}
                >
                  How It Works
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default LandingLayout;




