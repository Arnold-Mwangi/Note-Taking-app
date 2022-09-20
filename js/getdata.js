$(document).ready(function(){
    $("#get-data-form").submit(function(e){
        var content = tinymce.get("mytextarea").getContent();
        $("#data-ccontainer").html(content);
        return false;
    });
});