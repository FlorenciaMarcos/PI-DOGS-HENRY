const { Router } = require("express");
const { Dog, Temperaments } = require("../db");
const {
  getDogs,
  createDogs,
  getDogsById,
} = require("../controllers/dogsControllers");
const dogsRouter = Router();

/*
GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
*/

/*
GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado
*/

dogsRouter.get("/", async (req, res) => {
  const { name } = req.query;
  console.log("estoy en el router");
  try {
    const listDogs = await getDogs(name);
    res.status(200).json(listDogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

/*
GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
*/

dogsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { createdInDB } = req.body;
  try {
    const dogId = await getDogsById(id, createdInDB);

    res.status(200).json(dogId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

dogsRouter.post("/", async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    image,
    temperament,
  } = req.body;

  try {
    let newDog = await createDogs(
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      image,
      temperament
    );

    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = dogsRouter;
