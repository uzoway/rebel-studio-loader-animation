gsap.registerPlugin(CustomEase);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");
CustomEase.create("ease-out-quad", "0.25,0.46,0.45,0.94");
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");

CustomEase.create("ease-in-cubic", "0.55,0.055,0.675,0.19");
CustomEase.create("ease-in-quart", "0.895,0.03,0.685,0.22");


function initializeAnimation() {
    // Dynamically create and fill the viewport with equally sized div blocks
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


    // Preloader timeline animation
    const preloaderTl = gsap.timeline({ delay: 1.5 });

    preloaderTl.to(".preloader__overlay--text span", { 
        y: "0",
        ease: "ease-out-cubic",
        stagger: 0.2
    })
    .to(".preloader__overlay--text span", { 
        delay: 0.3,
        y: "100%",
        ease: "ease-in-quart",
        stagger: {
            from: "end",
            each: 0.2
        }
    })
    .to(".preloader__overlay--block", {
        autoAlpha: 0,
        ease: "ease-out-cubic",
        stagger: {
            amount: 1.1,
            from: "random"
        }
    })
}

window.addEventListener("DOMContentLoaded", initializeAnimation);
