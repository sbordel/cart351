$(document).ready(function () {
    let sunFilters;

    //get date, then month 
    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let numDaysinMonth;

    let currentDate = day + "/" + month;
    getSeason();
    isOdd();

    let season = getSeason();
    let totalDiff;
    let numOne;
    let numTwo;

    //display month & season 
    $("#date-info span:first-child").text(month + "/12");
    $("#date-info span:last-child").text(season);

    let dataFormT = new FormData();

    dataFormT.append(`pageDate`, currentDate);

    // ******* AJAX 
    $.ajax({
        type: "POST",
        url: "./garden.php",
        processData: false,//prevents from converting into a query string
        contentType: "application/json; charset=utf-8",
        data: dataFormT,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
            console.log(response);

            let parsedResponse = JSON.parse(response);
            getComparison(parsedResponse[0], day, month);

            // once time stamp is saved
            //load JSON file
            $.getJSON('json/colors.json', function (data) {
                dataFromJSON = data;
                for (let j = 0; j < dataFromJSON.length; j++) {
                }
                sunFilters = dataFromJSON.filterElt;
                run();
            });
        },
        error: function () {
            console.log("error occurred");
        }

    });

    //get season according to month
    function getSeason() {
        if (month <= 5 && 3 <= month) {
            return 'spring';
        } else if (month <= 8 && 6 <= month) {
            return 'summer';
        } else if (month <= 11 && 9 <= month) {
            return 'fall';
        } else {
            return 'winter';
        }
    };

    //determine if the current month has 30, 31 or 28 days (excluding the possibility of a bissextile year for simplicity)
    //odd number function adapted from this --> https://stackoverflow.com/a/5016327
    function isOdd(currentMonth) {
        let Num = currentMonth % 2;

        if (Num == 1) {
            numDaysinMonth = 30;
        } else if (currentMonth == 2) {
            numDaysinMonth = 28;
        } else {
            numDaysinMonth = 31;
        }
    };

    //then compare compare current day and month to previous day and month 
    function getComparison(dataFromPHP, currentDay, currentMonth) {
        let prevDay = dataFromPHP.day;
        let prevMonth = dataFromPHP.month;

        //display previous and current date
        console.log("previous date: " + prevDay + "/" + prevMonth);
        console.log("current date: " + currentDay + "/" + currentMonth);

        let dayDiff;

        //determine day difference
        if (currentDay > prevDay) {
            dayDiff = currentDay - prevDay;
        } else if (currentDay < prevDay) {
            dayDiff = (numDaysinMonth - prevDay) + currentDay;
        } else {
            dayDiff = 0;
        }

        if ((currentMonth < prevMonth) && (currentDay > prevDay)) {
            dayDiff = ((((12 - prevMonth) + 1) * 30) + 1) + dayDiff;
            //substract prevMonth to 12, add one month (to reset month cycle) then multiply average num days in a month. 
        }
        else if ((currentMonth < prevMonth) && (currentDay < prevDay)) {
            dayDiff = (((12 - prevMonth) * 30) + 1) + dayDiff;
            //substract prevMonth to 12, then multiply by average num days in a month. Then add to the currentDay and prevDay difference
        }
        else if ((currentMonth > prevMonth) && (currentDay > prevDay)) {
            dayDiff = (((currentMonth - prevMonth) * 30) + 1) + dayDiff;
            // multiply the currentMonth and prevMonth difference by 30 (average num days in a month) + 1 
        } else if ((currentMonth > prevMonth) && (currentDay < prevDay)) {
            dayDiff = ((((currentMonth - prevMonth) - 1) * 30) + 1) + dayDiff;
            // substract the currentMonth and prevMonth, then substract 1 month from the total. then multiply by 30.
        } else {
            dayDiff = 0 + dayDiff;
        }

        totalDiff = dayDiff;

        console.log(totalDiff + " (considering the current month has " + numDaysinMonth + " days)");

        //create 2 range functions
        function scale (number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }
        //range 1: between 0 and 50
        numOne = parseInt(scale(totalDiff, 1, 31, 0, 50));
        console.log(numOne);
        //range 2: between 0 and 1
        numTwo = scale(totalDiff, 1, 31, 0, 1);
        console.log(numTwo);

        gardenState(totalDiff, numOne, numTwo);
    }

    function gardenState() {
        if (season == "winter") {
            //callback when caman filters are done rendering
            Caman.Event.listen("renderFinished", function (job) {
                $("#garden-img").css('opacity','100');
              });
            if (13 >= totalDiff && totalDiff >= 3) {
                //WILTING:: sepia + contrast 
                Caman("#garden-img", function () {
                    this.sepia(numOne*2);
                    this.contrast(numOne);
                    this.clip(5);
                    this.render();
                });
                alert("your garden is wilting");
            };
            if (20 >= totalDiff && totalDiff >= 14) {
                //DRY SOIL:: sharpening 
                Caman("#garden-img", function () {
                    this.gamma(numTwo);
                    this.sharpen(100);
                    this.render();
                });
                alert("your garden's soil is drying");
            };
            if (27 >= totalDiff && totalDiff >= 21) {
                //DEFOLIATION:: thresholding
                Caman("#garden-img", function () {
                    this.newLayer(function () {
                        this.setBlendingMode("addition");
                        this.opacity(80);
                        this.copyParent();
                        // layer filter -- threshold ranges between 0 and 255.
                        // the lower the number, the bigger the white areas
                        this.filter.threshold(255);
                    });
                    this.render();
                });
                alert("your garden is experiencing defoliation");
            };
            if (totalDiff > 28) {
                //DISEASE:: white Spotting 
                Caman("#garden-img", function () {
                    this.newLayer(function () {
                        this.setBlendingMode("addition");
                        this.opacity(30)
                        this.copyParent();
                        // blur image to prevent artifact edges from being too defined
                        this.filter.heavyRadialBlur(50);
                        this.filter.edgeDetect(1);
                        // blur image for a second pass
                        this.filter.heavyRadialBlur(50);
                        this.filter.greyscale(20);
                    });
                    this.contrast(5);
                    this.render();
                });
                alert("your garden is infected :-(");
            } else {
                $("#garden-img").css('opacity','100');
                alert("your garden is looking healthy :-)");
            }
        };

        if (season == "spring") {
            //callback when caman filters are done rendering
            Caman.Event.listen("renderFinished", function (job) {
                $("#garden-img").css('opacity','100');
              });
            if (13 >= totalDiff && totalDiff >= 7) {
                //WILTING:: sepia + contrast 
                Caman("#garden-img", function () {
                    this.sepia(numOne*2);
                    this.contrast(numOne);
                    this.clip(5);
                    this.render();
                });
                alert("your garden is wilting");
            };
            if (21 >= totalDiff && totalDiff >= 14) {
                //BROWNING:: brown tint 
                Caman("#garden-img", function () {
                    this.saturation(20);
                    this.sepia(numOne*4)
                    this.newLayer(function () {
                        //browning layer
                        this.setBlendingMode("normal");
                        this.opacity(45);
                        this.fillColor('#5e3d36');
                    });
                    this.contrast(numOne);
                    this.brightness(-10);
                    this.render();
                });
                $("#garden-img").css('opacity','100');
                alert("your garden is turning brown");
            };
            if (totalDiff > 22) {
                //FERTILIZER CRUST:: embossing
                Caman("#garden-img", function () {
                    this.newLayer(function () {
                        //embossing layer
                        this.setBlendingMode("normal");
                        this.opacity(30);
                        this.copyParent();
                        this.filter.emboss(10);
                        this.filter.grayscale(30);
                    });
                    this.render();
                });
                alert("your garden is oversaturated in fertilizer!");
            } else {
                alert("garden is looking healthy :--)");
            }
        };

        if (season == "summer") {
            //callback when caman filters are done rendering
            Caman.Event.listen("renderFinished", function (job) {
                $("#garden-img").css('opacity','100');
              });
            if (20 >= totalDiff && totalDiff >= 7) {
                //YELLOWING:: yellow tint
                Caman("#garden-img", function yellowing() {
                    this.brightness(5);
                    this.contrast(numOne/3);
                    this.colorize("#FFFF00", 5);
                    this.render();
                });
                alert("your garden is turning yellow");
            };
            if (27 >= totalDiff && totalDiff >= 21) {
                //BROWNING:: brown tint 
                Caman("#garden-img", function () {
                    this.saturation(20);
                    this.sepia(numOne*4)
                    this.newLayer(function () {
                        //browning layer
                        this.setBlendingMode("normal");
                        this.opacity(45);
                        this.fillColor('#5e3d36');
                    });
                    this.contrast(numOne);
                    this.brightness(-10);
                    this.render();
                });
                alert("your garden is turning brown");
            };
            if (totalDiff > 28) {
                //DRY SOIL:: sharpening 
                Caman("#garden-img", function () {
                    this.gamma(numTwo);
                    this.sharpen(100);
                    this.render();
                });
                alert("your garden's soil is drying");
            } else {
                $("#garden-img").css('opacity','100');
                alert("garden is looking healthy :--)");
            }
        };

        if (season == "fall") {
            //callback when caman filters are done rendering
            Caman.Event.listen("renderFinished", function (job) {
                $("#garden-img").css('opacity','100');
              });
            if (6 >= totalDiff && totalDiff >= 3) {
                //YELLOWING:: yellow tint
                Caman("#garden-img", function yellowing() {
                    this.brightness(5);
                    this.contrast(numOne/2);
                    this.colorize("#FFFF00", 5);
                    this.render();
                });
                alert("your garden is turning yellow");
            };
            if (13 >= totalDiff && totalDiff >= 7) {
                //WILTING:: sepia + contrast 
                Caman("#garden-img", function () {
                    this.sepia(numOne*3);
                    this.contrast(numOne);
                    this.clip(5);
                    this.render();
                });
                alert("your garden is wilting");
            }; 
            if (20 >= totalDiff && totalDiff >= 14) {
                 //BROWNING:: brown tint 
                 Caman("#garden-img", function () {
                    this.saturation(20);
                    this.sepia(numOne*4)
                    this.newLayer(function () {
                        //browning layer
                        this.setBlendingMode("normal");
                        this.opacity(45);
                        this.fillColor('#5e3d36');
                    });
                    this.contrast(numOne);
                    this.brightness(-10);
                    this.render();
                });
                alert("your garden is turning brown");
            };
            if (totalDiff > 21) {
                //DISEASE:: white Spotting 
                Caman("#garden-img", function () {
                    this.newLayer(function () {
                        this.setBlendingMode("addition");
                        this.opacity(30)
                        this.copyParent();
                        // blur image to prevent artifact edges from being too defined
                        this.filter.heavyRadialBlur(50);
                        this.filter.edgeDetect(1);
                        // blur image for a second pass
                        this.filter.heavyRadialBlur(50);
                        this.filter.greyscale(20);
                    });
                    this.contrast(5);
                    this.render();
                });
                alert("your garden is infected :-(");
            } else {
                $("#garden-img").css('opacity','100');
                alert("garden is looking healthy :--)");
            }
        };
    }

    function run() {
        //  GARDEN
        //garden modal functions
        let gardenModal = $(".garden-modal");
        let modalPlant = $("#one.garden-modal");
        let modalFertilizer = $("#two.garden-modal");
        let modalSun = $("#three.garden-modal");
        let modalBg = $(".garden .modal-container");

        let gardenImgs = $("#garden-imgs");

        //arrays containing modal text
        const btnName = ["plant", "fertilize", "water", "liquid sunshine"];
        const btnInfo = ["upload an image to the server and expand the garden", "supply the garden with nutrients", "rehydrate the garden", "provide the garden with light to help it stay bright and healthy"];
        //make corresponding name + description appear if hovered
        //and remain if clicked
        let btnNum = btnName.length;

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
                    $("#water-anim").fadeIn(1000, function () {
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


