<template>
    <h2 class="text-base line-height-3">Task 4: Требуется к предыдущему шаблону добавить возможность передачи заголовка над списком и возможность задавать классы CSS. 
        Если заголовок или класс не был передан, использовать значения по умолчанию.
    </h2>
      <div class="grid">
        <div class="col-4">
            <select-list @selection-changed="changeSelected" mode="red" :array="array"/>
        </div>
        <div class="col-4 col-offset-3">
            <select-list class="sel" :array="selectedItems" title="See selected items in this list"/>
        </div>
    </div>
</template>


<script>
import BreedService from '../services/breedService.js'
import SelectList from '../components/lists/SelectList.vue'

export default {
    components:{ SelectList }, 
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