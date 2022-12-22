// due to some problems, this script works on every website (it doesnt do anything, itll probably throw errors at you if you dont use it in deceptive dinos game mode)

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
        
            if (window.location.pathname != '/dinos') {
                 let fossils = Number(parseFloat(prompt('How many fossils do you want?')));
                reactHandler().stateNode.setState({ fossils: fossils });

                alert('Fossils added!');
            } else {
                let fossils = Number(parseFloat(prompt('How many fossils do you want?')));
                reactHandler().stateNode.setState({ fossils: fossils });

                alert('Fossils added!');
           };
})();
