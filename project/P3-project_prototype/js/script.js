$(document).ready(function () {

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

    $("#gd-one").hover(function () {
        $("#tp-one").show();
    });
    $("#gd-two").hover(function () {
        $("#tp-two").show();
    });
    $("#gd-three").hover(function () {
        $("#tp-three").show();
    });
    $("#gd-four").hover(function () {
        $("#tp-four").show();
    });

});