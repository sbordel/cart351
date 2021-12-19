$(document).ready(function () {

    aboutModals();

    function aboutModals() {
        // INDEX
        //about modal functions
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
    };
});