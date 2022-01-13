<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
    <h1>Grid designs</h1>
    <div class="web-example">
        <div class="the-grid">
            <div>
                <img
                    src="images/photos/optimized/cute-dog-behind-the-kitchen-table-2021-08-27-09-55-58-utc.jpg"
                />
                <h3>Exercitation</h3>
            </div>
            <div>
                <img
                    src="images/photos/optimized/vitebsk-belarus-famous-landmark-is-assumption-ca-2021-08-27-09-35-39-utc.jpg"
                />
                <h3>Voluptate</h3>
            </div>
            <div>
                <img src="images/photos/optimized/forest-2021-08-27-09-43-04-utc.jpg" />
                <h3>Pariatur</h3>
            </div>
            <div>
                <img src="images/photos/optimized/autumn-forest-2021-08-26-18-27-39-utc.jpg" />
                <h3>Occaecat</h3>
            </div>
            <div>
                <img
                    src="images/photos/optimized/sunset-over-the-islands-of-halong-bay-in-northern-2021-08-26-19-00-32-utc.jpg"
                />
                <h3>Deserunt</h3>
            </div>
        </div>
        <footer>
            <p>Example of a grid web design</p>
            <p>&copy;2022</p>
        </footer>
    </div>
</template>

<style scoped>
.the-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1em;
}
.the-grid > div {
    border: 1px solid #888;
    display: flex;
    flex-direction: column;
    align-items: center;
}
footer {
    border-top: 1px solid #aaa;
    margin: 5em;
    padding-top: 2em;
    text-align: center;
}
@media screen and (max-width: 760px) {
}
</style>