import capstoneApi from '../api/capstoneApi';

export const getCategories = async () => {
  let categories = [];

  await capstoneApi
    .get('/categories')
    .then(({ data }) => {
      categories = data;
    })
    .catch((e) => console.error(e));

  return categories;
};

export const createCategorie = async (name) => {
  let status;
  await capstoneApi
    .post(`/categories`, { name })
    .then((token) => {
      console.log(token);
      status = true;
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });

  return status;
};

export const updateCategorie = async (id, newName) => {

  await capstoneApi
    .patch(`/categories/${id}`, { name: newName })
    .then((token) => {
      console.log(token);
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });
};

export const deleteCategorie = async (id) => {
  await capstoneApi
    .delete(`/categories/${id}`)
    .then((token) => {
      console.log(token);
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });

};
