const deleteById = async (collection, id) => {
  const dataRes = collection.deleteOne({ id });
  return dataRes;
};

module.exports = { deleteById };
