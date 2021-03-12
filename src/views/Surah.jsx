import React, { useState, useEffect } from 'react'
import Ayat from '../components/Ayat'
import Service from '../services'
import { useParams } from 'react-router-dom'

function Surah(props) {
    let { surahId } = useParams()
    let mount = true
    const [infoSurah, setInfoSurah] = useState([])
    const [ayahs, setAyahs] = useState([])

    useEffect(() => {
        if (mount) {
            Service.getInfoChapter(surahId).then((result) => {
                setInfoSurah(result.chapter)
            })

            Service.getChapterList(surahId).then((res) => {
                setAyahs(res.verses)
                console.log('result: ', res)
            })
        }

        mount = false
    }, [])

    return (
        <div className="surah-panel">
            <div className="surah-head">
                <div className="surah-info">
                    <p className="from text-capitalize">
                        {infoSurah.revelation_place}
                    </p>
                    <p className="surah">{infoSurah.name_complex}</p>
                    <p className="ayat">{infoSurah.verses_count} Ayat</p>
                </div>
            </div>
            <div className="col-12 list-ayah">
                {ayahs.map((ayah, key) => (
                    <Ayat
                        key={ayah.id}
                        number={key + 1}
                        verse={ayah.verse_key}
                        arabic={ayah.text_uthmani}
                    />
                ))}
            </div>
        </div>
    )
}

export default Surah
