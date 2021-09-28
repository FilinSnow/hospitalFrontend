import axios from "axios";



const api = {
    getAllRecords: async () => {
        const token = JSON.parse(localStorage.getItem('token'));
        return await axios.request({
            url: 'http://localhost:4000/getAllRecords',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token,
            },

        });
    },
    createNewRecord: async (record) => {
        console.log(record);
        const token = JSON.parse(localStorage.getItem('token'));
        return await axios.request({
            url: 'http://localhost:4000/createNewRecord',
            method: 'post',
            data: record,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token,
            },
        })
    },
    changeInfoRecord: async (record) => {
        const token = JSON.parse(localStorage.getItem('token'));
        return await axios.request(
            {
                url: 'http://localhost:4000/updateInfoRecord',
                method: 'put',
                data: record,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token,
                },
            }
        )
    },
    deleteRecord: async (id) => {
        const token = JSON.parse(localStorage.getItem('token'));
        return await axios.request({
            url: `http://localhost:4000/deleteRecord/${id}`,
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token,
            },
        }
        )
    },
    login: async (data) => {
        return await axios.post(`http://localhost:4000/login`, data)
    },
    register: async (data) => {
        return await axios.post(`http://localhost:4000/registration`, data)
    }
}

export default api;