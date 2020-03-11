<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name" />
    </p>

    <p>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit" />
    </p>
  </form>
</template>

<script>
export default {
  name: "ProductReview",
  data() {
    return {
      name: "",
      review: "",
      rating: "",
      errors: []
    };
  },
  methods: {
    onSubmit() {
      const reviewData = {
        name: this.name,
        review: this.review,
        rating: this.review,
      };
      this.$parent.$emit('review-form', reviewData)
      this.clearForm()
    },
    clearForm() {
      this.name = "";
      this.review = "";
      this.rating = "";
      this.errors = [];
    }
  }
};
</script>

<style scoped>
.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>