const { Dog, Temperaments } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getApiDogs = async (name) => {
  const apiDogsUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const apiDogs = await apiDogsUrl.data.map((dog) => {
    return {
      name: dog.name,
      id: dog.id,
      image: dog?.image.url,
      temperament: dog?.temperament,
      height_min: dog?.height?.metric,
      height_max: dog?.height?.metric,
      weight_min: parseInt(dog.weight.imperial.split("-")[0]),
      weight_max: parseInt(dog.weight.imperial.split("-")[1]),
      life_span: dog?.life_span,
    };
  });
  if (name) {
    //filtrar por nombre
    const dogName = await apiDogs.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    //si hay algún nombre
    return dogName;
  } else {
    //devolver todo
    return apiDogs;
  }
};

const getDogsById = async (id, createdInDB) => {
  if (createdInDB) {
    const dbDog = await Dog.findOne({
      where: {
        id: id,
      },
    });
    return dbDog;
  } else {
    const apiDogsUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const dogId = await apiDogsUrl.data.filter((dog) => dog.id == id);
    const detailDog = dogId[0];
    return detailDog;
  }
};

const getDbDogs = async (name) => {
  if (name) {
    //filtrar por nombre
    return await Dog.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: {
        model: Temperaments,
        through: {
          attributes: [],
        },
      },
    });
  } else {
    //devolver todo
    return await Dog.findAll({
      //me traigo la info de la base de datos del modelo Dog que incluye el mod Temperament
      include: {
        //porque si no lo incluyo al crear un dog nunca me va a traer el dog con el temperamento
        model: Temperaments,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  }
};
const getDogs = async (name) => {
  const apiDogs = await getApiDogs(name);
  const dbDogs = await getDbDogs(name);
  return dbDogs.concat(apiDogs); ////concatenando los datos de la api y DB
};

const createDogs = async (
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  image,
  temperament
) => {
  let height = height_min + " - " + height_max;
  let weight = weight_min + " - " + weight_max;
  console.log(name);
  const breedCreated = await Dog.create({
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    image,
  });

  const temperamentDb = await Temperaments.findAll({
    where: {
      name: temperament,
    },
  });

  await breedCreated.addTemperaments(temperamentDb);
};

module.exports = {
  getDogs,
  createDogs,
  getDogsById,
};
