(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),m=a(8),r=a.n(m),l=a(1),o=a(9),s=a(2),c=a(3),h=a(5),d=a(4),u=a(6),b=function(e){var t=e.cities.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)});return i.a.createElement("select",{name:"eventCity",onChange:e.handleChange},t)},p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(l.a)({},n,i));"memberName"===n?a.validation.name=!!/^[a-z\u0430-\u044f\u0451\s]+$/i.test(i):"memberEmail"===n?a.validation.email=!!/^\w{2,}[.-]?\w{2,}@mail.ru$/.test(i):"memberPhone"===n&&(a.validation.phone=!!/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i.test(i))},a.onFormSubmit=function(e){e.preventDefault(),a.validation.name&&a.validation.phone&&a.validation.email?(alert("\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),a.props.handleSubmit(a.state),a.setState(a.initialState)):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u043e\u043b\u044f")},a.handleValidation=function(e){var t=e.target.name;"memberName"===t?a.validation.name=!!/^[a-z\u0430-\u044f\u0451\s]{2,}$/i.test(a.state.memberName):"memberEmail"===t?a.validation.email=!!/[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim.test(a.state.memberEmail):"memberPhone"===t&&(a.validation.phone=!!/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i.test(a.state.memberPhone))},a.handleFile=function(e){var t=e.target.name,n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onloadend=function(e){a.setState(Object(l.a)({},t,e.target.result))}},a.initialState={memberName:"",memberEmail:"",memberPhone:"",memberPhoto:"",eventCity:""},a.validation={name:!0,email:!0,phone:!0},a.state=a.initialState,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.memberName,a=e.memberEmail,n=e.memberPhone,m=this.validation,r=m.name,l=m.email,o=m.phone;return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"),i.a.createElement("label",null,"\u0424\u0418\u041e"),i.a.createElement("span",{className:"error"},r?"":"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"),i.a.createElement("input",{type:"text",name:"memberName",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",value:t,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"Email"),i.a.createElement("span",{className:"error"},l?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 e-mail"),i.a.createElement("input",{type:"text",name:"memberEmail",placeholder:"mymail@mail.ru",value:a,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),i.a.createElement("span",{className:"error"},o?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u043c\u0435\u0440\u0430"),i.a.createElement("input",{type:"text",name:"memberPhone",placeholder:"+7(000)000-0000",value:n,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"\u0413\u043e\u0440\u043e\u0434 \u0434\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f"),i.a.createElement(b,{cities:this.props.cities,handleChange:this.handleChange}),i.a.createElement("input",{type:"file",onChange:this.handleFile,name:"memberPhoto"}),i.a.createElement("button",{type:"submit",className:"submit-btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.Component),v=function(){return i.a.createElement("h3",null,"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438:")},f=function(e){var t=e.membersData.map(function(t,a){var n=i.a.createElement("img",{height:"60",width:"70",alt:"Member",src:t.memberPhoto}),m=i.a.createElement("p",{className:"noImg"},"No photo");return i.a.createElement("article",{key:a,className:"member"},i.a.createElement("h4",null,t.memberName),i.a.createElement("p",null,t.eventCity),i.a.createElement("span",{className:"email"},t.memberEmail),t.memberPhoto?n:m,i.a.createElement("span",{className:"number"},t.memberPhone),i.a.createElement("div",{className:"btn-wrapper"},i.a.createElement("button",{onClick:function(){return e.editMemberInfo(a)},className:"edit-btn"},"\ud83d\udd89"),i.a.createElement("button",{onClick:function(){return e.removeMember(a)},className:"delete-btn"},"\ud83d\uddf4")))});return i.a.createElement("div",null,t)},E=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.membersData,a=e.editMemberInfo,n=e.removeMember;return i.a.createElement("section",null,i.a.createElement(v,null),i.a.createElement(f,{membersData:t,editMemberInfo:a,removeMember:n}))}}]),t}(n.Component),g=function(e){var t=e.cities.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)});return i.a.createElement("select",{name:"eventCity",onChange:e.handleChange},t)},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(l.a)({},n,i));"memberName"===n?a.validation.name=!!/^[a-z\u0430-\u044f\u0451\s]+$/i.test(i):"memberEmail"===n?a.validation.email=!!/^\w{2,}[.-]?\w{2,}@mail.ru$/.test(i):"memberPhone"===n&&(a.validation.phone=!!/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i.test(i))},a.onFormSave=function(e){e.preventDefault(),a.validation.name&&a.validation.phone&&a.validation.email?(alert("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430"),a.props.handleEdit(a.state),a.setState(a.initialState)):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u043e\u043b\u044f")},a.handleValidation=function(e){var t=e.target.name;"memberName"===t?a.validation.name=!!/^[a-z\u0430-\u044f\u0451\s]{2,}$/i.test(a.state.memberName):"memberEmail"===t?a.validation.email=!!/[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim.test(a.state.memberEmail):"memberPhone"===t&&(a.validation.phone=!!/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i.test(a.state.memberPhone))},a.handleFile=function(e){var t=e.target.name,n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onloadend=function(e){a.setState(Object(l.a)({},t,e.target.result))}},a.initialState={memberName:a.props.editInfo[0].memberName,memberEmail:a.props.editInfo[0].memberEmail,memberPhone:a.props.editInfo[0].memberPhone,memberPhoto:a.props.editInfo[0].memberPhoto,eventCity:a.props.editInfo[0].eventCity},a.validation={name:!0,email:!0,phone:!0},a.state=a.initialState,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refs.memberName.focus()}},{key:"render",value:function(){var e=this.state,t=e.memberName,a=e.memberEmail,n=e.memberPhone,m=this.validation,r=m.name,l=m.email,o=m.phone;return i.a.createElement("div",{className:"editFormContainer"},i.a.createElement("form",{className:"editForm",onSubmit:this.onFormSave},i.a.createElement("button",{className:"close-btn",onClick:this.props.closeForm},"\xd7"),i.a.createElement("fieldset",null,i.a.createElement("legend",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),i.a.createElement("label",null,"\u0424\u0418\u041e"),i.a.createElement("span",{className:"error"},r?"":"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"),i.a.createElement("input",{type:"text",ref:"memberName",name:"memberName",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",value:t,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"Email"),i.a.createElement("span",{className:"error"},l?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 e-mail"),i.a.createElement("input",{type:"text",name:"memberEmail",placeholder:"mymail@mail.ru",value:a,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),i.a.createElement("span",{className:"error"},o?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u043c\u0435\u0440\u0430"),i.a.createElement("input",{type:"text",name:"memberPhone",placeholder:"+7(000)000-0000",value:n,onBlur:this.handleValidation,onChange:this.handleChange,required:!0}),i.a.createElement("label",null,"\u0413\u043e\u0440\u043e\u0434 \u0434\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f"),i.a.createElement(g,{cities:this.props.cities,handleChange:this.handleChange}),i.a.createElement("input",{type:"file",onChange:this.handleFile,name:"memberPhoto"}),i.a.createElement("button",{type:"submit",className:"submit-btn"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){a.setState({membersData:[].concat(Object(o.a)(a.state.membersData),[e])})},a.closeForm=function(){a.setState({editMode:!1,editInfo:[]})},a.handleEdit=function(e){var t=a.state.editInfo[1];a.state.membersData.splice([t],1,e),a.setState({editMode:!1,editInfo:[]})},a.editMemberInfo=function(e){var t=a.state.membersData[e];a.setState({editMode:!0,editInfo:[t,e]})},a.removeMember=function(e){var t=a.state.membersData;a.setState({membersData:t.filter(function(t,a){return a!==e})})},a.state={membersData:[],editMode:!1,editInfo:[],cities:["","\u041c\u043e\u0441\u043a\u0432\u0430","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a","\u041a\u0430\u0437\u0430\u043d\u044c","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a","\u041e\u043c\u0441\u043a","\u0421\u0430\u043c\u0430\u0440\u0430","\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443"]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(l.a)({},e,t))}catch(a){this.setState(Object(l.a)({},e,t))}}}},{key:"saveStateToLocalStorage",value:function(){for(var e in this.state)localStorage.setItem(e,JSON.stringify(this.state[e]))}},{key:"render",value:function(){var e=this.state,t=e.membersData,a=e.editInfo,n=e.cities;return i.a.createElement("div",{className:"container"},i.a.createElement(p,{handleSubmit:this.handleSubmit,membersData:t,cities:n}),i.a.createElement(E,{editMemberInfo:this.editMemberInfo,removeMember:this.removeMember,membersData:t}),this.state.editMode?i.a.createElement(S,{handleEdit:this.handleEdit,membersData:t,editInfo:a,closeForm:this.closeForm,cities:n}):"")}}]),t}(n.Component);a(16);r.a.render(i.a.createElement(C,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.41a9962f.chunk.js.map