import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const QuestionAns = () => {
       const { user }: any = useAuth();
         const qnaData:any = useLoaderData();
         console.log(qnaData);
    return (
      <div className="mx-20 ">
        {qnaData.map((qna) => (
          <div className="shadow-lg flex mb-3 p-3 rounded-md justify-between">
            <div className="flex gap-3">
              <img
                className="rounded-full w-10 h-10"
                src="https://placeimg.com/80/80/people"
                alt=""
              />
              <div>
                <h1 className="font-bold">{qna.name}</h1>
                <h2>{qna.question}</h2>
              </div>
            </div>
            <button className="bg-sky-500 hover:bg-sky-700 p-3 rounded-xl">
       Go
            </button>
          </div>
        ))}
      </div>
    );
};

export default QuestionAns;