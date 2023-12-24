import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import { AuthContext } from "../../components/Authv1/AuthContext";
import { axiosInstance, endPoint } from "../../endPoint/api";
import Cookies from "js-cookie";
import NewQuestion from "../../components/PostQuestion/NewQuestion";
import { Link, useNavigate } from "react-router-dom";
import FooterComp   from "../../components/Footer/FooterComp";
const Home = () => {
  const { state } = useContext(AuthContext);

  console.log(state)

  const [questions, setQuestions] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token, "token");

    const fetchData = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get(endPoint.QUESTIONS, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setQuestions(response.data?.questions || []);
          }
        } catch (error) {
          console.log("Error fetching questions:", error);
        }
      }
    };

    fetchData();
  }, []);
console.log(questions)
  return (
    <section className="mb-64">
      <section className="bg-body-tertiary">
        <Header />
        {/* <NewQuestion></NewQuestion> */}
        <div className="d-flex justify-content-around pt-5 bg-body-tertiary">
          <button
            onClick={() => navigate("/questions")}
            className="btn btn-primary action-btn px-5">
            Ask Question
          </button>

          <p className="fw-semibold">
            <span className="text-warning">Welcome,</span>{" "}
            {state?.user?.firstname} {state?.user?.lastname}
          </p>
        </div>
        <div className="container mt-5">
          <h2>Questions</h2>

          {/* from chatGpt */}

          {questions?.map((question) => (
            <Question
              key={question.id}
              firstname={question.firstname}
              lastname={question.lastname}
              question={question.question}
              id={question.questionId}
            />
          ))}
        </div>
      </section>
      <FooterComp></FooterComp>
    </section>
  );
};

export default Home;
