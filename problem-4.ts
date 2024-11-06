type Circle = {
    shape: 'circle';
    radius: number;
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    
    if (shape.shape === 'circle') {
        console.log(Math.PI * shape.radius ** 2);
        return Math.PI * shape.radius ** 2;
    }

    if (shape.shape === 'rectangle') {
        console.log(shape.width * shape.height);
        return shape.width * shape.height;
    }
    throw new Error("Unknown shape type");


}

// Example usage
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

