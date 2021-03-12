import axios from 'axios'

const BASE = 'https://api.quran.com/api/v4'

const GET = async (path) => {
    const surah = new Promise((resolve, reject) => {
        axios.get(`${BASE}/${path}?language=id`).then(
            (result) => {
                resolve(result.data)
            },
            (e) => {
                reject(e)
            }
        )
    })

    return surah
}

// Get Function
const getListSurah = () => GET('chapters')
const getInfoChapter = (chapter) => GET(`chapters/${chapter}`)
const getChapterList = (chapter) =>
    GET(`quran/verses/uthmani?chapter_number=${chapter}`)

const Service = {
    getListSurah,
    getInfoChapter,
    getChapterList,
}

export default Service
