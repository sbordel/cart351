$(document).ready(function () {

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
    let btnContainer = $("#tb-footer");

    const btnName = ["⇮", "plant", "fertilize", "water", "liquid sunshine"];
    const btnInfo = ["hover on the buttons above", "upload an image to the server and expand the garden", "supply the garden with nutrients", "rehydrate the garden", "provide the garden with light to help it stay bright and healthy"];
    let btnNum = btnName.length;
    //make corresponding name + description appear if hovered, and remain if clicked

    $(".garden-button").mouseenter(function () {
        for (let i = 0; i < btnNum; i++) {
            if ($(this).attr('id') == "plant-btn") {
                $("h1").text(btnName[1]);
                $("p").text(btnInfo[1]);
            }
            else if ($(this).attr('id') == "fertilize-btn") {
                $("h1").text(btnName[2]);
                $("p").text(btnInfo[2]);
            }
            else if ($(this).attr('id') == "water-btn") {
                $("h1").text(btnName[3]);
                $("p").text(btnInfo[3]);
            }
            else if ($(this).attr('id') == "sun-btn") {
                $("h1").text(btnName[4]);
                $("p").text(btnInfo[4]);
            }
            else {
                $("h1").text("");
                $("p").text("");
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
                $("h1").text(btnName[1]);
                $("p").text(btnInfo[1]);
            }
            else if ($(this).attr('id') == "fertilize-btn") {
                $("h1").text(btnName[2]);
                $("p").text(btnInfo[2]);
            }
            else if ($(this).attr('id') == "water-btn") {
                $("h1").text(btnName[3]);
                $("p").text(btnInfo[3]);
            }
            else if ($(this).attr('id') == "sun-btn") {
                $("h1").text(btnName[4]);
                $("p").text(btnInfo[4]);
            }
            else {
                $(".garden-button").mouseleave();
            };
        };
    });
});