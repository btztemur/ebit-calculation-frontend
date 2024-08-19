<template>
 <div class="container-fluid bg-shadow">
    <div class="bg-shadow m-2">
    <div class="row mb-3">
        <div class="col-auto">
            <button data-url="https://purchase-test.etc-network.uz/admin/user" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customModal">
                <i class="fa-solid fa-user-plus"></i> &nbsp; Add user
            </button>
        </div>
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2">
            </div>
        </div>
    </div>

    <table class="table table-bordered table-striped table-sm table-hover" id="user_datatable">
        <thead>
            <tr>
                <th class="text-center" width="3%">№</th>
                <th class="text-center">Id</th>
                <th width="15%">Order Type</th>
                <th width="15%">Instance</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>
                <th>Date, Time</th>
                <th class="text-end">Actions</th>
            </tr>
        </thead>
        <tbody>
            <UserTableRow v-for="user in users" :key="user.id" :user="user" />
        </tbody>
    </table>
    </div>
    <UserEditModal />
    <UserCreateModal />
</div>
</template>



<script>
import UserTableRow from '../users/UserTableRow.vue';
import UserEditModal from '../users/UserEditModal.vue';
import UserCreateModal from '../users/UserCreateModal.vue';
export default {
  name: 'UsersView',
  data() {
    return {
        users: [
                { id: 1, orderType: "For IT department", instance: "IT department", fullName: "Ким Андрей Аликович", email: "andrey.kim@etc.uz", username: "andrey.kim", status: "active", dateTime: "27.01.2023 18:03" },
                { id: 3, orderType: "For technical department", instance: "Technical department", fullName: "Nam Aleksey", email: "A.Nam@etc.uz", username: "a.nam", status: "active", dateTime: "26.01.2023 17:59" },
                { id: 4, orderType: "For technical department", instance: "Technical department", fullName: "Магдиев Аваз", email: "A.Magdiev@etc.uz", username: "a.magdiev", status: "active", dateTime: "26.01.2023 17:58" },
                { id: 5, orderType: "For technical department", instance: "Technical department", fullName: "Baymukhamedov Akbar", email: "A.Baymukhamedov@etc.uz", username: "a.baymukhamedov", status: "active", dateTime: "26.01.2023 17:56" },
                { id: 6, orderType: "For technical department", instance: "Technical department", fullName: "Almatov Naimbek Valibekovich", email: "N.Almatov@etc.uz", username: "n.almatov", status: "active", dateTime: "26.01.2023 17:55" },
                { id: 7, orderType: "For technical department", instance: "Technical department", fullName: "Khodjageldiev Khudayberdi Kuldashovich", email: "Kh.Khodjageldiev@etc.uz", username: "kh.khodjageldiev", status: "active", dateTime: "26.01.2023 17:53" },
                { id: 8, orderType: "For technical department", instance: "Technical department", fullName: "Abduvokhidova Shokhsanambonu", email: "Sh.Abduvokhidova@etc.uz", username: "sh.abduvokhidova", status: "active", dateTime: "26.01.2023 17:52" },
                { id: 9, orderType: "For technical department", instance: "Technical department", fullName: "Saibnazarov Sanjar", email: "S.Saibnazarov@etc.uz", username: "s.saibnazarov", status: "active", dateTime: "26.01.2023 17:48" },
                { id: 10, orderType: "For corporate strategy department", instance: "Corporate strategy department", fullName: "Nodir Xalliev", email: "N.Xalliev@etc.uz", username: "n.xalliev", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 11, orderType: "", instance: "Secretary", fullName: "Khurshida Chemketova", email: "K.Chemketova@etc.uz", username: "k.chemketova", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 12, orderType: "", instance: "General director", fullName: "Lee Baek Hee", email: "bh.lee@etc.uz", username: "bh.lee", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 13, orderType: "", instance: "Financial director", fullName: "Kim Sungmin", email: "leo.kim@etc.uz", username: "leo.kim", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 14, orderType: "", instance: "Contracts department", fullName: "Javokhir Siddikov", email: "J.Siddikov@etc.uz", username: "j.siddikov", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 15, orderType: "", instance: "Contracts department", fullName: "Sarvar Atadjanov", email: "S.Atadjanov@etc.uz", username: "s.atadjanov", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 16, orderType: "", instance: "Technical director", fullName: "Husniddin Tuychiev", email: "H.Tuychiev@etc.uz", username: "h.tuychiev", status: "active", dateTime: "26.01.2023 17:36" },
                { id: 17, orderType: "", instance: "IT department", fullName: "Bakhodir Mirjalilov", email: "B.Mirjalilov@etc.uz", username: "b.mirjalilov", status: "active", dateTime: "26.01.2023 17:36" }
      ]
    };
  },
  components:{
    UserTableRow,
    UserEditModal,
    UserCreateModal
  }
}
</script>