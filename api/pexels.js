import axios from 'axios'



export const getImages= async (searchTerm = 'programming') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers:{
            Authorization: '563492ad6f9170000100000197e77ca38b70477e86625fdb7472bb78'
        }
})
