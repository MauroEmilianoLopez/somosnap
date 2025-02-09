const transparent = () => {
    const header = document.querySelector('body > header');
    const animationRange = 100; // Rango de scroll para completar la animación (en píxeles)
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / animationRange, 1); // Normalizamos a 0-1
    const lerp = (start, end, amount) => start + (end - start) * amount;
    // Interpolación de colores
    const startColor = [0, 0, 0, 0]; // transparent
    const endColor = [255, 250, 250, 1]; // snow (RGB: 255,250,250)

    const currentColor = startColor.map((channel, index) =>
        lerp(channel, endColor[index], progress)
    );

    // Interpolación de sombra
    const shadowOpacity = lerp(0, 0.4, progress);
    const shadowBlur = lerp(0, 4, progress); // 0.25rem ≈ 4px

    // Aplicar estilos
    header.style.backgroundColor = `rgba(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}, ${currentColor[3]})`;
    header.style.boxShadow = `0 0 ${shadowBlur}px rgba(21, 21, 21, ${shadowOpacity})`;
};

export default transparent;