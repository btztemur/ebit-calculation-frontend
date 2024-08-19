<template>
<div class="container-fluid">
  <div class="d-flex justify-content-between mb-4">
    <div class="d-flex">
      <div class="me-2">
        <router-link  class="btn btn-secondary" to="/orders">
          <font-awesome-icon :icon="['fas', 'arrow-left']" /> Back
        </router-link>
      </div>
      <div class="me-2">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#confirmModal" @click="message='Agreed',messageColor='text-success'">
          <font-awesome-icon :icon="['fas', 'circle-check']" /> Agree
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal" @click="message='Declined', messageColor='text-danger'">
          <font-awesome-icon :icon="['fas', 'times-circle']" /> Decline
        </button>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadModal">
        <font-awesome-icon :icon="['fas', 'paperclip']" /> Attach File
      </button>
    </div>
  </div>
  
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <div class="my-3">
        <div class="d-flex justify-content-center">
          <OrderDocument/>
        </div>
      </div>
    </div>
  </div>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h5>Order Subjects</h5>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Capex</th>
              <th>Cost Hypothetical</th>
              <th>Purpose</th>
              <th>Place of Installation</th>
              <th>Time of Installation</th>
              <th>Contract Number</th>
              <th>Contract Date</th>
              <th>Comment</th>
              <th>Actions *</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in selectedOrderSubjects" :key="index">
              <td>{{ ++index }}</td>
              <td>{{ item.Name }}</td>
              <td>{{ item.Unit }}</td>
              <td>{{ item.Amount }}</td>
              <td>{{ item.Status }}</td>
              <td>{{ item.Capex }}</td>
              <td>{{ item.CostHypothetical }}</td>
              <td>{{ item.Purpose }}</td>
              <td>{{ item.PlaceOfInstallation }}</td>
              <td>{{ item.TimeOfInstallation }}</td>
              <td>{{ item.ContractNumber }}</td>
              <td>{{ item.ContractDate }}</td>
              <td>{{ item.Comment }}</td>
              <td>{{ item.Actions }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h5>Actions under Order</h5>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>Time</th>
              <th>User</th>
              <th>Instance</th>
              <th>Instance Reply</th>
              <th>Instance Replied In</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>23 Jul 2024 14:40:47</td>
              <td>Temur Butaev</td>
              <td>Example Instance</td>
              <td>Reply</td>
              <td>Time of Reply</td>
              <td>Comment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h5>Actions under Subjects</h5>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>№ Subject</th>
              <th>Executed</th>
              <th>User</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Executed</td>
              <td>Temur Butaev</td>
              <td>Description</td>
            </tr>
            <tr>
              <td colspan="5">01 Aug 2024 15:59:09, Temur Butaev, Creator</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h5>Passage Plan</h5>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Instance</th>
              <th>Stage</th>
              <th>Period of Consideration</th>
              <th>Users (in instance)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              <td>1</td>
              <td>8 working hours</td>
              <td>Temur Butaev</td>
            </tr>
            <tr>
              <td>Test 2</td>
              <td>2</td>
              <td>8 working hours</td>
              <td>Isroil Maxmudov</td>
            </tr>
            <tr>
              <td>Test 3</td>
              <td>3</td>
              <td>8 working hours</td>
              <td>Isroil Maxmudov, Temur Butaev</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <OrderConfirmModal :message="message"  :messageColor="messageColor"/>
  <OrderUploadModal/>
</div>

</template>

<script>
import OrderUploadModal from './OrderUploadModal.vue';
import OrderConfirmModal from './OrderConfirmModal.vue';
import OrderDocument from './OrderDocument.vue';
export default{
  name: 'OrderDetail',
  components:{
    OrderUploadModal,
    OrderConfirmModal,
    OrderDocument
  },
  data(){
    return{
      message:null,
      messageColor:null,
    }
  },
  
}
</script>
<style>
   
</style>