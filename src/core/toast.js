//提示信息封装
var toast = (msg = '', time = 1500) => {
    // console.log( msg );
    var toast = document.createElement('div');
    toast.className = 'common-toast common-toast-show';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    toast.style.display = 'block';
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`;
    var timer = setTimeout(() => {
        toast.className = 'common-toast common-toast-hide';
        clearTimeout(timer);
        var timer2 = setTimeout(() => {
            document.body.removeChild(toast);
            clearTimeout(timer2)
        }, 200)
    }, time)
};
export default  toast;
