function parseCount(a) {
    let resParse = Number.parseFloat(a);
    if (Number.isNaN(resParse)) {
        throw new Error ("Невалидное значение");
    }
    return resParse;
}

function validateCount(a) {
    try {
       return parseCount(a);
    } catch (error) {
       return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return area.toFixed(3);
    }
}

  function getTriangle(a, b , c) {
       try {
        const triangle = new Triangle(a, b, c);   
        return triangle; 
    } catch (error) {
      return {
        get perimeter() {
            return ("Ошибка! Треугольник не существует");
        },
        get area() {
            return ("Ошибка! Треугольник не существует");
        }
      }
    }
}

let triangle = new Triangle(5, 8, 10);
triangle.perimeter();