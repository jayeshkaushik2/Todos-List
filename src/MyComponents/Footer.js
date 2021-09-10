import React from 'react'

export const Footer = () => {
    let footerStyle = {
        padding: "10px",
        position: "relative",
        width: "100%",

    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
