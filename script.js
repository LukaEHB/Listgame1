const MoveDomItem = class{
  constructor(child){
    this.$child = $(child);
    this.$parent = $('.js-list');
    this.initEvents();
  }

  initEvents(){
    this.$child.on('click',(e)=>{
      this.appendItem(e);
    })
  }

  appendItem(e){
    const $clickedItem = $(e.currentTarget);
    const $clickedParent = $clickedItem.parent();
    const clickedLeftList = $clickedParent.is(this.$parent.first());

    if (clickedLeftList) {
      this.$parent.last().append($clickedItem);
    } else {
      this.$parent.first().append($clickedItem);
    }
  }
}

new MoveDomItem('li');