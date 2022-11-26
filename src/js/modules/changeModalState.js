import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if (elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }
                // console.log(state);
                switch(item.nodeName) {
                    case 'SPAN' : 
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT' : 
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                            console.log('checkbox');  
                        } else {
                            state[prop] = item.value;
                            console.log('input');
                        }
                        break;   
                    case 'SELECT' : 
                        state[prop] = item.value;
                        console.log('select');
                        break;   
                }

                console.log(state);
            });    
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     });
    // });
};

export default changeModalState;