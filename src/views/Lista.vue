<template>
    <div class="Lista">
        <h1 class="primary">Lista de Posts</h1>
        <div v-for="employee in employees" :key="employee.id" @click="detalhes(employee)">
            <span>{{employee.employee_name}}</span>
            <span>{{employee.employee_salary}}</span>
            <span>{{employee.employee_age}}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Lista',
    data: function () {
        return {
            employees: []
        }
    },
    methods: {
        loadPosts() {
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(res => {
                    this.employees = res.data
                })
        },
        detalhes(employee) {
            this.$router.push({ name: 'detalhes', params: { employee: employee } })
        }
    },
    created() {
        this.loadPosts()
    }


}
</script>
<style>
</style>
