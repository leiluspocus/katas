class Stack {
    private items: string[] = [];

    constructor(items: string[]) {
        this.items = items;
    }

    // Push operation
    push(element: string) { 
        this.items.push(element); 
    }

    // Pop operation
    pop()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        this.items.pop();
    }

    // Peek operation
    peek()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty operation
    isEmpty() { return this.items.length === 0; }

    // Size operation
    size() { return this.items.length; }

    // Print the stack
    print() { console.log(this.items); }
}

export default Stack;