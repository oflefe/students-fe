import * as React from 'react';

function Header() {
    return (
        <div className="text-center">
            <img
                src="/logo192.png"
                width="192"
                className="img-thumbnail"
                style={{ marginTop: "20px" }}
                alt={"alt text"}
           />
            <hr />
            <h5>
                <i>presents</i>
            </h5>
            <h1>App with React + Django</h1>
        </div>
    );
}

export default Header;