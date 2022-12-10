import PropTypes from "prop-types";
import { useState, forwardRef, useImperativeHandle } from "react";

import useErrors from "../../hooks/useErrors";

import Input from "../Input";
import Button from "../Button";
import FormGroup from "../FormGroup";

import { Form, ButtonContainer } from "./styles";

const CategoryForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && !errors.length;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setName(contact.name ?? "");
      },
      resetFields: () => {
        setName("");
      },
    }),
    []
  );

  function handleNameChange({ target }) {
    setName(target.value);

    if (!target.value) {
      return setError({ field: "name", message: "Name is required." });
    }

    return removeError("name");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          type="text"
          placeholder="Name *"
          value={name}
          error={getErrorMessageByFieldName("name")}
          onChange={(event) => handleNameChange(event)}
          disabled={isSubmitting}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
