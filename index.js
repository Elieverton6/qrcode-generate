let confirmButton = document.getElementById("confirm").addEventListener('click', function () {

    let txtlink = document.getElementById("txtlink");
    let imgqrcode = document.getElementById("imgqrcode");

    if(txtlink.value.length == 0) {
        console.log("por favor digite algo");
    } else {
        imgqrcode.src = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${txtlink.value}`
        console.log("tudo ok!")
    }

});