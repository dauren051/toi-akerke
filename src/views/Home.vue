<template>
    <div
        class="monitors-container"
    >
        <div 
            v-for="(items,index) in servers" 
            :key="index"
        >
            <h4>{{ items.title }}</h4>
            <div v-if="items.data">
                <div
                    class="container-box"
                >
                    <div 
                        class="key-val-list"
                        v-for="(value, name, index) in items.data.CPU"
                        :key="index"
                    >   
                        <span>
                            {{ name }}
                        </span>
                        <span>
                            {{ value }}
                        </span>
                    </div>
                </div>
                <div
                    class="container-box"
                >
                    <div 
                        class="key-val-list"
                        v-for="(value, name, index) in items.data.CurrentCPU"
                        :key="index"
                    >   
                        <b-progress class="mt-2" :max="items.data.RAM.Total" show-value>
                            <b-progress-bar :value="items.data.RAM.Cache"     variant="success"></b-progress-bar>
                        </b-progress>
                        <span>
                            {{ name }}
                        </span>
                        <span>
                            {{ value }}
                        </span>
                    </div>
                </div>
                <div
                    class="container-box"
                >
                    <div 
                        class="key-val-list"
                        v-for="(value, name, index) in items.data.RAM"
                        :key="index"
                    >   
                        <span>
                            {{ name }}
                        </span>
                        <span>
                            {{ value }}
                        </span>
                    </div>
                    <b-progress class="mt-2" :max="items.data.RAM.Total" show-value>
                        <b-progress-bar :value="items.data.RAM.Cache"     variant="warning"></b-progress-bar>
                        <b-progress-bar :value="items.data.RAM.Free"      variant="success"></b-progress-bar>
                        <b-progress-bar :value="items.data.RAM.Shared"    variant="info"></b-progress-bar>
                        <b-progress-bar :value="items.data.RAM.Used"      variant="secondary"></b-progress-bar>
                        <b-progress-bar :value="items.data.RAM.Available" variant="primary"></b-progress-bar>
                    </b-progress>
                    <div class="ram-legend-container">
                        <div class="ram-legend">
                            <b-icon 
                                icon="tag-fill" 
                                class="pr-2"
                                variant="warning"
                            >
                            </b-icon>
                            <span>Cache</span>
                        </div>
                        <div class="ram-legend">
                            <b-icon icon="tag-fill" class="pr-2" variant="success"></b-icon>
                            <span>Free</span>
                        </div>
                        <div class="ram-legend">
                            <b-icon icon="tag-fill" class="pr-2" variant="info"></b-icon>
                            <span>Shared</span>
                        </div>
                        <div class="ram-legend">
                            <b-icon icon="tag-fill" class="pr-2" variant="secondary"></b-icon>
                            <span>Used</span>
                        </div>
                        <div class="ram-legend">
                            <b-icon icon="tag-fill" variant="primary"></b-icon>
                            <span>Available</span>
                        </div>
                    </div>
                </div>
                <div
                    class="container-box"
                >
                    <b-table hover :items="items.data.DISK"></b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: {

    },
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            servers:"servers"
        })
    },
    methods:{
        ...mapActions({
            getServers:"getServers"
        })
    },
    async mounted(){
        await this.getServers()
    }
}
</script>
<style scoped>
.monitors-container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
}
.key-val-list{
    display: flex;
    justify-content: space-between;
}
.container-box{
    border: 1px solid black;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 40px;
}
.ram-legend{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.ram-legend-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>