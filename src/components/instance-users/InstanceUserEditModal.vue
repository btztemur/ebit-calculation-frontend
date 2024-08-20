<template>
     <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="stage" class="form-label">{{ $t('stage') }}</label>
                            <input type="number" class="form-control" id="stage" required>
                        </div>
                        <div class="mb-3">
                            <label for="instance" class="form-label">{{ $t('instance') }}</label>
                            <input type="text" class="form-control" id="instance" required>
                        </div>
                        <div class="mb-3">
                            <label for="selectField" class="form-label">{{ $t('select_item') }}</label>
                            <multiselect
                                            v-model="selectedValues"
                                            :options="options"
                                            multiple
                                            placeholder="Select options"
                                          />
                        </div>
                        <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary me-1">{{ $t('apply') }}</button>
                        <button type="button" class="btn btn-secondary ms-1" data-bs-dismiss="modal">{{ $t('close') }}</button>
                    </div>
                    </form>
                </div>
               
            </div>
        </div>
    </div>
  </template>
<script>
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
export default {
  props: {
    title: {
      type: String,
      required: true
    },
   
  },
  components: {
    Multiselect
  },
  data() {
    return {
      formData: {
        stage: null,
        instance: '',
      },
      selectedValues: [],
      options: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] 
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form Data:', this.formData);
      console.log('Selected Items:', this.selectedItems);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
