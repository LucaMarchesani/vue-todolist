// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const {createApp} = Vue;
createApp({
    data() {
      return {
        newGame: '',
        // creo un array di oggetti
        gameList:[
            {
                title: 'Bushiden',
                done: true
            },
            {
                title: 'Eastward',
                done: true
            },
            {
                title: 'ZeroRanger',
                done: true
            },
            {
                title: 'Cursed Castilla',
                done: false
            },
            {
                title: 'Lords of Exile',
                done: true
            },
            {
                title: 'Binding of Isaac',
                done: false
            },
            {
                title: 'Huntdown',
                done: false
            },
            {
                title: 'Blazing Chrome',
                done: false
            },
            {
                title: 'Blasphemous',
                done: false
            },
            {
                title: 'Hotline Miami',
                done: false
            }
        ]
      }
    },
    methods: {
        // se il testo inserito dall'utente non contiene nulla faccio partire un alert 
        addGame(game){
            if (this.newGame === ''){
                alert('no game no party!');
            } else{ // altrimenti lo metto nella gameList
                this.gameList.push({title: game, done: false});
                this.newGame = '';
            }
        },
        // se l'index di gameList è maggiore o uguale a 0 rimuovo l'elemento  
        deleteGame(item){
            itemIndex = this.gameList.indexOf(item);
            if (itemIndex >= 0){
                // a partire dall'elemento con indice uno
                this.gameList.splice(itemIndex, 1);
            }
        }
    }
  }).mount('#app');
