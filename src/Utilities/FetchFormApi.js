import axios from "axios";


const Base_Url = 'https://youtube-v31.p.rapidapi.com';

const options = {

  params: {
    maxResults: '50',
   
  },
  headers: {
    'X-RapidAPI-Key':'5c91567db7mshf3bd710dfcd7a33p186ec0jsn76db54a26bd9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>
{
   const {data} = await axios.get(`${Base_Url}/${url}`,options);
   return data;
}