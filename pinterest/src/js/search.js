export default function search() {
    document.getElementById('pinterestSearch').oninput = function(){
        let val = this.value.trim();
        let items = document.querySelectorAll('.userDescriptionWrap span');
        if (val != '') {
            items.forEach(element => {
                if (element.innerText.search(val) == -1) {
                    element.parentElement.parentElement.parentElement.classList.add('disabled');
                }
                else{
                    element.classList.remove('disabled')
                }
            });
        }else{
            items.forEach(element => {
                element.parentElement.parentElement.parentElement.classList.remove('disabled')
            })
        }
    }
}
search()
