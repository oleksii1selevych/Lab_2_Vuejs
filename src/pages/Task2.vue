<template>
    <h2 class="text-base line-height-3">Task 2: Теперь, потребуется создать компонент Vue.component, который будет
        формировать тот же список, только по переданным ему параметрам.
    </h2>
    <select-list class="sel" :array="array"/>
</template>

<script>
import BreedService from '../services/breedService.js'
import SelectList from '../components/lists/SelectList.vue'

export default {
  components:{ SelectList },
  data() {
        return {
            array: [],
        }
    },
    created() {
        this.breedService = new BreedService();
    },
    async mounted() {
        let results = await this.breedService.getAllBreedsAsync();
        this.array = Object.keys(results);
    },
}

</script>


<style scoped>
</style>