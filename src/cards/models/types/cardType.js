import { shape, string, number, arrayOf, oneOfType } from "prop-types";
import addressType from "./addressTypye";
import imageType from "./imageType";

const cardType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  web: oneOfType([string]).isRequired,
  email: string.isRequired,
  image: imageType.isRequired,
  address: addressType.isRequired,
  likes: arrayOf(oneOfType([string])),
  user_id: string.isRequired,
});

export default cardType;
