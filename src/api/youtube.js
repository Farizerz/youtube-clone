import axios from 'axios';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube.com/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyDF_FQRXTDmNtX7M7YAtYxUsMjtqkZcJJg'
    }
});