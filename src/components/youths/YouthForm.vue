<script lang="ts" setup>
import { useYouthStore } from '@/components/youths/stores/youths'
import { storeToRefs } from 'pinia'
import FullName from '@/components/youths/NameInput.vue'
import Phone from '@/components/youths/PhoneInput.vue'
import Address from '@/components/youths/Address.vue'
import AddButton from '@/components/AddButton.vue'
import router from '@/router'
const youthStore = useYouthStore()
const { formYouth } = storeToRefs(youthStore)
const add = () => {
  youthStore.postFormYouth()
  router.push('/youths')
}
</script>

<template>
  <div class="youth-form">
    <div class="youth-form-item-group">
      <FullName
        v-model:first-name="formYouth.name.first"
        v-model:last-name="formYouth.name.last"
      />
      <Phone
        v-model:mobile="formYouth.phone.mobile"
      />
    </div>
    <div class="youth-form-item-group">
      <Address
        v-model:city="formYouth.address.city.name"
        v-model:country="formYouth.address.country.name"
        v-model:house-number="formYouth.address.houseNumber"
        v-model:street="formYouth.address.street"
    />
    </div>
    <div class="youth-form-item">
      <AddButton @add="add"/>
    </div>
  </div>
</template>

<style scoped>
</style>
