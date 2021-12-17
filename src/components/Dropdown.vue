<template>
    <div class="dropdown">
        <button @click="isOpen = !isOpen">
            <div v-if="tablet">
                <world />
            </div>
            <div v-if="!tablet">
                {{locale}}
            </div>
            <div v-else>
                {{locales[locale]}}
            </div>
            <div :class="{'open': isOpen}">
                <arrow-down/>
            </div>
        </button>
        <div v-if="isOpen">
            <a href="#">CZ</a>
            <a href="#">SK</a>
            <a href="#">EN</a>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Dropdown',
        data() {
            return {
                isOpen: false,
                locales: {
                    CZ: 'Česky',
                    SK: 'Slovensky',
                    EN: 'English',
                }
            }
        },

        props: {
            locale: {
                type: String,
                required: true,
                defaul: "CZ"
            },

            tablet: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
