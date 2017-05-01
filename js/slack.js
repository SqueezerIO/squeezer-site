$(function () {

  $("input,textarea").jqBootstrapValidation({
    preventSubmit : true,
    submitError   : function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess : function ($form, event) {
      var formName = $form.context.id;

      if (formName === 'slackForm') {
        event.preventDefault(); // prevent default submit behaviour

        // get values from FORM
        var email     = $("input#slackEmail").val();
        $.ajax({
          url     : "https://api.squeezer.io/rest/v1/slack/invite",
          type    : "POST",
          data    : JSON.stringify({
            email : email
          }),
          cache   : false,
          success : function () {
            // Success message
            $('#slackSuccess').html("<div class='alert alert-success'>");
            $('#slackSuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#slackSuccess > .alert-success')
              .append("<strong>You have been invited. </strong>");
            $('#slackSuccess > .alert-success')
              .append('</div>');

            //clear all fields
            $('#slackForm').trigger("reset");
          },
          error   : function (res) {
            var error = 'Error on inviting';
            if (res && res.responseJSON && res.responseJSON.data.error === 'already_invited') {
              error = 'You are already invited to slack'
            }
            // Fail message
            $('#slackSuccess').html("<div class='alert alert-danger'>");
            $('#slackSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#slackSuccess > .alert-danger').append("<strong>" + error);
            $('#slackSuccess > .alert-danger').append('</div>');
            //clear all fields
            $('#slackForm').trigger("reset");
          }
        });
      }
    },
    filter        : function () {
      return $(this).is(":visible");
    }
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});