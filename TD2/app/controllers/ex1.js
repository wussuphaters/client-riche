import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      if (note.get('content')) note.set('info','Note sauvegardée !');
      else note.set('info','Note vide, enregistrement impossible !');
    },
    clear(note) {
      note.set('content','');
      note.set('info','Note effacée !');
    }
  }
});
