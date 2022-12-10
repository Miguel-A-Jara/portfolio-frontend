import axios from 'axios';

const appSend = async <T, >(url: string, body: unknown, token?: string) => {

  try {

    const { data } = await axios.post<T>(url, { query: body }, {
      headers: token ? { 'Authorization': `bearer ${token}`} : {}
    });

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

export default appSend;