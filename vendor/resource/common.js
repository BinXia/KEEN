var localSign = 0;

// Bind click function
function initListListeners(ListID,List){    
  $("#"+ListID+" tbody").unbind();

  function tableClick() {
    List.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
  function tableDBLClick() {
    if (List.$('tr.selected').length != 0) {
      var para = {
        "id":"Modal",
        "size":"modal-dialog modal-lg",
        "title":List.rows('.selected').data()[0][2],
        "parent":$("#PresentationsShell"),
        "subject":[
          creSupplementList($("<div>"),"SubList")
        ],
        "backdrop":true,
        "buttonID":"Close",
        "button":"Close",
        "EVENT":
          function Close(){
            $("#closeSubModal").click();
          }
      };
      initModal(para);
      initModalList({"Supplement":List.rows('.selected').data()[0][2]},"SubList");
    }
    else {
      alert("Please select a presentation!")
    }
  }
  $("#"+ListID+" tbody").on( 'click', 'tr', tableClick);
  $("#"+ListID+" tbody").on( 'dblclick', 'tr', tableDBLClick);
}




function creSupplementList(Parent,id) {
  var table = $("<table>",{id:id||"List",class:"display",cellspacing:"0",width:"100%"});
  var thead = $("<thead>").append($("<tr>",{id:(id?"SubSearch":"Search")})
                                  .append($("<th>").append("No."))
                                  .append($("<th>").append("Type"))
                                  .append($("<th>").append("Title")));
  Parent.append(table.append(thead));
  return Parent;
}

function creAddPresentation(Parent,id){
  

  return Parent;
}

















function initModalList(listType,id){
    datasetM = [];
    if (listType.hasOwnProperty("Supplement")) {
      colOptionsM = [
        { data: 0},
        { data: 1},
        { data: 2, width: "10%",
          fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
            if (localSign == 0) {
              $(nTd).html("<a href="+papers[listType["Supplement"]]["Supplement"][sData]["URL"]+" target=\"view_window\">"+sData+"</a>");
            }
            else {
              $(nTd).html("<a href="+papers[listType["Supplement"]]["Supplement"][sData]["URL_Local"]+" target=\"view_window\">"+sData+"</a>");
            }
          }
        },
      ];
      for (var key in papers[listType["Supplement"]]["Supplement"]) {
        if (localSign == 0 && !papers[listType["Supplement"]]["Supplement"][key].hasOwnProperty("URL")) {
          continue;
        }
        else {
          datasetM.push([datasetM.length+1,papers[listType["Supplement"]]["Supplement"][key]["Type"],key]);
        }
      };
    }

    ListParaM = {
        "id":id,
        "columns":colOptionsM,
        "dataset":datasetM
    };
    SubList = initLocalList(SubList,ListParaM);
}

// 初始化信息列表
function initLocalList(List,para){
  if (List!=null) {
      List.destroy();
  }

  var List = $('#'+para.id).DataTable({
      data: para.dataset,
      columns: para.columns,
      dom: 'rtip',
  })

  return List;
}

// 初始化Modal控件
function initModal(para){
  $("#"+para.id).remove();

  var size = (para.hasOwnProperty("size"))?para.size:"",
      title = (para.hasOwnProperty("title"))?para.title:"",
      parent = (para.hasOwnProperty("parent"))?para.parent:$("#ControlPanel"),
      subject = (para.hasOwnProperty("subject"))?para.subject:$("<div>");
      buttonID = (para.hasOwnProperty("buttonID"))?para.buttonID:"ModalSubmit",
      button = (para.hasOwnProperty("button"))?para.button:"确定";
      EVENT = (para.hasOwnProperty("EVENT"))?para.EVENT:function(){return};

  var modal = $("<div>",{class:"modal fade",id:para.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"});
  var dialog = $("<div>",{class:size,role:"document"});
  var content = $("<div>",{class:"modal-content"});
  var head = $("<div>",{class:"modal-header"});
  var close = $("<button>",{id:"closeSubModal",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"}).append($("<span>",{"aria-hidden":"true"}).append("&times;"));
  var title = $("<h5>",{class:"modal-title"}).append(title)
  head.append(title).append(close);
  var body = $("<div>",{class:"modal-body"});
  for (var i =  0; i < subject.length; i++) {
      body.append(subject[i]);
  };
  var footer = $("<div>",{class:"modal-footer"});
  var submit = $("<button>",{id:buttonID,type:"button",class:"btn btn-primary"}).append(button);
  footer.append(submit);
  content.append(head).append(body).append(footer);
  dialog.append(content);
  modal.append(dialog);
  parent.append(modal);

  document.getElementById(buttonID).onclick = EVENT;

  $("#Modal").modal({
    backdrop: (para.hasOwnProperty("backdrop"))?para.backdrop:false,
    keyboard: (para.hasOwnProperty("keyboard"))?para.keyboard:false
  })
}

// 初始化Combobox控件
function initCombobox(para){
  var Combobox = $('#'+para.id).magicSuggest({
      renderer: function(data){
          if (para.hasOwnProperty("renderer")) {
              var field = para.renderer.split("+");
              var string = "";
              for (var i = 0; i < field.length; i++) {
                  // join field and string using "+"
                  string += (data.hasOwnProperty(field[i]))?data[field[i]].toString():field[i].toString();
              }
              return string;
          }
          return data.name;
          
      },
      selectionRenderer: function(data){
          if (para.hasOwnProperty("selection")) {
              return data[para.selection];
          }
          else {
              var field = para.renderer.split("+");
              var string = "";
              for (var i = 0; i < field.length; i++) {
                  // join field and string using "+"
                  string += (data.hasOwnProperty(field[i]))?data[field[i]].toString():field[i].toString();
              }
              return string;
          }
      },
      valueField: (para.hasOwnProperty("valueField"))?para.valueField:"id",
      toggleOnClick: (para.hasOwnProperty("toggleOnClick"))?para.toggleOnClick:true,
      resultAsString: (para.hasOwnProperty("resultAsString"))?para.resultAsString:true,
      sortOrder: (para.hasOwnProperty("sortOrder"))?para.sortOrder:(para.hasOwnProperty("valueField"))?para.valueField:"id",
      hideTrigger: (para.hasOwnProperty("hideTrigger"))?para.hideTrigger:false,
      maxDropHeight: (para.hasOwnProperty("maxDropHeight"))?para.maxDropHeight:145,
      autoSelect: (para.hasOwnProperty("autoSelect"))?para.autoSelect:true,
      value: (para.hasOwnProperty("value"))?para.value:[],
      allowFreeEntries: (para.hasOwnProperty("allowFreeEntries"))?para.allowFreeEntries:false,
      useTabKey: true,
      useZebraStyle: true,
      matchCase: true,
      maxSelection: (para.hasOwnProperty("maxSelection"))?para.maxSelection:1,
      disabled: (para.hasOwnProperty("disabled"))?para.disabled:false,
      placeholder: (para.hasOwnProperty("placeholder"))?para.placeholder:" ",
      noSuggestionText: (para.hasOwnProperty("noSuggestionText"))?para.noSuggestionText:'未找到 {{query}}'
  });
  
  if (para.hasOwnProperty("url")) {
      $.getJSON(para.url,function(data){
          Combobox.setData(data);
          Combobox.setValue((para.hasOwnProperty("setValue"))?para.setValue:[]);
      })
  }
  else if (para.hasOwnProperty("data")) {
      Combobox.setData(para.data);
  }
  else {
      throw("No Data!");
  }
  return Combobox;
}
