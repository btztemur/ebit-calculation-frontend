<template>
  <div class="container-fluid">
        <div class="bg-shadow">
          <div class="row mb-3">
        <div class="col-auto">
            <button data-url="https://purchase-test.etc-network.uz/admin/user" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customModal">
                <i class="fa-solid fa-user-plus"></i> &nbsp; {{ $t('add') }}
            </button>
        </div>
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control" :placeholder="$t('search')" aria-label="Search" aria-describedby="button-addon2">
              
            </div>
        </div>
    </div>
    <table class="table table-sm table-bordered table-striped table-hover" id="order_type_datatable">
                <thead>
                    <tr>
                        <th class="text-center" width="3%">№</th>
                        <th>{{ $t('order_type') }} ({{ $t('english') }})</th>
                        <th>{{ $t('order_type') }} ({{ $t('russian') }})</th>
                        <th class="text-end">{{ $t('actions') }}</th>
                    </tr>
                </thead>
                <tbody>
                  <OrderTypeTableRow v-for="orderType in orderTypes" :key="orderType.id" :orderType="orderType"/>   
                      </tbody>
                  </table>
        </div>
        <OrderTypeCreateModal />
        <OrderTypeEditModal />
    </div>
</template>

<script>
import OrderTypeTableRow from '../order-types/OrderTypeTableRow.vue'
import OrderTypeEditModal from '../order-types/OrderTypeEditModal.vue'
import OrderTypeCreateModal from '../order-types/OrderTypeCreateModal.vue'
export default {
  name: 'InstancesView',
  data() {
  return {
    orderTypes: [
      { id: 1, orderTypeEn: "For regional department Fergana", orderTypeRu: "Для РО Фергана" },
      { id: 2, orderTypeEn: "For regional department Andijan", orderTypeRu: "Для РО Андижан" },
      { id: 3, orderTypeEn: "For regional department Namangan", orderTypeRu: "Для РО Наманган" },
      { id: 4, orderTypeEn: "For regional department Termez", orderTypeRu: "Для РО Термез" },
      { id: 5, orderTypeEn: "For regional department Karshi", orderTypeRu: "Для РО Карши" },
      { id: 6, orderTypeEn: "For regional department Nukus", orderTypeRu: "Для РО Нукус" },
      { id: 7, orderTypeEn: "For regional department Urgench", orderTypeRu: "Для РО Ургенч" },
      { id: 8, orderTypeEn: "For regional department Bukhara", orderTypeRu: "Для РО Бухара" },
      { id: 9, orderTypeEn: "For regional department Navoi", orderTypeRu: "Для РО Навои" },
      { id: 10, orderTypeEn: "For regional department Samarkand", orderTypeRu: "Для РО Самарканд" },
      { id: 11, orderTypeEn: "For regional department Jizzakh", orderTypeRu: "Для РО Джизак" },
      { id: 12, orderTypeEn: "For regional department Gulistan", orderTypeRu: "Для РО Гулистан" },
      { id: 13, orderTypeEn: "For marketing center", orderTypeRu: "Для маркетинг центра" },
      { id: 14, orderTypeEn: "For new business development department", orderTypeRu: "Для департамента по развитию нового бизнеса" },
      { id: 15, orderTypeEn: "For IT department", orderTypeRu: "Для департамента по информационным технологиям" },
      { id: 16, orderTypeEn: "For united service center", orderTypeRu: "Для единого центра обслуживания" }
    ]
  }
},
  components:{
    OrderTypeTableRow,
    OrderTypeEditModal,
    OrderTypeCreateModal
  }
}
</script>

