// THIS IS LIMITED TIME

(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (window.location.pathname != '/play/toy') {
                alert('You must be in a workshop game!');
            } else {
                let toys = Number(parseFloat(prompt('How much toys do you want?')));
                reactHandler().stateNode.setState({ toys2: toys, toys: toys });

                alert('Toys added!');
            };
})();
