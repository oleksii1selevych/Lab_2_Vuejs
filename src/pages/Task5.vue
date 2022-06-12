<template>
    <h2 class="text-base line-height-3">Task 5: Поскольку не всегда удобно взаимодействовать с “выпадающим” списком, давайте создадим свой шаблон, в котором в блоки поместим породы собак, т.е. 1 блок(div) - 1 порода собаки. Иными словами, создадим свой список. 
        При клике на породу собаки “выбранная” таким образом порода выделяется в списке и заносится в другой для отображения.
    </h2>
    <div class="grid">
        <div class="col-4">
            <custom-list @item-selection-changed="changeSelection" title="Select from this list" mode="red" :array="array"/>
        </div>
        <div class="col-4 col-offset-2">
            <custom-list :array="selectedItems"/>
        </div>
    </div>
</template>

<script>
import BreedService from '../services/breedService.js'
import CustomList from '../components/lists/CustomList.vue'

export default {
    components:{ CustomList },
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
        changeSelection(breedTitle, isSelected){
            if(isSelected){
                this.selectedItems.push(breedTitle);
            }else{
                this.selectedItems = this.selectedItems.filter(item => item !== breedTitle);
            }
            console.log(this.selectedItems);
        }
    }
}

    
</script>

<style scoped>
</style>