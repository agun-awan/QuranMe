import React from 'react'
import { NavLink } from 'react-router-dom'

const List = (props) => {
    return (
        <NavLink to={`/surah/${props.no}`} className="row card-surah">
            <div className="col-2">
                <div className="number-verse">{props.no}</div>
            </div>
            <div className="col-6">
                <div className="surah-panel">
                    <p>{props.surah}</p>
                    <p>
                        {props.revelation} - {props.ayah} Ayat
                    </p>
                </div>
            </div>
            <div className="col-4">
                <div className="arabic-surah">{props.arabic}</div>
            </div>
        </NavLink>
    )
}

export default List
