$(document).ready(function () {

    let sunFilters;

    //load JSON file
    $.getJSON('../json/colors.json', function (data) {
        dataFromJSON = data;
        for (let j = 0; j < dataFromJSON.length; j++) {
        }
        sunFilters = dataFromJSON.filterElt;
        run();
    });

    function run() {
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

        // -- GARDEN BUTTON ==> hover event
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

        // -- GARDEN BUTTON ==> click event
        $(".garden-button").click(function () {
            $(".garden-button").off("mouseleave");
            modalBg.css("background-color", "rgba(169,169,169, 1)");
            $("#garden-canvas").css("opacity", "0.5");

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
                    modalBg.css("background-color", "rgba(169,169,169, 0)");
                    $("#garden-canvas").css("opacity", "1");

                    // garden effect => WATER
                    $("#water-anim").fadeIn(1000, function() {
                        Caman("#garden-img", function () {
                            this.brightness(-5).render();
                            //highest brightness value is 100
                          });
                        $("#water-anim").delay(1000).fadeOut(2000);
                    });
                }
                else if ($(this).attr("id") == "sun-btn") {
                    $(".button-name").text(btnName[3]);
                    $(".button-info").text(btnInfo[3]);
                    modalSun.show();
                    modalFertilizer.hide();
                    modalPlant.hide();
                }
                else {
                    $(".garden-button").mouseleave();
                    gardenModal.hide();
                    modalBg.css("background-color", "rgba(169,169,169, 0)");
                    $("#garden-canvas").css("opacity", "1");
                };
            };
            
            // LIQUID SUNSHINE => modal click events
            let sunSelection = $("[name='sunshine']");

            $(sunSelection).click(function () {

                let valueSun = $(this).attr('value');
                //  sunObj = sunFilters.length;
                for (let i = 0; i < sunFilters.length; i++) {

                    // hex color
                    let sunHex = sunFilters[i].Hex;
                    // filter properties
                    let sunInv = sunFilters[i].Invert;
                    let sunSepia = sunFilters[i].Sepia;
                    let sunSat = sunFilters[i].Saturate;
                    let sunHue = sunFilters[i].Hue;
                    let sunBright = sunFilters[i].Brightness;
                    let sunCon = sunFilters[i].Contrast;

                    if (valueSun == sunHex) {
                        gardenImgs.css("filter", "invert(" + sunInv + ") sepia(" + sunSepia + ") saturate(" + sunSat + ") hue-rotate(" + sunHue + ") brightness(" + sunBright + ") contrast(" + sunCon + ")");
                    }
                }
            });

            $(".close-modal").click(function () {
                gardenModal.hide();
                modalBg.css("background-color", "rgba(169,169,169, 0)");
                $("#garden-canvas").css("opacity", "1");
            });

        });
    }
});


