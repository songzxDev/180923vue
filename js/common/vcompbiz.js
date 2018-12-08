Vue.component('button-counter', {
    data: function () {
        return {
            cityList: [],
            model1: ''
        }
    },
    mounted: function () {
        let that = this;
        setTimeout(function () {
            alert(1);
            that.cityList = [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ]
        }, 5000);

    },
    template: `
    <i-select v-model="model1" style="width:200px">
        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
    </i-select>
    `
});