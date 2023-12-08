import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../components/Authv1/AuthContext";
import { axiosInstance, endPoint } from "../../endPoint/api";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
const Answer = () => {
  const { questionId } = useParams();
  console.log(questionId);

  const { state } = useContext(AuthContext);
const [fetchedAnswer, setFetchedAnswer] = useState("");
  const [question, setQuestion] = useState({});
  const [answerText, setAnswerText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token, "token");

    const fetchData = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get(
            `${endPoint.QUESTIONS}/${questionId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setQuestion(response?.data?.question);
          console.log(response.data.question);
        } catch (error) {
          console.log("Error fetching question:", error);
        }
      }
    };

    fetchData();
  }, [questionId]);

  const postAnswer = async () => {
    const token = Cookies.get("token");

    try {
      await axiosInstance.post(
        `${endPoint.QUESTIONS}/${questionId}/answers`,
        {
          answer: answerText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAnswerText("");
      navigate("/home");
    } catch (error) {
      console.log("Error posting answer:", error);
    }
  };
const getAnswers = async () => {
  const token = Cookies.get("token");

  try {
    const response = await axiosInstance.get(
      `${endPoint.QUESTIONS}/${questionId}/answers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data.answers[0].answer);
    // const finalAnswer = response.data.answers[0].answer; 
     setFetchedAnswer(response.data.answers[0].answer);
    // console.log(finalAnswer)// This should contain the fetched answers
    // Further handling of the fetched answers...
  } catch (error) {
    console.log("Error fetching answers:", error);
  }
};

  getAnswers()

  const handleAnswer = async (e) => {
    e.preventDefault();
    await postAnswer(); // Call postAnswer function to submit the answer
  };

  return (
    <div>
      <Header />
      <h3>Question</h3>

      {/* Display the Question */}
      <p>{question?.question}</p>
      <p>{question?.questionDescription}</p>
      <hr />
      <h2>Answers from the Commmunity</h2>
      <hr />
      <>
        <LiaUserCircleSolid />
        <p>{question?.firstname}</p>
        <p>{fetchedAnswer}</p>
      </>

      <ans></ans>

      <form onSubmit={handleAnswer}>
        <div className="mb-3">
          <textarea
            name=""
            style={{ height: "200px" }}
            placeholder="Your Answer..."
            className="form-control"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post Your Answer
        </button>
      </form>
    </div>
  );
};

export default Answer;
