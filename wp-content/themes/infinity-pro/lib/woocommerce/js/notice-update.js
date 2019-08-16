jQuery(document).on( 'click', '.infinity-woocommerce-notice .notice-dismiss', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'infinity_dismiss_woocommerce_notice'
        }
    })

})