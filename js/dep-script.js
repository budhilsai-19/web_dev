var RegExp = new RegExp(/^\d*\.\d{1,2}$/);

var val = document.getElementsByName("cost").value;

function valid(elem) {

    if (RegExp.test(elem.value)) {
        val = elem.value;
    } else {
        elem.value = 0.01;
        alert("invald input! Input should be only decimal and upto 2 decimal values")

    }
}

