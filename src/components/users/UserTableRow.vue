<template>
    <tr class="js_this_tr" data-id="">
        <td class="text-center">{{ user.id }}</td>
        <td>  {{ user.orderType }}</td>
        <td> {{ user.instance }} </td>
        <td>{{ user.fullName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.username }}</td>
        <td> {{ user.status }}  </td>
        <td>{{ user.dateTime }}</td>
        <td class="text-end">
            <div>
                <a class="btn btn-primary btn-sm js_edit_btn me-1"  data-bs-toggle="modal" data-bs-target="#customModal"
                    data-one_user_url="https://purchase-test.etc-network.uz/admin/user/one/21"
                    data-update_url="https://purchase-test.etc-network.uz/admin/user/21" title="Edit">
                    <font-awesome-icon :icon="['fas', 'pen']"/>
                </a>
                <a class="btn btn-danger btn-sm js_delete_btn ms-1" data-bs-toggle="modal"
                    data-bs-target="#deleteModal" 
                    data-url="https://purchase-test.etc-network.uz/admin/user/21" title="Delete">
                    <font-awesome-icon :icon="['fas', 'trash-alt']" />
                </a>
            </div>
        </td>
    </tr>                          
</template>

<script>
export default {
    props: {
    user: {
      type: Object,
      required: true
    }
  },
};
</script>