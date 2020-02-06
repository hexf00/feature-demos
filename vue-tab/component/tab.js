Vue.component('tab', {
    template: `
    <div>
        <ul class="tab-title">
            <li v-for="title in panelTitles" @click="active=title" :class="{active:active == title}">{{title}}</li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
    `,
    props: {
        active: String,
    },
    data() {
        return {
            panelTitles: [],
        }
    },
    methods: {
        calcPaneInstances() {
            if (this.$slots.default) {
                const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
                    vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'panel');

                this.panelTitles = paneSlots.map(({ componentInstance }) => {
                    return componentInstance.title
                });
            }
        }
    },
    mounted() {
        this.calcPaneInstances();
    }
})  
