// Uncomment to be able to toggle the grid visualizer
// document.querySelector("body").addEventListener("click", () => {
//     document.querySelector(".overlay").classList.toggle("active");
// })


gsap.registerPlugin(CustomEase);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");


function initializeAnimation() {
    const preloaderOverlay = document.querySelector(".preloader__overlay");

    const windowsWidth = window.innerWidth;
    const windowsHeight = window.innerHeight;
    const blockSize = 100;

    const numberOfRows = Math.ceil(windowsHeight / blockSize);
    const numberOfColumns = Math.ceil(windowsWidth / blockSize);

    const numberOfBlocks = numberOfColumns * numberOfRows;

    for (let i = 0; i < numberOfBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("preloader__overlay--block");
        block.setAttribute("aria-hidden", "true");
        preloaderOverlay.append(block);
    }

    // Adjust the size of the blocks to perfectly fit the viewport
    const adjustedBlockWidth = windowsWidth / numberOfColumns;
    const adjustedBlockHeight = windowsHeight / numberOfRows;

    const blocks = document.querySelectorAll('.preloader__overlay--block');
    blocks.forEach(block => {
        block.style.width = `${adjustedBlockWidth}px`;
        block.style.height = `${adjustedBlockHeight}px`;
    });

    gsap.to(".preloader__overlay--block", {
        autoAlpha: 0,
        delay: 1.5,
        ease: "power4.out",
        stagger: {
            amount: 1.1,
            from: "random"
        }
    })
}

window.addEventListener("DOMContentLoaded", initializeAnimation);
