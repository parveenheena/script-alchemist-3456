
const type = {
    STORE_DETAILS_OF_USER: 'store_details_of_user'
}

const setDataIntoStore = (dataObj) => {
    return {
        type: type.STORE_DETAILS_OF_USER,
        payload: dataObj
    }
}

export {type, setDataIntoStore};