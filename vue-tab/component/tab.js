Vue.component('tab', {
    template: `
    <div>
        <ul class="tab-title">
            <li v-for="title in panelTitles" @click="active_c=title" :class="{active:active_c == title}">{{title}}</li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
    `,
    model: {
        prop: 'active',
        event: 'input'
    },
    props: {
        active: String,
    },
    watch: {
        active(val) {
            console.log("watch");
            this.active_local = val
        }
    },
    computed: {
        active_c: {
            get() {
                console.log("computed-get");
                return this.active_local;
            },
            set(val) {
                console.log("computed-set");
                this.active_local = val;
                this.$emit("update:active", val);
                this.$emit("input", val);
            }
        }
    },
    data() {
        return {
            active_local: this.active,
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
