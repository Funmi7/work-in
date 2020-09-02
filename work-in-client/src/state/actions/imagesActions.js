import axioswithAuth from "../../utils/axiosWithAuth";

export const GET_IMAGES_SUCCESSFUL = "GET_IMAGES_SUCCESSFUL";
export const GET_ERRORS = "GET_ERRORS";

const url = "http://localhost:3000/images/";


export const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors
})

export const addImage = (image) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      await axioswithAuth.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
     console.log(error)
    }
  };
};

export const startLoadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await axioswithAuth()
    }
  }
}