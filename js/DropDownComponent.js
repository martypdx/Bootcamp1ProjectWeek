'use strict';
/* globals */
/* exported EffectToApply, DropDownMenu*/

const dropDownTemplate = document.getElementById('dropdown-template').content;

class DropDownMenu {

    constructor(data, id, onSelect) {
        this.data = data;
        this.id = id;
        this.onSelect = onSelect;

    }

    render() {

        const dom = dropDownTemplate.cloneNode(true);
        const dropDownId = dom.querySelector('select');
        dropDownId.addEventListener('change', () => {
            this.onSelect(dropDownId.value);
        });
        dropDownId.setAttribute('id', this.id);

        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            newOption.setAttribute('value', this.data[i].class);
            newOption.textContent = this.data[i].label;
            dropDownId.appendChild(newOption);
        }

        return dom;

    }
    
    updateSaves(data) {
        this.data = data;
        
        const selectedPreset = this.data[i];
        
        for(var i = 0; i < this.data.length; i++) {
            let newOption = document.createElement('option');
            
            newOption.textContent = this.data[i].name;
            console.log(this.dropDownId);
            this.dropDownId.appendChild(newOption);
            
        }
        this.dropDownId.addEventListener('change', () => {
            this.onSelect(getPresetByName(this.data, this.dropDownId.value));
            console.log(getPresetByName(this.data, this.dropDownId.value));
            
        });
    }
    
    renderSaves() {
        const dom = dropDownTemplate.cloneNode(true);
        this.dropDownId = dom.querySelector('select');

        // for(let i = 0; i < this.data.length; i++){

        // }

        this.updateSaves(this.data);



        return dom;
    }
}