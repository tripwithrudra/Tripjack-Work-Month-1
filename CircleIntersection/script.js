document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    makeCicle(x, y);
});

var circleCount = 0;
const mainSection = document.getElementById('main');
let circleCoors = [];

function makeCicle(x, y) {
    circleCount += 1;
    if (circleCount > 2) {
        // Clear all previous circles
        while (mainSection.firstChild) {
            mainSection.removeChild(mainSection.lastChild);
        }
        circleCount = 0;
        circleCoors = [];
        makeCicle(x, y);  // Restart with new circle
    } else {
        const newCircle = document.createElement('div');
        mainSection.appendChild(newCircle);
        newCircle.classList.add('newCicle');

        // Define random circle radius between 10 and 100
        const randomNumber = Math.random();
        const minRadius = 10;
        const maxRadius = 100;
        let circleRadius = Math.floor(randomNumber * (maxRadius - minRadius)) + minRadius;
        newCircle.style.position = 'absolute';
        newCircle.style.left = x - circleRadius + 'px';
        newCircle.style.top = y - circleRadius + 'px';
        newCircle.style.width = circleRadius * 2 + 'px';
        newCircle.style.height = circleRadius * 2 + 'px';

        circleCoors.push({ x, y, circleRadius });

        if (circleCount === 2) {
            // Update x0, y0, r0, x1, y1, r1 after both circles are created
            let x0 = circleCoors[0].x;
            let y0 = circleCoors[0].y;
            let r0 = circleCoors[0].circleRadius;
            let x1 = circleCoors[1].x;
            let y1 = circleCoors[1].y;
            let r1 = circleCoors[1].circleRadius;

            if (isIntersecting(x0, y0, r0, x1, y1, r1)) {
                console.log("Intersecting");
                document.body.style.backgroundColor = '#FF000080';
            } else {
                console.log("Not intersecting");
                document.body.style.backgroundColor = '#FFFFFF';
            }
        }
    }
}

function isIntersecting(x0, y0, r0, x1, y1, r1) {
    const dx = x1 - x0;
    const dy = y1 - y0;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const sumRadius = r0 + r1;
    return distance < sumRadius;
}
