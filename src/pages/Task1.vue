<template>
    <h2 class="text-base line-height-3">Task 1: Создать список используя тег select, для наполнения списка использовать
        предыдущую лабораторную работу №1 с породами собак. Для наглядности, можно использовать атрибут size, чтобы
        отобразить весь список, а не открывать частями. Для дальнейшей работы, потребуется также указать атрибут
        multiple.
    </h2>
    <select multiple :size="breedsCount">
        <option v-for="(_, key) in breedsObj" :key="key" :value="key"> {{ key }}</option>
    </select>
</template>

<script>

import BreedService from '../services/breedService.js'

export default {
    data() {
        return {
            breedsObj: null,
        }
    },
    created() {
        this.breedService = new BreedService();
    },
    async mounted() {
        let results = await this.breedService.getAllBreedsAsync();
        this.breedsObj = results;
    },
    computed: {
        breedsCount() {
            if (this.breedsObj !== undefined && this.breedsObj !== null) {
                let keys = Object.keys(this.breedsObj);
                return keys.length;
            }
        }
    }
}

</script>

<style scoped>

select {
    overflow: hidden;
    appearance:none;
    width: 15rem;
    font: inherit;
    text-align: center;
    cursor: pointer;
    border: 2px solid deepskyblue;
    border-radius:5px;
}

select:focus {
  border-color: blueviolet;
  box-shadow: 0 0 1px 2px #6db4ff;
  outline: none;
}

</style>

