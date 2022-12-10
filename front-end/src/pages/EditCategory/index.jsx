import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import toast from "../../utils/toast";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

import CategoriesService from "../../services/CategoriesService";

import { Loader, CategoryForm, PageHeader } from '../../components';

export default function EditCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const categoryFormRef = useRef(null);
  const safeAsyncAction = useSafeAsyncAction();

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const categoryDate = await CategoriesService.getCategoryById(id);

        safeAsyncAction(() => {
          categoryFormRef.current.setFieldsValues(categoryDate);
          setIsLoading(false);
          setCategoryName(categoryDate.name);
        });
      } catch {
        safeAsyncAction(() => {
          push("/");
          toast({
            type: "danger",
            text: "Category not found.",
          });
        });
      }
    }

    loadContact();
  }, [id, push, safeAsyncAction]);

  async function handleSubmit(formData) {
    try {
      const { name } = formData;

      const contact = {
        name,
      };

      await CategoriesService.updateCategory(id, contact).then(
        (updatedCategoryDate) => setCategoryName(updatedCategoryDate.name)
      );

      toast({
        type: "success",
        text: "Category updated successfully!",
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: "danger",
        text: "An error occurred while editing your category.",
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? "Loading..." : `Edit ${categoryName}`} />
      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Save Changes"
        onSubmit={(formData) => handleSubmit(formData)}
      />
    </>
  );
}
