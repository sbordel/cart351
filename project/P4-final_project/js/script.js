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

    const btnName = ["plant", "fertilize", "water", "liquid sunshine"];
    const btnInfo = ["upload an image to the server and expand the garden", "supply the garden with nutrients", "rehydrate the garden", "provide the garden with light to help it stay bright and healthy"];
    let btnNum = btnName.length;
    //make corresponding name + description appear if hovered, and remain if clicked

    $(".garden-button").mouseenter(function () {
        for (let i = 0; i < btnNum; i++) {
            if ($(this).attr('id') == "plant-btn") {
                $(".button-name").text(btnName[0]);
                $(".button-info").text(btnInfo[0]);
            }
            else if ($(this).attr('id') == "fertilize-btn") {
                $(".button-name").text(btnName[1]);
                $(".button-info").text(btnInfo[1]);
            }
            else if ($(this).attr('id') == "water-btn") {
                $(".button-name").text(btnName[2]);
                $(".button-info").text(btnInfo[2]);
            }
            else if ($(this).attr('id') == "sun-btn") {
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

        for (let i = 0; i < btnNum; i++) {
            if ($(this).attr('id') == "plant-btn") {
                $(".button-name").text(btnName[0]);
                $(".button-info").text(btnInfo[0]);
                modalPlant.show();
                modalFertilizer.hide();
                modalSun.hide();
            }
            else if ($(this).attr('id') == "fertilize-btn") {
                $(".button-name").text(btnName[1]);
                $(".button-info").text(btnInfo[1]);
                modalFertilizer.show();
                modalPlant.hide();
                modalSun.hide();
            }
            else if ($(this).attr('id') == "water-btn") {
                $(".button-name").text(btnName[2]);
                $(".button-info").text(btnInfo[2]);
                gardenModal.hide();
            }
            else if ($(this).attr('id') == "sun-btn") {
                console.log(modalSun);
                $(".button-name").text(btnName[3]);
                $(".button-info").text(btnInfo[3]);
                modalSun.show();
                modalFertilizer.hide();
                modalPlant.hide();
            }
            else {
                $(".garden-button").mouseleave();
                gardenModal.hide();
            };
        };

        $(".close-modal").click(function () {
            gardenModal.hide();
        });
    });

    let imgElement = document.getElementById('imageSrc');
    let inputElement = document.getElementById('fileInput');
    inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    }, false);
    imgElement.onload = function() {
    let mat = cv.imread(imgElement);
    cv.imshow('canvasOutput', mat);
    mat.delete();
    };
    
});