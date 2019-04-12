/**
 * Created by Acac on 2018/8/28.
 */
$(function(){
//    "use strict";

   //gobacktop
   $(document).scroll(function(){
       var distance=$("html,body").scrollTop();
//       console.log(distance);
       if(distance==0){
           $("#gobacktop").css("display","none");
       }else{
           $("#gobacktop").css("display","block");
       }
   });

   //新碟上架点击切换
//   $("#cd-previous").stop(true,true).hover(function(){
//       $("#cd3").css("display","none");
//   },function(){
//       $("#cd3").css("display","inline-block");
//   });
   $("#cd-previous").stop(true,true).mouseover(function() {
       if ($("#cd-wrap").position().left<=-1340){
           $("#cd-wrap").css("left","0");
       }
   });
   $("#cd-previous").click(function(event){
       event.preventDefault();
       $("#cd-wrap").stop(true,true).animate({left:"-=670"},1000,"linear",function(){
           if($("#cd-wrap").position().left<=-1340){
               $("#cd-wrap").css("left","0");
           }
       });
   });
   $("#cd-next").stop(true,true).mouseover(function(){
       if ($("#cd-wrap").position().left >= 0) {
           $("#cd-wrap").css("left", "-1340px");
       }
   });
   $("#cd-next").click(function(event){
        event.preventDefault();
//       $("#cd").css("left","-670px");
//       $("#cd1").stop(true,true).animate({left:"+=670"},1000,"linear",function(){
//            if($("#cd1").position().left>=670){
//                $("#cd1").css("left","-670px");
//            }
//        });
       $("#cd-wrap").stop(true,true).animate({left:"+=670"},1000,"linear",function(){
           if($("#cd-wrap").position().left>=0){
               $("#cd-wrap").css("left","-1340px");
           }
       });
   });

   //nav背景颜色变化
    var $bgurl=["../images/navbgc1.png","../images/navbgc2.png","../images/navbgc3.png","../images/navbgc4.png",
        "../images/navbgc5.png","../images/navbgc6.png","../images/navbgc7.png","../images/navbgc8.png"];

    $("#carousel-example-generic").on("slide.bs.carousel",function(event){
        var $hoder = $('#carousel_inner').find('.item');
//        console.log($hoder);
        var $items=$(event.relatedTarget);
        var getIndex=$hoder.index($items);
//        console.log(getIndex);
        getIndex++;
        $("#nav").css("background","url(\"../images/navbgc"+getIndex+".png\") 0 0 repeat-x");
//        $("#nav").animate({background:"url(\"../images/navbgc"+getIndex+".png\") 0 0 repeat-x"},
//                           100,"linear");
//        var carouselData = $(this).data('bs.carousel').$active;
    });

//    $("#carousel-example-generic").trigger("slide.bs.carousel");

//    $('#carousel-example-generic').on('slide.bs.carousel',function(event){
//        var carouselData = $(this).data("bs.carousel");
//        var currentIndex = carouselData.getActiveIndex();//当前图片的索引
//        var items = carouselData.$items;//所有图片的包裹div的数组
//        console.log(currentIndex);
//    });
//    $("#carousel-example-generic").trigger("slide.bs.carousel");
//    $lis.on("haveclass",function(){
//       for(var i=0; i<=$lis.length; i++){
//           if($lis[i].className="active"){
//               console.log(i);
//           }
//       }
//    });
//    $lis.triggerHandler("haveclass");




});