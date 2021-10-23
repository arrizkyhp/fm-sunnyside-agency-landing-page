import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'


export default function Button(props) {

    const className = [props.className];
    if(props.isDesktop) className.push("btn-desktop");
    if(props.isMobile) className.push("btn-mobile");
    if(props.isAboutYellow) className.push("link-about--yellow");
    if(props.isAboutRed) className.push("link-about--red");

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.type === "link") {
        if(props.isExternal) {
            return (
                // eslint-disable-next-line
                <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    target={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                >
                    {props.children}
                </Link>
            )
        }
    }

    return (
        <button
            className={`btn${className.join(" ")}`}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isDesktop: propTypes.bool,
    isAboutYellow: propTypes.bool,
    isAboutRed: propTypes.bool,
    isMobile: propTypes.bool,
    isExternal: propTypes.bool
}