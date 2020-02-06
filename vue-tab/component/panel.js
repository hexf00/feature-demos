Vue.component('panel', {
    template: `
    <div v-show="$parent.active == title">
        <slot></slot>
    </div>
    `,
    props: {
        title: String,
    },
    data() {
        return {}
    }
})  
