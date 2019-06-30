;
(function () {
    // Initialize Firebase Start
    var config = {
    apiKey: "AIzaSyCDq2sTZfITQhBlDjQqV6jvFCD_C5Zo8VU",
    authDomain: "bts-web-ae8c5.firebaseapp.com",
    databaseURL: "https://bts-web-ae8c5.firebaseio.com",
    projectId: "bts-web-ae8c5",
    storageBucket: "gs://bts-web-ae8c5.appspot.com",
    messagingSenderId: "1036051727327"
  };
    
    
    
    firebase.initializeApp(config);
    // Initialize Firebase End
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    var conList = document.getElementById('con-list');
    var form = document.getElementById('add-con-form');
    //  create element and render cafe
    function renderCon(doc) {
        var li = document.createElement('li');
        var name = document.createElement('span');
        var numero = document.createElement('span');
        var cross = document.createElement('div');
        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        numero.textContent = doc.data().numero;
        cross.textContent = 'x';
        li.appendChild(name);
        li.appendChild(numero);
        li.appendChild(cross);
        conList.appendChild(li);
    
        cross.addEventListener('click', function (e) {
            e.stopPropagation();
            var id = e.target.parentElement.getAttribute('data-id');
            db.collection('contatos').doc(id)["delete"]();
        });
    }
 
    db.collection('contatos').where('numero', '==', 'manchester').orderBy('name').get().then(function (snapshot) {
        snapshot.docs.forEach(function (doc) {
            renderCon(doc);
        });
    });
    
    function removeSpace(e) {
        
        return e.replace(/\s+/g, '');
        
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formName = form.name.value.trim();
        var formNumero = form.numero.value.trim();
        
        if (removeSpace(formName) !== '' && removeSpace(formNumero) !== '') {
            db.collection('contatos').add({
                name: removeSpace(formName),
                numero: removeSpace(formNumero)
            });
            form.reset();
        }
        else {
            alert('！！');
        }
    });
   
    db.collection('contatos').orderBy('numero').onSnapshot(function (snapshot) {
        var changes = snapshot.docChanges();
        changes.forEach(function (change) {
            if (change.type === 'added') {
                renderCon(change.doc);
            }
            else if (change.type === 'removed') {
                var li = conList.querySelector('[data-id=' + change.doc.id + ']');
                conList.removeChild(li);
            }
        });
    });
})();