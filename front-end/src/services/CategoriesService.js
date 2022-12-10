import HttpClient from "./utils/HttpClient";

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient("http://localhost:3001");
  }

  listCategories() {
    return this.HttpClient.get("/categories");
  }

  listCategory(categoryData) {
    return this.HttpClient.post("/categories", { body: categoryData });
  }

  async getCategoryById(id) {
    return this.HttpClient.get(`/categories/${id}`);
  }

  createCategory(categoryData) {
    return this.HttpClient.post("/categories", { body: categoryData });
  }

  updateCategory(id, categoryData) {
    return this.HttpClient.put(`/categories/${id}`, { body: categoryData });
  }

  deleteCategory(id) {
    return this.HttpClient.delete(`/categories/${id}`);
  }
}

export default new CategoriesService();
