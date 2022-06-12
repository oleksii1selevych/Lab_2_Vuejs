<template>
    <h2 class="text-base line-height-3">Task 3: Как только список создан, требуется создать еще один список, в который
        необходимо передавать значения, выбранные в первом списке. При этом, следует использовать шаблон созданный
        ранее.
    </h2>
    <div class="grid">
        <div class="col-4">
            <select-list @selection-changed="changeSelected" class="sel" :array="array"/>
        </div>
        <div class="col-4 col-offset-3">
            <select-list class="sel" :array="selectedItems"/>
        </div>
    </div>
</template>

<script>
import BreedService from '../services/breedService.js'
import SelectList from '../components/lists/SelectList.vue'

export default {
    components:{SelectList}, 
     data() {
        return {
            array: [],
            selectedItems:[],
        }
    },
    created() {
        this.breedService = new BreedService();
    },
    async mounted() {
        let results = await this.breedService.getAllBreedsAsync();
        this.array = Object.keys(results);
    },
    methods:{
        changeSelected(selectedItems){
            console.log(selectedItems);
            this.selectedItems = selectedItems;
        }
    }
}

</script>

<style scoped>
</style>