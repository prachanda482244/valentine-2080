import { useState } from "react";
import Main from "./Main";

const Loading = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = () => {
        setData(name);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen absolute top-0 w-full bg-slate-900">
            {data && <Main name={data.split('')} />}
            <div className="flex items-center flex-col gap-2 w-80 mx-auto shadow-2xl p-10">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress} // Add event listener for key press
                    className="px-10 py-4 rounded-lg bg-white font-semibold outline-none outline-purple-800"
                    type="text"
                    placeholder="Enter here"
                />
                <button
                    onClick={handleSubmit}
                    className="py-2 px-8 rounded-full font-semibold text-white hover:bg-blue-950 bg-blue-800"
                >
                    Submit
                </button>
                {data === '' ? <div className="text-red-900 font-semibold">Name field cannot be empty</div> : data}
            </div>
            <div className="text-purple-700 flex flex-col items-center h-96 justify-center text-4xl font-bold">
                Loading . . .
            </div>
        </div>
    );
};

export default Loading;
