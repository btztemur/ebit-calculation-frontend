<template>
    <tr class="js_this_tr" data-id="12">
        <td class="text-center">{{ orderType.id }}</td>
        <td>
           {{ orderType.orderTypeEn }}
        </td>
        <td>
            {{ orderType.orderTypeRu }}
        </td>
        <td class="text-end">
            <div style="float: right;">
                <a class="btn btn-primary btn-sm js_edit_btn" data-bs-toggle="modal" data-bs-target="#customModal"
                    data-one_order_type_url="https://purchase-test.etc-network.uz/admin/order-type/one/12"
                    data-update_url="https://purchase-test.etc-network.uz/admin/order-type/12" title="Edit">
                    <font-awesome-icon :icon="['fas', 'pen']" />
                </a>
            </div>
        </td>
    </tr>           
</template>
<script>
export default {
  props:{
    orderType:{
        type:Object,
        required:true
    }
  },
};
</script>
    