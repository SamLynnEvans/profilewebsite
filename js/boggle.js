$(document).ready(function(){
	function stringGen1(len)
{
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

	function stringGen2(len)
{
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

   
}

 

$('#start').click(function(){
	$('#1').append('<p>' + stringGen1(1) + '</p>')
	$('#2').append('<p>' + stringGen2(1) + '</p>')
})

});