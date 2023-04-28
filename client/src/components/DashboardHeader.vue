<template>
  <a-layout-header>
      <div class="left-side">
          <span class="menu-item"><font-awesome-icon icon="fa-regular fa-user" />  Username</span>
      </div>
      <div class="right-side">
          <span class="menu-item"><a @click.prevent="toggleModal"><font-awesome-icon icon="fa-solid fa-plus" /> New task</a></span>
          <span class="menu-item"><a><font-awesome-icon icon="fa-regular fa-address-card" />  Profile</a></span>
          <span class="menu-item"><a @click.prevent="onLogout"><font-awesome-icon icon="fa-solid fa-xmark" />  Logout</a></span>
      </div>
      <a-modal v-model:visible="isModalVisible" title="Create new task" ok-text="Create" @ok="handleOk">
          <a-form>
              <a-form-item
                :rules="[{ required: true, message: 'Please input title.' }]"
              >
                  <a-input placeholder="Title" />
              </a-form-item>
              <a-form-item
                :rules="[{ required: true, message: 'Please input description.' }]"
              >
                  <a-textarea
                    placeholder="Description"
                    :auto-size="{ minRows: 2, maxRows: 5 }"

                  />
              </a-form-item>
              <a-form-item>
                  <a-checkbox>Ready</a-checkbox>
              </a-form-item>
          </a-form>
      </a-modal>
  </a-layout-header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { message } from "ant-design-vue"
import store from "@/store/store"

export default {
  setup() {
    const router = useRouter();
    const isModalVisible = ref(false);

    const toggleModal = () => {
      isModalVisible.value ? isModalVisible.value = false : isModalVisible.value = true;
    }
    const handleOk = () => {
      isModalVisible.value = false;
    }

    const onLogout = () => {
      store.dispatch('auth/onLogout').then(() => {
        router.push(({ name: 'AuthPage' }))
      }).catch((error) => {
        message.error(error.message)
      })
    }

    return { isModalVisible, toggleModal, handleOk, onLogout };
  }
}
</script>

<style lang="scss">
.user-details {

}

.menu-item {
  padding-left: 20px;
  color: white;
}
</style>