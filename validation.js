// Regrex Real Number
let regRealNum = /^-?\d*$/;
// Regrex Number Integer
let regNum = /^\d*$/;

// Warning messeage
let warInterger = 'Chỉ được nhập số';
let warLess99 = 'Chỉ nhập tối đa 2 số';

let typeNum = document.querySelectorAll('.typeNum');
typeNum.forEach( (type) => {
    let _this = type;
    _this.oldValue = _this.value;
    _this.onkeyup = (event) => {
        if( /^-?\d*$/.test(_this.value) === true ) {
            _this.classList.remove("input-error");
            _this.setCustomValidity("");
            _this.oldValue = _this.value;
            _this.oldSelectionStart = _this.selectionStart;
            _this.oldSelectionEnd = _this.selectionEnd;
        } else if( _this.hasOwnProperty("oldValue") ) {
            _this.classList.add("input-error");
            _this.setCustomValidity(warInterger);
            _this.reportValidity();
            _this.value = _this.oldValue;
            _this.setSelectionRange(_this.oldSelectionStart, _this.oldSelectionEnd);
        } else {
            _this.value = "";
        }
    };
} );


document.getElementById('soBatKy').oldValue = document.getElementById('soBatKy').value;
document.getElementById('soBatKy').onkeyup = (event) => {
    let _this = document.getElementById('soBatKy');
    if ( regNum.test(_this.value) === true && _this.value.length <= 2 ) {
        _this.classList.remove("input-error");
        _this.setCustomValidity("");
        _this.oldValue = _this.value;
        _this.oldSelectionStart = _this.selectionStart;
        _this.oldSelectionEnd = _this.selectionEnd;
    } else if ( _this.value.length > 2 && _this.hasOwnProperty("oldValue") ) {
        _this.classList.add("input-error");
        _this.setCustomValidity(warLess99);
        _this.reportValidity();
        _this.value = _this.oldValue;
        _this.setSelectionRange(_this.oldSelectionStart, _this.oldSelectionEnd);
    } else if ( regNum.test(_this.value) === false && _this.hasOwnProperty("oldValue") ) {
        _this.classList.add("input-error");
        _this.setCustomValidity(warInterger);
        _this.reportValidity();
        _this.value = _this.oldValue;
        _this.setSelectionRange(_this.oldSelectionStart, _this.oldSelectionEnd);
    } else {
        _this.value = "";
    }

};