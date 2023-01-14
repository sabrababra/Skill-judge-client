
import React from 'react';

const TopQuestions = () => {
    return (
				<div>
					<h2 className="text-2xl text-orange-400 md:text-4xl font-bold ">
						Top Problem Solving Question
					</h2>
					<div className="grid grid-cols-1 gap-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div className="mt-5 w-full p-5 bg-slate-400 rounded-lg text-white shadow-lg">
							<h4 className="text-xl font-semibold">
								Mini-Max Sum This well-known challenge, which asks the
								interviewee.
							</h4>
							<p className="mt-2 md:mt-5 text-justify">
								This well-known challenge, which asks the interviewee to find
								the maximum and minimum sum among an array of given numbers...
							</p>
							<div className="text-center md:text-left mt-5">
								<button className="btn btn-sm btn-outline border-slate-100 text-white">
									See Details
								</button>
							</div>
						</div>
						<div className="mt-5 w-full p-5 bg-slate-400 rounded-lg text-white shadow-lg">
							<h4 className="text-xl font-semibold">
								Organizing Containers of Balls
							</h4>
							<p className="mt-2 md:mt-5 text-justify">
								This problem tests the candidate’s knowledge of a variety of
								programming concepts, like 2D arrays, sorting and iteration.
								Organizing colored balls in containers based on various
								conditions is a common question asked in competitive...
							</p>
							<div className="text-center md:text-left mt-5">
								<button className="btn btn-sm btn-outline border-slate-100 text-white">
									See Details
								</button>
							</div>
						</div>
						<div className="mt-5 w-full p-5 bg-slate-400 rounded-lg text-white shadow-lg">
							<h4 className="text-xl font-semibold">Build a Palindrome</h4>
							<p className="mt-2 md:mt-5 text-justify">
								This is a tough problem to crack, and the candidate’s knowledge
								of concepts like strings and dynamic programming plays a
								significant role in solving this challenge. This problem-solving....
							</p>
							<div className="text-center md:text-left mt-5">
								<button className="btn btn-sm btn-outline border-slate-100 text-white">
									See Details
								</button>
							</div>
						</div>
					</div>
				</div>
		);
};

export default TopQuestions;