let confirmButton = document.getElementById("confirm").addEventListener('click', () => {

    let txtLink = document.getElementById("txtlink");
    let imgQrCode = document.getElementById("imgqrcode");
    let errorMessage = document.getElementById("errormessage");
    let sucessMessage = document.getElementById("sucessmessage");

    if(!txtLink.value.trim()) {
        imgQrCode.src = ``;
        errorMessage.style.display = "flex";
        sucessMessage.style.display = "none";
        console.log("[ERRO!]");
    } else {
        imgQrCode.src = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${txtlink.value}`;
        sucessMessage.style.display = "flex";
        errorMessage.style.display = "none";
        console.log("[SUCESSO!]")
    }
});