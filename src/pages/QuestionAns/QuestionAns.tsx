import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const QuestionAns = () => {
    const [search, setSearch] = useState("");
    const [qnaData, setQnaData] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_URL}/search-qna?searchQuery=${search}`
        )
            .then((res) => res.json())
            .then((data) => {
                setQnaData(data);
            })
            .catch((error) => {});
    }, [search]);
    const handleSearch: any = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
    };
    return (
        <div className="mx-20 ">
            <form onSubmit={handleSearch} className="flex justify-center">
                <input
                    type="text"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type here"
                    className="input w-full max-w-xs input-bordered"
                />
                <button className="text-2xl -ml-7" type="submit">
                    <AiOutlineSearch />
                </button>
            </form>
            <div className="flex justify-end">
                <label
                    htmlFor="my-modal-3"
                    className="rounded-xl p-2 text-white bg-slate-700"
                >
                    Add Your Question
                </label>

                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">
                            Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                        </p>
                    </div>
                </div>
            </div>
            {qnaData.map((qna: any) => (
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
                    <Link
                        to={`../singleqna/${qna._id}`}
                        className="bg-sky-500 hover:bg-sky-700 p-3 rounded-xl"
                    >
                        Go
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default QuestionAns;
