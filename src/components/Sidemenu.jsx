import React, { Fragment } from 'react'

const Sidemenu = (props) => {
    return (
        <Fragment>
            <div className={`sidemenu ${props.open ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                    <li>
                        <a href="#">Link 4</a>
                    </li>
                    <li>
                        <a href="#">Link 5</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidemenu
