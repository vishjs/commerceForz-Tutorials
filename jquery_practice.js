// alert("hello");
//$(selector).action();

// $('p').clicK();

// $('p').click(function()
// {
//     $('p').hide();
// });
 
// $('p').click(function()
// {
//     $('h1').hide();
// });

// $('button').click(function()
// {                                //to hide using button
//     $('p').hide();
// });

// $('p').click(function()      //to hide specific paragraph
// {
//     $(this).hide();
// });

// $('button').click(function()
// {
//     $('.text').hide();
// });

// $('button').click(function()
// {
//     $('#para').hide();
// });
// $('button').click(function()
// {
//     console.log('iam clicked')
// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('p').hide();
//         $('h1').hide();
//     })
// })

// $(document).ready(function(){
//     $('button').click(function(){
       
//         $('h1').hide(4000);
//     })
// })

// $(document).ready(function(){
//     $('button').click(function(){
//         $('*').hide(5000);     
//     })
// })
// $('button').click(function(){
//     $('p:first').hide(5000);     
// })
// })

// $('button').click(function(){
//     $('p.text').hide(1000);     
// })
// })

// $('button').click(function(){
//     $('p#para').hide(1000);     
// })
// })

// $('button').click(function(){
//     $('ul li:first').hide(1000);     
// })
// })

// $('button').click(function(){
//     $('ul li:first-child').hide(1000);     
// })
// })

// $('button').click(function(){
   // $('[href]').hide(1000);     
    //$('a[target="blank"]').hide(1000); 
    // $('input').hide(3000);
    //$(':text').hide(3000);
    // $(':button').hide(3000);

            //set html content
    //console.log($('p#para').html());
        // console.log($('h1').html('Goodevening'));
        // console.log($('*').html('Goodevening'));
        // console.log($('input').html('Goodevening'));
        // console.log($(':text').val('Goodevening'));
    // $('p').empty();
   // $('p').remove();

            //SETTING hTML CLASSES
//    $('h1').addClass("heading")
//    $('h1').addClass("title")
//    $('p').removeClass("text")

        //SET CSS STYLES

    //   console.log($('p').css('color'));
    //   console.log($('p').css('text-align'));


        //to change color

        // $('p').css('color',"blue");
        //$('p').css('background-color',"yellow");

        // $('tr:odd').css('background-color','orange');


        //EVENTS IN JQUERY

        // $('button').mouseenter(function(){
        //     console.log("mouse enter event")


        // $('button').mouseleave(function(){
        // console.log("mouse leave event")

//     $('button').hover(function(){
//     console.log("i am entered");
// }, function()
// {
//     alert("i amleft");

// $('input').focus(function(){
//     $(this).css('background-color','orange');
// })

// $('input').blur(function(){
//     $(this).css('background-color','blue ');
// })

    // $('p').on('click',function(){
    //     $('p').hide();
    // })

//    $('p').on(
//        {
//            click:function(){
//                $('p').css('font-size','25px');
//            },
//            mouseleave:function(){
//             $('p').css('font-size','10px');
//            },
//            mouseenter:function(){
//             $('p').css('background-color','orange');
//            }
//        }
//    )

// })

//  $(document).ready(function()
//      {
//          $('button').click(function()
//          {
            //  $('p').hide(1000);
            //  $('p').show('fast');
            //  $('p').toggle(2000);
            //  $('p').fadeOut(2000);
            //  $('p').fadeIn(4000);
            //  $('#one').fadeTo('1000',0.4);
            //  $('#two').fadeTo('2000',0.6);
            //  $('#three').fadeTo('3000',0.7);
            //  $('#four').fadeTo('4000',1);

            // $('#four').slideUp('5000');
            //$('#four').slideToggle('5000');

            //ANIMATE METHODS

        // $(selector).animate({parameter});
    //     $('#four').animate(
    //         {
    //             left:"100px",
    //             height:"200px",
    //             width:"300px"
    //         }
    //     );
    //     })
    //  })
    // $('#four').css("background-color","yellow").slideUp(4000).slideDown(3000);
    //      })
    //     })

    
let text = "";
for (let i = 0; i < 5; i++) {
  if (i == 3) break;
  text += i + " ";
  console.log(i)
}


let emp = { 
    firstName: "Raj", 
    lastName: "Kumar", 
    salary: 40000 
} 

console.log(delete emp.salary);
console.log(emp);