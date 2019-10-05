$(function () {


    $(function () {
        // 赤
        $("#fcBtn1").click(function () {
            // cssで文字色を赤に変更
            $("#fcBox").css("color", "red");
        });
        // 青
        $("#fcBtn2").click(function () {
            // cssで文字色を青に変更
            $("#fcBox").css("color", "blue");
        });
        // リセット
        $("#fcBtn3").click(function () {
            // cssで文字色をデフォルトに変更
            $("#fcBox").css("color", "black");
        });
    });
});
