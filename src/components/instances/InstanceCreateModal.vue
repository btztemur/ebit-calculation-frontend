<template>
   <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="instanceRU" class="form-label">{{ $t('instance') }} ({{ $t('russian') }})</label>
                        <input type="text" class="form-control" id="instanceRU" required>
                    </div>
                    <div class="mb-3">
                        <label for="instanceEN" class="form-label">{{ $t('instance') }} ({{ $t('english') }})</label>
                        <input type="text" class="form-control" id="instanceEN" required>
                    </div>
                    <div class="mb-3">
                        <label for="timeline" class="form-label">{{ $t('period_of_consideration')}}*</label>
                        <input type="number" class="form-control" id="timeline" required>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary me-1">{{ $t('apply') }}</button>
                        <button type="button" class="btn btn-secondary ms-1" data-bs-dismiss="modal">{{ $t('close') }}</button>
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
  