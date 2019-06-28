class Store {

    constructor(onChange) {
        this._arr = [
            {
                name: "test",
                value: "testValue"
            },
            {
                name: "test2",
                value: "testValue2"
            }];
        this._currentItem = {name: "def", value: "def"};

        this._onChange = onChange;
        this._onChange(this);
    }

    getArr() {
        return this._arr;
    }

    getItem() {
        return this._currentItem;
    }

    setItemValue(val) {
        this._currentItem.value = val;
        this._currentItem.name = val;
        console.log(this._currentItem);
        this._onChange(this);
    }

    addItem() {
        this._arr.push({value: this._currentItem.value, name: this._currentItem.name});
        this._onChange(this);
    }
}

export default Store;
