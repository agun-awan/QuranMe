import { Fragment, useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import List from '../components/List'
import Service from '../services'
import { Link } from 'react-router-dom'
import Read from '../images/read.png'

const Home = ({ users }) => {
    const [listSurah, setListSurah] = useState([])

    useEffect(() => {
        Service.getListSurah().then((chapter) => {
            setListSurah(chapter.chapters)
        })
    }, [])

    return (
        <Fragment>
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Banner />
                    <div className="mt-4">
                        <ul
                            className="nav nav-pills nav-fill"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                >
                                    Surah
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Juz
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    Hadits
                                </Link>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                {listSurah.map((surah) => {
                                    return (
                                        <List
                                            key={surah.id}
                                            no={surah.id}
                                            surah={surah.name_complex}
                                            arabic={surah.name_arabic}
                                            revelation={surah.revelation_place}
                                            ayah={surah.verses_count}
                                        />
                                    )
                                })}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <div className="d-flex justify-content-center fw-bold mt-5">
                                    Content Not Provided.
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="contact"
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                <div className="d-flex justify-content-center fw-bold mt-5">
                                    Content Not Provided.
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <div className="footer-menu">
                    <div className="left-menu">Left</div>
                    <div className="center-menu">
                        <img src={Read} alt="read" />
                    </div>
                    <div className="right-menu">Right</div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Home
