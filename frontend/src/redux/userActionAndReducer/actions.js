
const type = {
    STORE_DETAILS_OF_USER: 'store_details_of_user',
    Quiz_Question: 'Quiz_Question'
}

const setDataIntoStore = (dataObj) => {
    return {
        type: type.STORE_DETAILS_OF_USER,
        payload: dataObj
    }
}

const setQuizQuestion = (dataObj) => {
    return {
        type: type.Quiz_Question,
        payload: dataObj
    }
}

export {type, setDataIntoStore, setQuizQuestion};