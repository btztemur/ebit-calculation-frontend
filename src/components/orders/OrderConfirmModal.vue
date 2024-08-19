<template>
<div class="modal fade bg-dark bg-opacity-50" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="acceptLabel">Instance reply</h5>
            </div>
            <form action="https://purchase-test.etc-network.uz/order-action/status" method="POST" class="js_order_status_form">
                <input type="hidden" name="_token" value="Bgx1wWIHBEkg9lA7xc4I6ZBGLgOQp9OgzZWb1RlC"> 
                <input type="hidden" name="order_id" value="4">
                <input type="hidden" name="status" class="js_status" value="1">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Reply:</label>
                        <b :class="['js_text', messageColor]">{{ message }}</b>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Comment:</label>
                        <textarea class="form-control js_comment" name="comment" id="message-text"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Apply</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    messageColor:{
        type:String,
        default:'text-success'
    }
  }
};
</script>
  
  
  