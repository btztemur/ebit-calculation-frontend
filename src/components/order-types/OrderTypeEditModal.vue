<template>
    <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="customModalLabel">Your Title Here</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="orderTypeRU" class="form-label">Order type RU *</label>
                        <input type="text" class="form-control" id="orderTypeRU" required>
                    </div>
                    <div class="mb-3">
                        <label for="orderTypeEN" class="form-label">Order type EN *</label>
                        <input type="text" class="form-control" id="orderTypeEN" required>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary me-1">Save changes</button>
                        <button type="button" class="btn btn-secondary ms-1" data-bs-dismiss="modal">Close</button>
                    </div>
                </form> 
            </div>
        </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    props: {
      title: String,
      visible: Boolean
    }
  };
  </script>
  