const calculatePerimeter = (width, height) => {
    return width + width + height + height
};

console.log(calculatePerimeter(1, 1));

const calculateArea = radius => {
    const area = Math.PI * radius * radius;
    return area;
};

const smallArea = calculateArea(2);

const calculateCircumference = radius => {
    return 2 * Math.PI * radius;
};