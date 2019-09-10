import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bef52475429f3a15aef619e1032c51e63fa5bf2b68e3b0bf5f970705db3622bb'
    }
});