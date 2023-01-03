const normalizeUser = user => ({
  name: {
    first: user.firstName,
    middle: user.middleName,
    last: user.lastName,
  },
  phone: user.phone,
  email: user.email,
  password: user.password,
  address: {
    state: user.state,
    country: user.country,
    city: user.city,
    street: user.street,
    zip: user.zip,
    houseNumber: user.houseNumber,
  },
  image: {
    url: user.imageUrl,
    alt: user.imageAlt,
  },
  isBusiness: user.isBusiness,
});

export default normalizeUser;
