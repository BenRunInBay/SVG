<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
    <h1>Scrolling designs</h1>
    <div class="web-example">
      <article>
        <img src="images/photos/optimized/autumn-forest-2021-08-26-18-27-39-utc.jpg" />
      </article>
      <article>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </article>
      <article class="two-items">
        <img
          src="images/photos/optimized/sunset-over-the-islands-of-halong-bay-in-northern-2021-08-26-19-00-32-utc.jpg"
        />
        <h3>Duis aute irure dolor in reprehenderit</h3>
      </article>
      <footer>
        <p>Example of a scrolling web design</p>
        <p>&copy;2022</p>
      </footer>
    </div>
</template>

<style scoped>
article img {
  width: 100%;
}
article h2 {
  text-align: center;
  margin: 15em 0 15em 0;
}
article.two-items {
  display: flex;
  flex-wrap: nowrap;
  background-color: #333;
}
article.two-items img {
  width: 50%;
  margin-right: 5em;
}
article.two-items h3 {
  margin-top: 8em;
}
footer {
  border-top: 1px solid #aaa;
  margin: 5em;
  padding-top: 2em;
  text-align: center;
}
@media screen and (max-width: 760px) {
  article h2 {
    text-align: center;
    margin: 5em 0 5em 0;
  }
  article.two-items {
    display: flex;
    flex-wrap: wrap;
  }
  article.two-items img {
    width: 100%;
    margin-right: 0;
  }
  article.two-items h3 {
    margin-top: 2em;
    margin-left: 1em;
    margin-bottom: 2em;
}
}
</style>