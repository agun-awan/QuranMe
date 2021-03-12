import { Fragment, useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'

const Navbar = () => {
    const [sideOpen, setSideOpen] = useState(false)

    const openMenu = () => {
        setSideOpen(true)
    }

    return (
        <Fragment>
            <Sidemenu open={sideOpen} />

            <div className="header-panel">
                <div className="header-home">
                    <div className="d-flex justify-content-between">
                        <div className="burger-menu" onClick={openMenu}>
                            <div />
                            <div />
                        </div>
                        <div className="brand-icon flex-grow-1">
                            <h3>Quran Saku</h3>
                        </div>
                        <div className="form-search">
                            <h3>Search</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
