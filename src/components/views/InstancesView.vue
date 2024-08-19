<template>
  <div class="container-fluid">
        <div class="bg-shadow">
          <div class="row mb-3">
        <div class="col-auto">
            <button data-url="https://purchase-test.etc-network.uz/admin/user" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#customModal">
                <i class="fa-solid fa-user-plus"></i> &nbsp; Add user
            </button>
        </div>
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2">
            </div>
        </div>
    </div>
            <table class="table table-sm table-bordered table-striped table-hover" id="instance_datatable">
                <thead>
                    <tr>
                        <th class="text-center" width="3%">№</th>
                        <th>Instance En</th>
                        <th>Instance Ru</th>
                        <th>working hours</th>
                        <th>Date, Time </th>
                        <th class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                  <InstanceTableRow v-for="instance in instances" :key="instance.id" :instance="instance"/>
                </tbody>
            </table>
        </div>
        <InstanceCreateModal/>
        <InstanceEditModal />
    </div>
</template>

<script>
import InstanceTableRow from '../instances/InstanceTableRow.vue'
import InstanceEditModal from '../instances/InstanceEditModal.vue'
import InstanceCreateModal from '../instances/InstanceCreateModal.vue'
export default {
  name: 'InstancesView',
  data() {
    return {
      instances: [
      { id: 1, instanceEn: "Regional department Fergana", instanceRu: "РО Фергана", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 2, instanceEn: "Regional department Andijan", instanceRu: "РО Андижан", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 3, instanceEn: "Regional department Namangan", instanceRu: "РО Наманган", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 4, instanceEn: "Regional department Termez", instanceRu: "РО Термез", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 5, instanceEn: "Regional department Karshi", instanceRu: "РО Карши", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 6, instanceEn: "Regional department Nukus", instanceRu: "РО Нукус", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 7, instanceEn: "Regional department Urgench", instanceRu: "РО Ургенч", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 8, instanceEn: "Regional department Bukhara", instanceRu: "РО Бухара", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 9, instanceEn: "Regional department Navoi", instanceRu: "РО Навои", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 10, instanceEn: "Regional department Jizzakh", instanceRu: "РО Джизак", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 11, instanceEn: "Regional department Samarkand", instanceRu: "РО Самарканд", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 12, instanceEn: "Regional department Gulistan", instanceRu: "РО Гулистан", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 13, instanceEn: "Contracts department (execution)", instanceRu: "Отдел контрактов (исполнение)", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 14, instanceEn: "General director", instanceRu: "Генеральный директор", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 15, instanceEn: "Secretary", instanceRu: "Секретарь", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 16, instanceEn: "New business development department", instanceRu: "Департамент по развитию нового бизнеса", workingHours: 8, dateTime: "26.01.2023 17:36" },
      { id: 17, instanceEn: "Marketing director", instanceRu: "Директор департамента по Маркетингу", workingHours: 8, dateTime: "26.01.2023 17:36" }
    ]
    }
  },
  components:{
    InstanceTableRow,
    InstanceEditModal,
    InstanceCreateModal
  }
}
</script>