<script id="generalActionTemplate" type="text/x-jsrender">
        <a title="Print" target="_blank" class="btn action-btn btn-primary btn-sm" href="{{:urlPrint}}">
            <i class="fa fa-print action-icon"></i>
   </a>
    <a title="<?php echo __('messages.common.edit'); ?>" class="btn action-btn btn-success btn-sm" href="{{:url}}">
            <i class="fa fa-edit action-icon"></i>
   </a>
   <a title="<?php echo __('messages.common.delete'); ?>" class="btn action-btn btn-danger btn-sm delete-btn" data-id="{{:id}}">
            <i class="fa fa-trash action-icon"></i>
   </a>
</script>
