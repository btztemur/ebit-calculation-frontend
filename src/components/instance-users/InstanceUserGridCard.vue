<template>
    <div class="col-md-6 mb-4">
        <div class="bg-shadow">
            <div class="width-100 mb-4">
                <b>Order type:  For technical department </b>
                <button class="btn btn-primary float-end js_add_btn"
                    data-order_type_id="1"
                    data-order_type_name=" For technical department "
                    data-url="https://purchase-test.etc-network.uz/admin/user-instance"
                    data-bs-toggle="modal" data-bs-target="#customModal"> <font-awesome-icon :icon="['fas', 'plus']" />  Add</button>
            </div>

            <table class="table table-striped table-sm table-hover table-responsive" width="100%">
                <thead>
                    <tr>
                        <th class="text-center">Stage</th>
                        <th>Instance</th>
                        <th>Users (in instance)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>     
                    <InstanceUserTableRow v-for="(instanceChild, index) in instance"  :key="index" :instanceChild="instanceChild" />
                </tbody>
            </table>
            
        </div>
    </div>
</template>
<script>
import InstanceUserTableRow from './InstanceUserTableRow.vue'; 
export default {
  props: {
    instance: {
      type: Array,
      required: true,
    },
  },
  components: {
    InstanceUserTableRow,
  }
};
</script>

