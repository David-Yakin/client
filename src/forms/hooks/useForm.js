import { useState, useCallback } from "react";
import { object, func } from "prop-types";
import Joi from "joi";

const useForm = (initialForm, schema, handleSubmit) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleReset = () => {
    setData(initialForm);
    setErrors({});
  };

  const validateProperty = useCallback(
    ({ name, value }) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage) setErrors(prev => ({ ...prev, [name]: errorMessage }));
      else
        setErrors(prev => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setData(prev => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [schema, data]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  return { data, errors, onSubmit, handleChange, handleReset, validateForm };
};

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  options: object.isRequired,
  handleSubmit: func.isRequired,
  validationOptions: object.isRequired,
};

useForm.defaultProps = {
  validationOptions: { abortEarly: false },
};

export default useForm;
