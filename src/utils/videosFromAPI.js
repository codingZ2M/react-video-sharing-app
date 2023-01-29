import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '78cf854d11msh83e405a201dcac2p11a0c5jsn528da480c8ab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export const fetchVideosFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}