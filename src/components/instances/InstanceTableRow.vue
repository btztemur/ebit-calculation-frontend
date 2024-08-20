<template>
    <tr class="js_this_tr" data-id="29">
        <td class="text-center">{{ instance.id}}</td>
        <td>
            {{ instance.instanceEn }}
        </td>
        <td>
            {{ instance.instanceRu }}
        </td>
        <td>{{ instance.workingHours }}</td>
        <td>{{ instance.dateTime }}</td>
        <td class="text-end">
            <div class="d-flex" style="float: right;">
                <a class="btn btn-primary btn-sm me-2 js_edit_btn"   data-bs-toggle="modal" data-bs-target="#customModal"
                    data-one_instance_url="https://purchase-test.etc-network.uz/admin/instance/one/29"
                    data-update_url="https://purchase-test.etc-network.uz/admin/instance/29" title="Edit">
                    <font-awesome-icon :icon="['fas', 'pen']"/>
                </a>
                <a class="btn btn-danger btn-sm js_delete_btn" data-bs-toggle="modal"
                    data-bs-target="#deleteModal" 
                    data-url="https://purchase-test.etc-network.uz/admin/instance/29" title="Delete">
                    <font-awesome-icon :icon="['fas', 'trash-alt']" />
                </a>
            </div>
        </td>
    </tr>      
</template>
<script>
export default {
  props: {
    instance:{
        type:Object,
        required:true
    }
  },
};
</script>