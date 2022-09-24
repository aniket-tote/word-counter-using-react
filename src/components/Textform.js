import React, { useEffect, useState } from "react";
// import ReactTooltip from 'react-tooltip';

export default function Textform() {
  const [text, setText] = useState("");
  const [currenttext, setcurrenttext] = useState("");
  const [newtext, setnewtext] = useState("");
  const [wordscount, setwordcount] = useState(0);
  const [linecount, setlinecount] = useState(0);
  const [paracount, setparacount] = useState(0);

  const douppercase = () => {
    setText(text.toUpperCase());
  };
  const dolowercase = () => {
    setText(text.toLowerCase());
  };
  const dosentencecase = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
  };
  useEffect(() => {
    setwordcount(text.trim().split(" ").length);
    setlinecount(text.split("\n").length);
    setparacount(text.split("\n\n").length);
    if (text === "") {
      setwordcount(0);
      setlinecount(0);
      setparacount(0);
    }
  }, [text]);
  const clear = () => {
    setText("");
  };

  const replaceintext = () => {
    setText(text.replace(currenttext, newtext));
    setcurrenttext("");
    setnewtext("");
  };

  const copytoclipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="home w-screen flex flex-col md:flex-row justify-center py-16 bg-slate-50">
      <div className="textformleft w-screen p-5 md:w-3/5 h-max flex flex-col justify-center space-y-4">
        <span className="heading text-3xl font-bold">Enter your text here</span>
        <textarea
          name="input"
          id="inputarea"
          value={text}
          className="w-11/12 bg-slate-100 p-3 border-2 border-slate-300 shadow-lg"
          onChange={(e) => setText(e.target.value)}
          placeholder="start typing.."
          rows="10"
        >
          <div className="w-max h-max px-4 py-2 bg-slate-600">C</div>
        </textarea>
        <div className="operations flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600"
            onClick={douppercase}
          >
            ABCD
          </button>
          <button
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600"
            onClick={dolowercase}
          >
            abcd
          </button>
          <button
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600"
            onClick={dosentencecase}
          >
            Abcd
          </button>
          <button
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600"
            onClick={clear}
          >
            Clear All
          </button>
          <button
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600"
            onClick={copytoclipboard}
          >
            Copy
          </button>
        </div>
        <p className="inf">
          Your text has {wordscount} words and {text.length} characters.
        </p>
        <p className="readtime">{wordscount * 0.3} seconds read.</p>
      </div>
      <div className="textformright w-screen md:w-1/5 h-max">
        <div className="details flex flex-col space-y-5 p-10 md:p-5">
          <span className="text-2xl">Details</span>
          <div className="words flex justify-between border-solid border-l-2 border-slate-600 px-2">
            <span>Words</span>
            <span>{wordscount}</span>
          </div>
          <div className="Character flex justify-between border-solid border-l-2 border-slate-600 px-2">
            <span>Character</span>
            <span>{text.length}</span>
          </div>
          <div className="lines flex justify-between border-solid border-l-2 border-slate-600 px-2">
            <span>Lines</span>
            <span>{linecount}</span>
          </div>
          <div className="para flex justify-between border-solid border-l-2 border-slate-600 px-2">
            <span>Paragraph</span>
            <span>{paracount}</span>
          </div>
          <div className="Read flex justify-between border-solid border-l-2 border-slate-600 px-2">
            <span>Reading Time</span>
            <span>{wordscount * 0.3} sec</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-600"></div>
        <div className="replacecontainer w-full p-10 md:p-5 flex flex-col space-y-4">
          <span className="text-2xl">Find and Replace</span>
          <div className="replace w-full flex flex-col space-y-1">
            <span>Current</span>
            <input
              type="text"
              name="current"
              value={currenttext}
              onChange={(e) => setcurrenttext(e.target.value)}
              className="bg-slate-100 px-4 py-2 border-2 border-solid border-slate-300 rounded"
            />
          </div>
          <div className="replacewith w-full flex flex-col space-y-1">
            <span>New</span>
            <input
              type="text"
              name="new"
              value={newtext}
              onChange={(e) => setnewtext(e.target.value)}
              className="bg-slate-100 px-4 py-2 border-2 border-solid border-slate-300 rounded"
            />
          </div>
          <button
            type="submit"
            name="new"
            onClick={replaceintext}
            className="px-4 py-2 w-max h-max border-2 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white shadow-md text-slate-600 self-center"
          >
            Replace
          </button>
        </div>
        <div className="w-full h-[1px] bg-slate-600"></div>
      </div>
    </div>
  );
}
