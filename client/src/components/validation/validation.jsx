export function validate(input) {
  let errors = {};

  if (!input.name.trim()) {
    //input es mi estado local
    errors.name = "Write a name, please";
  } else if (parseInt(input.name)) {
    errors.name =
      "Name is invalid, please use at least one letter at the beginning";
  }

  if (!input.image) {
    errors.image = "Upload an image, please";
  }
  if (!input.temperament) {
    errors.temperament = "Select one or more temperaments, please";
  }
  if (input.heightMin < 0 || input.heightMin > 100) {
    errors.heightMin =
      "Require field, please write a valid number between 1 and 100";
  }
  if (input.heightMax < 1 || input.heightMax > 100) {
    errors.heightMax =
      "Require field, please write a valid number between 1 and 100";
  }
  if (input.heightMax < input.heightMin) {
    errors.heightMin =
      "The minimum value cannot be greater than the maximum value";
  }

  if (input.weightMin < 0 || input.weightMin > 100) {
    errors.weightMin =
      "Require field, please write a valid number between 1 and 100";
  }
  if (input.weightMax < 1 || input.weightMax > 100) {
    errors.weightMax =
      "Require field, please write a valid number between 1 and 100";
  }
  if (input.weightMax < input.weightMin) {
    errors.weightMin =
      "The minimum value cannot be greater than the maximum value";
  }

  if (input.lmin < 0 || input.lmin > 19) {
    errors.lmin = "Require field, please write a valid number between 1 and 19";
  }
  if (input.lmax < 0 || input.lmax > 19) {
    errors.lmax = "Require field, please write a valid number between 1 and 19";
  }
  if (input.lmax < 10 && input.lmax < input.lmin) {
    errors.lmin = "The minimum value cannot be greater than the maximum value";
  }
  return errors;
}
