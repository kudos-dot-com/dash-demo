// getTopic : https://edufoundation-backend.vercel.app/api/topic/physics
// getChapter : https://edufoundation-backend.vercel.app/api/chapter/chapter/physics
// getQuestion : https://edufoundation-backend.vercel.app/api/question/gettopic/physics/Electric%20Charges%20and%20Fields/Level%201?page=1&limit=1
// getAll Questions: https://edufoundation-backend.vercel.app/api/question/getall
// delQuestion : https://edufoundation-backend.vercel.app/api/question/delete/${question_id}
// editQuestion: https://edufoundation-backend.vercel.app/api/question/edit, {all details of question with same id}

const base = "https://edufoundation-backend.vercel.app/api";
const api = {
    get:{
        topic: `${base}/topic/`,
        chapter: `${base}/chapter/`,
        question: `${base}/question/gettopic/`,
        allQues : `${base}/question/getall`,
    },
    post:
    {
        question: `${base}/question`
    },
    edit:
    {
        edit : `${base}/question/edit`
    },
    del:
    {
        delete : `${base}/question/delete/`
    }
};

export default api;