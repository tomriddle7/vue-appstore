<template>
    <label :for="id + '_button'" :class="{'active': isActive}" class="toggle__button">
        <input type="checkbox" :disabled="disabled" :id="id + '_button'" v-model="checkedValue">
        <span class="toggle__switch"></span>
    </label>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },

        labelEnableText: {
            type: String,
            default: 'On'
        },
        
        labelDisableText: {
            type: String,
            default: 'Off'
        },

        id: {
            type: String,
            default: 'primary'
        }, 

        defaultState: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentState: this.defaultState
        }
    },

    watch: {
        defaultState: function defaultState() {
            this.currentState = Boolean(this.defaultState)
        }
    },

    computed: {
        // currentState() {
        //     return this.defaultState;
        // },

        isActive() {
            return this.currentState;
        },

        enableText() {
            return this.labelEnableText;
        },

        disabledText() {
            return this.labelDisableText;
        },

        checkedValue: {
            get() {
                return this.currentState;
            },

            set(newValue) {
                this.currentState = newValue;
                this.$emit('change', newValue);
            }
        }
    }
}
</script>

<style scoped>
.toggle__button {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}
.toggle__button input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}
.toggle__button .toggle__switch {
    display: block;
    height: 32px;
    border-radius:6px;
    width: 100%;
    background: #2a2a2c;
    position: relative;
    transition: all 0.3s;
}

.toggle__button .toggle__switch::after, 
.toggle__button .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 28px;
    width: 50%;
    border-radius: 5px;
    top: 2px;
    left: 2px;
    transition: left 0.3s;
}

.toggle__button .toggle__switch::after {
    background: #646469;
}
.toggle__button .toggle__switch::before {
    background: #646469;
    opacity:0;
}

.active .toggle__switch {
    background: #2a2a2c;
}

.active .toggle__switch::after {
    left: 50%;
    background: #646469;
}
</style>