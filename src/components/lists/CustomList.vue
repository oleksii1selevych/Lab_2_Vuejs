<template>
    <h4> {{ title }}</h4>
    <div :class="['flex', 'flex-column',dataContainerClass, 'dataContainer']">
        <custom-list-item  @item-selection-changed="changeItemSelection"  v-for="data in array" :mode="mode" :key="data" :breedTitle="data"/>
    </div>
</template>


<script>

import CustomListItem from './CustomListItem.vue'

export default {
    components:{CustomListItem},
    props:{
        array:{
            type:Array,
            required:true,
        },
        mode:{
            type:String,
            required:false,
            default:'blue',
        },
        title:{
            type:String,
            required:false,
            default:'Default title'
        }
    },
    emits:['itemSelectionChanged'],
    computed:{
        dataContainerClass(){
            return {
                'blueBorder':this.mode === 'blue',
                'redBorder':this.mode === 'red'
            }
        }
    },
    methods:{
        changeItemSelection(breedTitle, isSelected){
            this.$emit('itemSelectionChanged', breedTitle, isSelected);
        }
    }
}

</script>


<style scoped>


.dataContainer{
    border: 1px solid transparent;
    border-radius: 5px;
}

.blueBorder {
    border-color: deepskyblue;
}

.redBorder {
    border-color:lightpink
}

</style>

