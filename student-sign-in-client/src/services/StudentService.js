import axios from 'axios'

let base_url = '/api/students'

export default {

    getAllStudents() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addStudent(student) {
        return axios.post(base_url, student).then(response => {
            return response.data
        })
    },

    updateStudent(student) {
        // create URL in the form /api/students/1
        return axios.patch(`${base_url}/${student.id}`, student).then(response => {
            return response.data
        })
    },

    deleteStudent(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    }
}