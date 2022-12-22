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
        
            if (window.location.pathname != '/kingdom') {
                alert('You must be in a crazy kingdom game!');
            } else {
              let materials = Number(parseFloat(prompt('Materials?')));
                reactHandler().stateNode.setState({ materials: materials });
              let people = Number(parseFloat(prompt('People?')));
                reactHandler().stateNode.setState({ people: people });
              let happiness = Number(parseFloat(prompt('Happiness?')));
                reactHandler().stateNode.setState({ happiness: happiness });
              let gold = Number(parseFloat(prompt('Gold?')));
                reactHandler().stateNode.setState({ gold: gold });
        
                alert('Stats set!');
            };
})();
