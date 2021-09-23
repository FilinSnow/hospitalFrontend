import axios from "axios";


const api = {
    getAllRecords: async () => {
        return await axios.get('http://localhost:4000/getAllRecords');
    },
    createNewRecord: async (record) => {
        return await axios.post(
            'http://localhost:4000/createNewRecord',
            record
        )
    },
    changeInfoRecord: async (record) => {
        return await axios.put(
            'http://localhost:4000/updateInfoRecord',
            record
        )
    }
}

export default api;