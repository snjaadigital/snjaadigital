function showLoading(duration = 2000, callback = null) {
    let loadingContainer = document.getElementById('loading-container') || (function() {
        let div = document.createElement('div');
        div.id = 'loading-container';
        div.innerHTML = '<div id="lottie-animation"></div>';
        document.body.appendChild(div);
        return div;
    })();

    Object.assign(loadingContainer.style, {
        position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
        backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: "9999", opacity: "1", visibility: "visible", transition: "opacity 0.8s ease-out, visibility 0.8s ease-out"
    });

    let lottieAnimation = document.getElementById('lottie-animation') || (function() {
        let div = document.createElement('div');
        div.id = 'lottie-animation';
        loadingContainer.appendChild(div);
        return div;
    })();

    lottie.loadAnimation({
        container: lottieAnimation, renderer: 'svg', loop: true, autoplay: true,
        path: 'https://lottie.host/286a3cfe-5539-4278-b429-0e3a5cc32af6/paly31yHqP.json'
    });

    setTimeout(() => {
        loadingContainer.style.opacity = "0";
        loadingContainer.style.visibility = "hidden";
        setTimeout(() => { loadingContainer.remove(); if (callback) callback(); }, 800);
    }, duration);
}

window.onload = () => showLoading(3000, () => console.log("Loading selesai!"));