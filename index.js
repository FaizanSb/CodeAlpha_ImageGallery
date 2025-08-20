

let images = document.querySelectorAll('.imgContainer .image img');
let currentImageIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", () => {
        currentImageIndex = index;

        let overLay = document.createElement("div");
        overLay.classList.add("overMain");
        overLay.style.height = "100vh";
        overLay.style.width = "100vw";
        overLay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overLay.style.zIndex = "100000";
        overLay.style.position = "fixed";
        overLay.style.top = "0";
        overLay.style.left = "0";

        let bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.classList.add("bigImg");

        bigImg.style.width = "80%";
        bigImg.style.margin = "20px auto";
        bigImg.style.display = "block";
        bigImg.style.borderRadius = "10px";
        bigImg.style.height = '90%';
        overLay.appendChild(bigImg);
        document.body.appendChild(overLay);

        let countImg = document.createElement("div");
        countImg.textContent = `${currentImageIndex + 1} / ${images.length}`;
        countImg.style.position = "absolute";
        countImg.style.bottom = "20px";
        countImg.style.left = "50%";
        countImg.style.transform = "translateX(-50%)";
        countImg.style.color = "white";
        overLay.appendChild(countImg);

        let forwardBtn = document.createElement("button");
        forwardBtn.classList.add("forwardBtn");
        forwardBtn.textContent = "Next";
        forwardBtn.style.position = "absolute";
        forwardBtn.style.top = "50%";
        forwardBtn.style.right = "20px";
        forwardBtn.style.transform = "translateY(-50%)";
        forwardBtn.style.zIndex = "1000000";
        forwardBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        forwardBtn.style.color = "white";
        forwardBtn.style.cursor = "pointer";
        forwardBtn.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length; // move forward in loop
            bigImg.src = images[currentImageIndex].src;
            countImg.textContent = `${currentImageIndex + 1} / ${images.length}`;
        }
        overLay.appendChild(forwardBtn);

        let backBtn = document.createElement("button");
        backBtn.classList.add("backBtn");
        backBtn.textContent = "Prev";
        backBtn.style.position = "absolute";
        backBtn.style.top = "50%";
        backBtn.style.left = "20px";
        backBtn.style.transform = "translateY(-50%)";
        backBtn.style.zIndex = "1000000";
        backBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        backBtn.style.color = "white";
        backBtn.style.cursor = "pointer";
        backBtn.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // move backward in loop
            bigImg.src = images[currentImageIndex].src;
            countImg.textContent = `${currentImageIndex + 1} / ${images.length}`;

        }
        overLay.appendChild(backBtn);

        let crossBtn = document.createElement("button");
        crossBtn.classList.add("crossBtn");
        crossBtn.textContent = "Close";
        crossBtn.style.position = "absolute";
        crossBtn.style.top = "20px";
        crossBtn.style.right = "20px";
        crossBtn.style.transform = "translateY(-50%)";
        crossBtn.style.zIndex = "1000000";
        crossBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        crossBtn.style.color = "white";
        crossBtn.style.cursor = "pointer";
        crossBtn.onclick = () => {
            overLay.remove();
        }
        overLay.appendChild(crossBtn);



    })
})