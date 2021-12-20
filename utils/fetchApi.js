import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': '5b913392e2mshc374dd11f171b1cp102a42jsn397157e03eab'
        }
    });
    return data;
}