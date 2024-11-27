import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('CAPITALIZE Your Ideas with One Click!');

    const heandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const heandleLcClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const heandleCopyText = () => {
        let copyText = text;
        navigator.clipboard.writeText(copyText).then(() => {
            alert('Text copied to clipboard!');
        });
    };

    const heandleReadText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const heandleRemoveText = () => {
        let removeText = '';
        setText(removeText);
    };

    const heandleOnChange = event => {
        setText(event.target.value);
    };

    // prettier-ignore

    return (
    <>
      <div className="my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control fs-5" id="myBox" value={text} onChange={heandleOnChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={heandleUpClick}>Click to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={heandleLcClick}>Click to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={heandleCopyText}>Click to Copy text</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={heandleRemoveText}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={heandleReadText} type="submit" >Read Text</button>


      </div>

      <div className="container my-4">
        <h1>Your text Summary</h1>
        <p className="fs-5"> {text.replace(/\n/g, " ").split(" ").filter((value) => value !== "").length} words </p>
        <p className="fs-5">{text.trim().length} characters</p>
        <p className="fs-5"> It takes {0.008 * text.replace(/\n/g, " ").split(" ").filter((value) => value !== "").length } minutes to read.</p>
        <h1>Preview</h1>
        <p className="fs-5">{text}</p>
      </div>
    </>
  );
}
