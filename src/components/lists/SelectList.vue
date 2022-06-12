<template>
    <h4>{{ title }}</h4>
    <select @change="changeSelected($event)" :class="selectClass" multiple :size="array.length">
        <option v-for="data in array" :value="data" :key="data">{{ data }}</option>
    </select>
</template>

<script>

export default {
    emits:['selectionChanged'],
    props:{
        array:{
            type:Array,
            required:true
        },
        mode:{
            type:String,
            required:false,
            default:'blue'
        },
        title:{
            type:String,
            required:false,
            default:'Default title'
        }
    },
    methods:{
        changeSelected(event){
           this.$emit('selectionChanged', this.getSelectedOptions(event.target));
        },
        getSelectedOptions(select){
            let results = [];
            let option = null;

            for(let i = 0; i < select.options.length;i++){
                option = select.options[i];
                console.log(option);
                if(option.selected)
                    results.push(option.value);
            }

            return results;
        }
    },
    computed:{
        selectClass(){
            return {
                'blueBorder':this.mode === 'blue',
                'redBorder':this.mode === 'red'
            }
        }
    }
}

</script>

<style scoped>

select{
    overflow: hidden;
    appearance:none;
    width: 15rem;
    font: inherit;
    text-align: center;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius:5px;
}

.blueBorder:focus{
  border-color: blueviolet;
  box-shadow: 0 0 1px 2px #6db4ff;
  outline: none;
}


.blueBorder{
    border-color: deepskyblue;    
}

.redBorder{
    border-color:red
}

.redBorder:focus{
  border-color: darkred;
  box-shadow: 0 0 1px 2px lawngreen;
  outline: none;
}

</style>