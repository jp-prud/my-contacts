import React, { useRef } from "react";
import { PageHeader, CategoryForm } from "../../components";
import CategoriesService from "../../services/CategoriesService";
import toast from "../../utils/toast";

export default function NewCategory() {
  const categoryFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const { name } = formData;

      const category = {
        name,
      };

      await CategoriesService.createCategory(category);

      categoryFormRef.current.resetFields();

      toast({
        type: "success",
        text: "Category saved successfully!",
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: "danger",
        text: "An error occurred while creating your category!",
      });
    }
  }

  return (
    <>
      <PageHeader title="New Category" />
      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Save Category"
        onSubmit={(formData) => handleSubmit(formData)}
      />
    </>
  );
}
