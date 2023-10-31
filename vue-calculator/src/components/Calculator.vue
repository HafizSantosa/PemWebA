<template>
    <div id="app">
        <input v-model="result" placeholder="kalkulatoran" type="text" class="input">
        <input v-model="hasil" type="text" class="input" readonly>
        <div class="keys">
            <button class="operator" @click="clearResult">C</button>
            <button class="operator" @click="backspace">CE</button>
            <button class="operator">😎</button>
            <button class="operator" @click="addToResult('/')">/</button>
            <button @click="addToResult('1')">1</button>
            <button @click="addToResult('2')">2</button>
            <button @click="addToResult('3')">3</button>
            <button class="operator" @click="addToResult('*')">*</button>
            <button @click="addToResult('4')">4</button>
            <button @click="addToResult('5')">5</button>
            <button @click="addToResult('6')">6</button>
            <button class="operator" @click="addToResult('-')">-</button>
            <button @click="addToResult('7')">7</button>
            <button @click="addToResult('8')">8</button>
            <button @click="addToResult('9')">9</button>
            <button class="operator" @click="addToResult('+')">+</button>
            <button @click="addToResult('0')">0</button>
            <button @click="addToResult('.')">.</button>
            <button class="equal-sign operator" @click="calculate">=</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: '',
            hasil: ''
        };
    },
    methods: {
        addToResult(value) {
            this.result += value;
        },
        clearResult() {
            this.result = '';
        },
        backspace() {
            this.result = this.result.slice(0, -1);
        },
        calculate() {
            try {
                this.hasil = eval(this.result);
                this.result = '';
            } catch (error) {
                this.hasil = 'Error';
                this.result = '';
            }
        }
    }
};
</script>

<style scoped>
#app {
    width: 200px;
    margin: 0 auto;
}

.input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

.keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.operator {
    background-color: #f0f0f0;
}

.equal-sign {
    grid-column: span 2;
}
</style>

