import axios from 'axios';

const appFetch = async <T, >(url: string) => {

  try {

    const { data } = await axios.get<T>(url);
    return data;

  } catch (error) {

    if(axios.isAxiosError(error)) {
      console.log('Error message: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error message: ', error);
    throw new Error(`An unexpected error occurred: ${JSON.stringify(error, null, 3)}`);
    
  };
};

export default appFetch;