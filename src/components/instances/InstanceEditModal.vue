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
                            <label for="instanceRU" class="form-label">Instance RU *</label>
                            <input type="text" class="form-control" id="instanceRU" required>
                        </div>
                        <div class="mb-3">
                            <label for="instanceEN" class="form-label">Instance EN *</label>
                            <input type="text" class="form-control" id="instanceEN" required>
                        </div>
                        <div class="mb-3">
                            <label for="timeline" class="form-label">Time line *</label>
                            <input type="number" class="form-control" id="timeline" required>
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
  