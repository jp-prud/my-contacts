import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesService from "../../services/CategoriesService";

import edit from "../../assets/images/icons/edit.svg";
import thrash from "../../assets/images/icons/thrash.svg";
import sad from "../../assets/images/icons/sad.svg";
// import emptyBox from "../../assets/images/emptyBox.svg";

import Button from "../../components/Button";
import { Loader, Modal } from "../../components";

import toast from "../../utils/toast";

import {
  Container,
  Header,
  EmptyListContainer,
  ErrorContainer,
  Card,
} from "./styles";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const categorysList = await CategoriesService.listCategories();
      setHasError(false);
      setCategories(categorysList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function handleTryAgain() {
    loadCategories();
  }

  function handleDeleteCategory(category) {
    setIsDeleteModalVisible(true);
    setCategoryBeingDeleted(category);
  }

  async function handleConfirmDeleteCategory() {
    try {
      setIsLoadingDelete(true);
      await CategoriesService.deleteCategory(categoryBeingDeleted.id);
      setCategories((prevState) =>
        prevState.filter(({ id }) => id !== categoryBeingDeleted.id)
      );
      setIsDeleteModalVisible(false);
      toast({
        type: "success",
        text: "Category deleted successfully!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Error on deleting category",
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setCategoryBeingDeleted(null);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        title={`Are you sure you want to delete the category ${categoryBeingDeleted?.name}?`}
        confirmLabel="Delete"
        onCancel={() => handleCloseDeleteModal()}
        onConfirm={() => handleConfirmDeleteCategory(categoryBeingDeleted)}
      >
        <p>This action cannot be undone!</p>
      </Modal>

      <Header
        justifyContent={
          hasError
            ? "flex-end"
            : categories.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && categories.length > 0 && (
          <strong>
            {categories.length}{" "}
            {categories.length === 1 ? "category" : "categories"}
          </strong>
        )}

        {!isLoading && (
          <div className="action-container">
            <Link to="/new">New Category</Link>
            <Link to="/new-category">New Category</Link>
          </div>
        )}
      </Header>
      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad icon" />
          <div className="error-details">
            <strong className="error-message">
              An error has occurred while loading your categorys!
            </strong>
            <Button type="button" onClick={() => handleTryAgain()}>
              Try again
            </Button>
          </div>
        </ErrorContainer>
      )}
      {!hasError && (
        <>
          {!categories.length && !isLoading && (
            <EmptyListContainer>
              <p>
                You do not have any registered category yet! Click in
                <strong> New Category </strong>
                above to register your first category!
              </p>
            </EmptyListContainer>
          )}

          {categories.map((category) => (
            <Card key={category.id}>
              <div className="info">
                <div className="title">
                  <strong>{category.name}</strong>
                </div>
              </div>

              <div className="actions">
                <Link to={`/edit-category/${category.id}`}>
                  <img src={edit} alt="Edit button" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleDeleteCategory(category)}
                >
                  <img src={thrash} alt="Delete button" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
