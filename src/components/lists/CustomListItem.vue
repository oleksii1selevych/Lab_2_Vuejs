<template>
    <div @click="changeSelection" :class="['breedBlock', selectedClass]">
        {{ breedTitle }}
    </div>
</template>


<script>

export default {
    props: {
        breedTitle: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            required: false,
            default: 'blue'
        }
    },
    emits: ['itemSelectionChanged'],
    data() {
        return {
            isSelected: false,
        }
    },
    methods: {
        changeSelection() {
            this.isSelected = !this.isSelected;
            this.$emit('itemSelectionChanged', this.breedTitle, this.isSelected);
        }
    },
    computed: {
        selectedClass() {
            return {
                'blueSelection': this.isSelected && this.mode === 'blue',
                'redSelection': this.isSelected && this.mode === 'red'
             }
        }
    }
}

</script>


<style scoped>
.breedBlock {
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 1.5rem;
    text-align: center;
    cursor: pointer;
}

.blueSelection {
    background-color: deepskyblue;
    color: white;
}

.redSelection {
    background-color: lightpink;
}
</style>