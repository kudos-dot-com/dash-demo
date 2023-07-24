// getTopic : https://edufoundation-backend.vercel.app/api/topic/physics
// getChapter : https://edufoundation-backend.vercel.app/api/chapter/chapter/physics
// getQuestion : https://edufoundation-backend.vercel.app/api/question/gettopic/physics/Electric Charges and Fields/Level 2?page=1&limit=5

const base = "https://edufoundation-backend.vercel.app/api";
const api = {
    get:{
        topic: `${base}/topic/`,
        chapter: `${base}/chapter/`,
        question: `${base}/question/gettopic/`,
    },
    post:
    {
        question: `${base}/question`
    }
};

export default api;