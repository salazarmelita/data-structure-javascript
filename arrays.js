// utilizando clase para construcción de array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    // creación de método para acceso 
    get(index) {
        return this.data[index]
    }
    // creación de método para agregar elementos
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data
    }
    // creación de método para eliminar último elemento
    pop() {
        const lastItem = this.data[this.length - 1]
        // utilizamos "keyword"
        delete this.data[this.length - 1]
        this.length--;
        return lastItem
    }
    // eliminar elemento específico
    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }
    // método para cambiar lugar a los items
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
    }
    // método para eliminar elemento inicial
    unshift(item) {
        if (item) {
            for (let i = this.length; i > 0; i--) {
              this.data[i] = this.data[i - 1];
            }
            this.data[0] = item;
            this.length++;
        }
        return this.length;
    }
}
// generamos una instancia de la clase creada:
const myArray = new MyArray


myArray.push('césar')
myArray.push('julian')
myArray.unshift('gustavo')
console.log(myArray)




