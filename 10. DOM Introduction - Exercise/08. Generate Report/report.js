function generateReport() {
        const tHeadElements = document.querySelectorAll('thead tr th');
        const tBodyRows = document.querySelectorAll('tbody tr');

        const checkedInputElements = [...tHeadElements]
            .map((element, i) => ({ input: element.children[0], index: i}))
            .filter((element) => element.input.checked);

        const outputData = [...tBodyRows].map((element) => {
            return checkedInputElements.reduce((acc, curr) => {
                acc[curr.input.name] = element.children[curr.index].textContent;
                return acc;
            }, {});
        });

        document.querySelector('#output').value = JSON.stringify(outputData);
}