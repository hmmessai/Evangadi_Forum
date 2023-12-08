import React from 'react'
import { LiaUserCircleSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Question = ({firstname,lastname,question,id}) => {
  return (
    <Link to={`/questions/${id}/answers`}
       className="text-decoration-none text-black" href="#">
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-md-flex align-items-center">
            <div className="user d-flex flex-column align-items-center">
              {/* user */}
              <div>
                <LiaUserCircleSolid></LiaUserCircleSolid>
              </div>
              <div>
                {firstname}
                {lastname}
              </div>
            </div>
            <div>{question}</div>
          </div>

          <div>
            {/* arrow  */}
            <span>
              <span>
                <FaAngleRight></FaAngleRight>
              </span>
            </span>
          </div>
        </div>
      
    </Link>
  );
}

export default Question
