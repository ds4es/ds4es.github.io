// https://stackoverflow.com/a/38860867/9489744
//add onHover function.
function showVideoOnHover(obj)
{ 
	height = document.getElementById('post_image').clientHeight;
    $("#post_image").css("display","none");
    $("#youtube").css("display","block");
    document.getElementById('youtube').setAttribute("style","height:"+height+"px");
    $("#youtube").attr("src", $("img",obj).data("src"));

}
function hideVideo()
{
    $("#youtube").css("display","none");
    $("#post_image").css("display","block");
}
/*
$("featured_video").addEventListener("onStateChange", function(state){
   	alert("fin, state: " + state);
    if(state === 0){
        // the video is end, do something here.
    }
});
*/