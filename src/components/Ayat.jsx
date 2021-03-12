import { Fragment } from 'react'

const Ayat = (props) => {
    return (
        <Fragment>
            <div className="d-flex justify-content-between gap-4">
                <div className="number-verse">{props.number}</div>
                <div className="ayah flex-grow-1">
                    <div className="arabic text-end">{props.arabic}</div>
                    <p className="quran-text">arabic in text</p>
                    <p className="translate">Translate</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Ayat
