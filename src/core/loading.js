var showLoading = ()=> {
    var oldToast = document.getElementById('loading');
    if(oldToast) {
        return
    }

    var toast = document.createElement('div');
    toast.className = 'loading-start';

    var toastHolder = document.createElement('div');
    toastHolder.className = 'loading-box';
    toastHolder.id = 'loading';
    toastHolder.appendChild(toast)
    document.body.appendChild(toastHolder);

    toast.style.display = 'block';
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`;
};

var hideLoading = ()=> {
    var oldToast = document.getElementById('loading');
    if(oldToast) {
        document.body.removeChild(oldToast);
    }
};

export default {
    showLoading: showLoading,
    hideLoading: hideLoading
}