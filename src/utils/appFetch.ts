import axios from 'axios';

const appFetch = async (url: string) => {

  try {

    const { data } = await axios.get(url);
    return data;

  } catch (error) {

    if(axios.isAxiosError(error)) {
      console.log('Error message: ', error.message);
      return new Error(error.message);
    }
    console.log('Unexpected error message: ', error);
    return new Error('An unexpected error occurred: ');
    
  };
};

export default appFetch;