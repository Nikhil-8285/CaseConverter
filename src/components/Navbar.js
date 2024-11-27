import React from 'react';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.myStyle} bg-${props.myStyle} `}>
                <div className="container-fluid">
                    <a className="navbar-brand text-primary fs-2 " href="/">
                        {props.titles}
                    </a>

                    <div className={`form-check form-switch text${props.myStyle}`}>
                        <input className="form-check-input btn-lg" onClick={props.modeChanger} type="checkbox" role="switch" id="modeChangebtn" />
                        <label className="form-check-label border border-0 text-white" htmlFor="modeChangebtn">
                            <p className={`nav-link fs-5 text text-${props.myStyle === `light` ? `dark` : `light`} border border-0`}>{props.mode}</p>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    );
}
