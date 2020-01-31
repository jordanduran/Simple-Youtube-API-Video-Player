import axios from 'axios';

const KEY = 'AIzaSyCZvt7CNrnMSG8JJrERlwFIRAp5dqj2yJ0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
