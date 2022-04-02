import React from "react";

const Header = ({ course}: {course: string}) => {
    return (
        <div>
            <h1>{course}</h1>
        </div>
    );
}

export default Header;
