<template>
    <div class="detalhes">
        <h1>Detalhes</h1>
        <button class="primary" @click="voltar">Voltar</button>
        <div>
            <span>{{ employee.employee_name }}</span>
            <span>{{ employee.employee_salary }}</span>
            <span>{{ employee.employee_age }}</span>
        </div>
    </div>

    <!-- <form id="detalhesForm"></form> -->
</template>

<script>
export default {
    name: 'Detalhes',
    data: function () {
        return {
            employee: {}
        }
    },
    methods: {
        voltar() {
            this.$router.go(-1)
        }
    },
    created() {
        this.employee = this.$route.params.employee;
    }
}
</script>

<style>
</style>
