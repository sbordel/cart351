$(document).ready(function () {

/* code for loading page taken from stackoverflow => http://jsfiddle.net/VpDUG/4952/ */
/* -- starts here -- */
    $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});
/* -- ends here -- */

    // INDEX
    let modalOne = $("#one.about-modal");
    let modalTwo = $("#two.about-modal");
    let modalThree = $("#three.about-modal");

    modalOne.hide();
    modalTwo.hide();
    modalThree.hide();

    $("#a.nav-button").click(function () {
        modalOne.show();
    });
    $("#b.next-button").click(function () {
        modalOne.hide();
        modalTwo.show();
    });
    $("#c.next-button").click(function () {
        modalTwo.hide();
        modalThree.show();
    });
    $("#close-modal").click(function () {
        modalThree.hide();
    });

    //  GARDEN

    let gardenModal = $(".garden-modal");
    let modalPlant = $("#one.garden-modal");
    let modalFertilizer = $("#two.garden-modal");
    let modalSun = $("#three.garden-modal");

    let modalBg = $(".garden .modal-container");

    let gardenImgs = $("#garden-imgs");

    const btnName = ["plant", "fertilize", "water", "liquid sunshine"];
    const btnInfo = ["upload an image to the server and expand the garden", "supply the garden with nutrients", "rehydrate the garden", "provide the garden with light to help it stay bright and healthy"];
    let btnNum = btnName.length;
    //make corresponding name + description appear if hovered, and remain if clicked

    $(".garden-button").mouseenter(function () {
        for (let i = 0; i < btnNum; i++) {
            if ($(this).attr("id") == "plant-btn") {
                $(".button-name").text(btnName[0]);
                $(".button-info").text(btnInfo[0]);
            }
            else if ($(this).attr("id") == "fertilize-btn") {
                $(".button-name").text(btnName[1]);
                $(".button-info").text(btnInfo[1]);
            }
            else if ($(this).attr("id") == "water-btn") {
                $(".button-name").text(btnName[2]);
                $(".button-info").text(btnInfo[2]);
            }
            else if ($(this).attr("id") == "sun-btn") {
                $(".button-name").text(btnName[3]);
                $(".button-info").text(btnInfo[3]);
            }
            else {
                $(".button-name").text("");
                $(".button-info").text("");
            };
        };
    });
    $(".garden-button").mouseleave(function () {
        $("h1").text("");
        $("p").text("");
    });

    $(".garden-button").click(function () {
        $(".garden-button").off("mouseleave");
        modalBg.css("background-color","rgba(169,169,169, 1)");
        $("#garden-canvas").css("opacity","0.5");


        for (let i = 0; i < btnNum; i++) {
            if ($(this).attr("id") == "plant-btn") {
                $(".button-name").text(btnName[0]);
                $(".button-info").text(btnInfo[0]);
                modalPlant.show();
                modalFertilizer.hide();
                modalSun.hide();
            }
            else if ($(this).attr("id") == "fertilize-btn") {
                $(".button-name").text(btnName[1]);
                $(".button-info").text(btnInfo[1]);
                modalFertilizer.show();
                modalPlant.hide();
                modalSun.hide();
            }
            else if ($(this).attr("id") == "water-btn") {
                $(".button-name").text(btnName[2]);
                $(".button-info").text(btnInfo[2]);
                gardenModal.hide();
                modalBg.css("background-color","rgba(169,169,169, 0)");
                $("#garden-canvas").css("opacity","1");

                // garden effect => WATER
                gardenImgs.css("filter", "grayscale(50%)");
                // make the grayscale effect be incremental (+5% per click event?)
            }
            else if ($(this).attr("id") == "sun-btn") {
                $(".button-name").text(btnName[3]);
                $(".button-info").text(btnInfo[3]);
                modalSun.show();
                modalFertilizer.hide();
                modalPlant.hide();
                
            //LIQUID SUNSHINE

        /* changes hue

            1- #8e525f = rgb(142, 82, 95)
            2- #ffce3c = rgb(255, 206, 60)
            3- #ff5c00 = rgb(255, 92, 0)
            4- #f42a41 = rgb(244, 42, 65)
            5- #ca50b6 = rgb(202, 80, 182) 
            6- #e336a8 = rgb(227, 54, 168)
            7- #3556ab = rgb(53, 86, 171)
            8- #00b4b2 = rgb(0, 180, 178) */

            }
            else {
                $(".garden-button").mouseleave();
                gardenModal.hide();
                modalBg.css("background-color","rgba(169,169,169, 0)");
                $("#garden-canvas").css("opacity","1");
            };
        };

        let sunSelection = $("[name='sunshine']");
        //gardenImgs.css("background-color", "rgb("+sc_r+","+sc_g+","+sc_b+")");
            $(sunSelection).click(function () {
                $("filter").css('display','block');
                let valueSun = $(this).attr('value');
  
                if (valueSun == "# 8e525f") {
                    $("rect").css('filter','url(#sun-filter)');
                    console.log("yiha");
                }
            });

        $(".close-modal").click(function () {
            gardenModal.hide();
            modalBg.css("background-color","rgba(169,169,169, 0)");
            $("#garden-canvas").css("opacity","1");
        });

    });


    //FERTILIZER
    /*
    1- #
    2- @
    3- $

    4- ()
    5- ?
    6- *

    7- +
    8- ~
    9- /

    10- %
    11- =
    12- ^

    //LIQUID SUNSHINE

    changes hue

    1- #8e525f = tint(142, 82, 95)
    2- #ffce3c = tint(255, 206, 60)
    3- #ff5c00 = tint(255, 92, 0)
    4- #f42a41 = tint(244, 42, 65)
    5- #ca50b6 = tint(202, 80, 182) 
    6- #e336a8 = tint(227, 54, 168)
    7- #3556ab = tint(53, 86, 171)
    8- #00b4b2 = tint(0, 180, 178)

    */


});
