"use strict";(self.webpackChunkteachable_web=self.webpackChunkteachable_web||[]).push([[522],{2522:(w,T,u)=>{u.r(T),u.d(T,{AdminModuleModule:()=>G});var p=u(8583),m=u(4655),e=u(7716);const U=function(){return["/admin/manageUsers"]},A=function(){return["/admin/manageCourses"]};let C=(()=>{class r{ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-functions"]],decls:7,vars:4,consts:[[1,"div-buttons"],[1,"div-buttonOne"],[1,"btn","btn-primary",3,"routerLink"],[1,"div-button"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e._uU(3,"Gestion usuarios"),e.qZA(),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"button",2),e._uU(6,"Gestion cursos"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(2,U)),e.xp6(3),e.Q6J("routerLink",e.DdM(3,A)))},directives:[m.rH],styles:[".div-buttons[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:absolute;top:200px;left:650px}.div-buttonOne[_ngcontent-%COMP%]{margin:1rem;padding:1rem}.div-button[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:relative}button[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:relative}"]}),r})();var c=u(8239),q=u(1841),b=u(2468);let d=(()=>{class r{constructor(t,o){this.http=t,this.data=o,this.API_URL="https://api-mongodbatlas.herokuapp.com/"}getUserInfo(t){return this.http.get(`${this.API_URL}${t}`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}}).toPromise()}getAllUsers(){return this.http.get(`${this.API_URL}getAllUsers`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}}).toPromise()}getAllCourses(){return this.http.get(`${this.API_URL}courses/allcourses`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}}).toPromise()}getCourse(t){return this.http.get(`${this.API_URL}courses/${t}`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}}).toPromise()}getCourseTwo(t){return this.http.get(`${this.API_URL}courses/${t}`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}removeStudent(t,o){return this.http.patch(`${this.API_URL}courses/removeStudent/${t}`,o,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}addParticipantCourse(t,o){return this.http.patch(`${this.API_URL}courses/newStudent/${t}`,o,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}updateUser(t,o){return this.http.patch(`${this.API_URL}users/${t}`,o,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}updateCourse(t,o){return this.http.patch(`${this.API_URL}courses/${t}`,o,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}addTeacherCourse(t,o){return this.http.patch(`${this.API_URL}courses/newTeacher/${t}`,o,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}insertUser(t){return this.http.post(`${this.API_URL}users`,t,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}insertCourse(t){return this.http.post(`${this.API_URL}courses`,t,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}deleteUser(t){return this.http.delete(`${this.API_URL}users/${t}`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}deleteCourse(t){return this.http.delete(`${this.API_URL}courses/${t}`,{headers:{Authorization:`Bearer ${this.data.getToken()}`}})}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(q.eN),e.LFG(b.D))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const I=function(r){return["/admin/updateCourse",r]};function y(r,i){if(1&r&&(e.TgZ(0,"li",3),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("routerLink",e.VKq(2,I,t._id)),e.xp6(1),e.Oqu(t.name)}}const k=function(){return["/admin/insertCourse"]};let S=(()=>{class r{constructor(t){this.service=t}ngOnInit(){this.getCourses()}getCourses(){var t=this;return(0,c.Z)(function*(){t.data=yield t.service.getAllCourses()})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-manage-courses"]],decls:8,vars:3,consts:[[1,"div-buttons"],[3,"routerLink",4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"routerLink"],[3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Cursos actuales"),e.qZA(),e.TgZ(3,"ol"),e.YNc(4,y,2,4,"li",1),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"button",2),e._uU(7,"Insertar curso"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.data),e.xp6(2),e.Q6J("routerLink",e.DdM(2,k)))},directives:[p.sg,m.rH],styles:[".div-buttons[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:absolute;top:200px;left:650px}button[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:relative}"]}),r})();var g=u(6458),h=u(1095);function M(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"input",4),e.NdJ("change",function(){const a=e.CHM(t).$implicit;return a.valor=!a.valor}),e.qZA(),e.TgZ(2,"label",5),e._uU(3),e.qZA(),e._UZ(4,"br"),e.qZA()}if(2&r){const t=i.$implicit;e.xp6(1),e.Q6J("checked",t.valor),e.xp6(2),e.hij(" ",t.nombre,"")}}const F=function(r){return["/admin/insertStudentCourse",r]};let J=(()=>{class r{constructor(t,o,n,a){this.router=t,this.service=o,this.route=n,this._snackBar=a,this.route.paramMap.subscribe(l=>{this.idCourse=l.get("id")})}ngOnInit(){this.getStudents()}getStudents(){var t=this;return(0,c.Z)(function*(){var o=yield t.service.getAllUsers();t.data=[],o.forEach(n=>{n.courses.forEach(a=>{a._id==t.idCourse&&1==parseInt(n.permissionLevel)&&t.data.push({nombre:n.name,id:n._id,valor:!1})})})})()}eliminarUsuarios(){this.data.forEach(t=>{t.valor&&this.eliminar(t.id)}),this.ngOnInit()}eliminar(t){this.service.removeStudent(this.idCourse,{idStudent:t}).subscribe(n=>{this._snackBar.open("Varlo removido","",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"}),this.ngOnInit()},n=>{console.log(n)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.F0),e.Y36(d),e.Y36(m.gz),e.Y36(g.ux))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-manage-student"]],decls:10,vars:4,consts:[[1,"centrarDiv"],[4,"ngFor","ngForOf"],["mat-raised-button","",1,"btn-form",3,"routerLink"],["mat-raised-button","",1,"btn-form",3,"click"],["id","person.nombre","type","checkbox",3,"checked","change"],["for","person.nombre"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2," Estudiantes curso "),e.qZA(),e._UZ(3,"p"),e.YNc(4,M,5,2,"div",1),e._UZ(5,"p"),e.TgZ(6,"button",2),e._uU(7,"Agregar"),e.qZA(),e.TgZ(8,"button",3),e.NdJ("click",function(){return o.eliminarUsuarios()}),e._uU(9,"Eliminar"),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.data),e.xp6(2),e.Q6J("routerLink",e.VKq(2,F,o.idCourse)))},directives:[p.sg,h.lW,m.rH],styles:[""]}),r})();var s=u(3679),Z=u(8295),f=u(9983),_=u(7441),v=u(2458);function N(r,i){if(1&r&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.s9C("value",t.name),e.xp6(1),e.Oqu(t.name)}}let P=(()=>{class r{constructor(t,o){this.formBuilder=t,this.service=o,this.teachers=[],this.form=this.formBuilder.group({nombre:[""],grado:[""],profesor:[""],horaIn:[""],horaFin:[""],dia1:[""],dia2:[""]})}ngOnInit(){this.getTeachers()}getTeachers(){var t=this;return(0,c.Z)(function*(){(yield t.service.getAllUsers()).forEach(n=>{7==n.permissionLevel&&t.teachers.push(n)})})()}insert(){var t;this.teachers.forEach(n=>{console.log(n),console.log(this.form.value.profesor),n.name==String(this.form.value.profesor)&&(t=n,console.log(t))}),this.service.insertCourse({name:this.form.value.nombre,grade:this.form.value.grado,schedule:{StartTime:this.form.value.horaIn,EndTime:this.form.value.horaFin,dayOne:this.form.value.dia1,dayTwo:this.form.value.dia2},teacher:{_id:t._id,name:t.name}}).subscribe(n=>{console.log("Insertado")},n=>{console.log(n)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(d))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-insert-course"]],decls:59,vars:2,consts:[[1,"centrarDiv"],[3,"formGroup","submit"],[1,"centrarIn"],["matInput","","type","text","formControlName","nombre","placeholder","Nombre"],["formControlName","grado","placeholder","Grado"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["formControlName","profesor","placeholder","Profesor"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","time","formControlName","horaIn","placeholder","Hora inicio"],["matInput","","type","time","formControlName","horaFin","placeholder","Hora fin"],["formControlName","dia1","placeholder","Dia 1"],["value","L"],["value","K"],["value","M"],["value","J"],["value","V"],["formControlName","dia2","placeholder","Dia 2"],["mat-raised-button","",1,"btn-form",3,"(click)"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Insertar curso"),e.qZA(),e.qZA(),e.TgZ(3,"div",0),e.TgZ(4,"form",1),e.NdJ("submit",function(){return o.insert()}),e.TgZ(5,"mat-form-field",2),e._UZ(6,"input",3),e.qZA(),e._UZ(7,"p"),e.TgZ(8,"mat-form-field",2),e.TgZ(9,"mat-select",4),e.TgZ(10,"mat-option",5),e._uU(11,"1"),e.qZA(),e.TgZ(12,"mat-option",6),e._uU(13,"2"),e.qZA(),e.TgZ(14,"mat-option",7),e._uU(15,"3"),e.qZA(),e.TgZ(16,"mat-option",8),e._uU(17,"4"),e.qZA(),e.TgZ(18,"mat-option",9),e._uU(19,"5"),e.qZA(),e.TgZ(20,"mat-option",10),e._uU(21,"6"),e.qZA(),e.qZA(),e.qZA(),e._UZ(22,"p"),e.TgZ(23,"mat-form-field",2),e.TgZ(24,"mat-select",11),e.YNc(25,N,2,2,"mat-option",12),e.qZA(),e.qZA(),e._UZ(26,"p"),e.TgZ(27,"mat-form-field",2),e._UZ(28,"input",13),e.qZA(),e.TgZ(29,"mat-form-field",2),e._UZ(30,"input",14),e.qZA(),e._UZ(31,"p"),e.TgZ(32,"mat-form-field",2),e.TgZ(33,"mat-select",15),e.TgZ(34,"mat-option",16),e._uU(35,"lunes"),e.qZA(),e.TgZ(36,"mat-option",17),e._uU(37,"Martes"),e.qZA(),e.TgZ(38,"mat-option",18),e._uU(39,"Miercoles"),e.qZA(),e.TgZ(40,"mat-option",19),e._uU(41,"Jueves"),e.qZA(),e.TgZ(42,"mat-option",20),e._uU(43,"Viernes"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(44,"mat-form-field",2),e.TgZ(45,"mat-select",21),e.TgZ(46,"mat-option",16),e._uU(47,"lunes"),e.qZA(),e.TgZ(48,"mat-option",17),e._uU(49,"Martes"),e.qZA(),e.TgZ(50,"mat-option",18),e._uU(51,"Miercoles"),e.qZA(),e.TgZ(52,"mat-option",19),e._uU(53,"Jueves"),e.qZA(),e.TgZ(54,"mat-option",20),e._uU(55,"Viernes"),e.qZA(),e.qZA(),e.qZA(),e._UZ(56,"p"),e.TgZ(57,"button",22),e.NdJ("(click)",function(){return o.insert()}),e._uU(58,"Insertar"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.form),e.xp6(21),e.Q6J("ngForOf",o.teachers))},directives:[s._Y,s.JL,s.sg,Z.KE,f.Nt,s.Fj,s.JJ,s.u,_.gD,v.ey,p.sg,h.lW],styles:[".div-buttons[_ngcontent-%COMP%]{margin:1rem;padding:1rem;position:absolute;top:200px;left:650px}"]}),r})();const L=function(r){return["/admin/updateUser",r]};function $(r,i){if(1&r&&(e.TgZ(0,"li",3),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("routerLink",e.VKq(2,L,t._id)),e.xp6(1),e.Oqu(t.name)}}const O=function(){return["/admin/insertUser"]};let B=(()=>{class r{constructor(t){this.service=t}getUsers(){var t=this;return(0,c.Z)(function*(){t.data=yield t.service.getAllUsers()})()}ngOnInit(){this.getUsers()}agregar(){}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-manage-users"]],decls:9,vars:3,consts:[[1,"centrarDiv"],[3,"routerLink",4,"ngFor","ngForOf"],["mat-raised-button","",1,"btn-form",3,"routerLink"],[3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2," Usuarios "),e.qZA(),e._UZ(3,"p"),e.TgZ(4,"ol"),e.YNc(5,$,2,4,"li",1),e.qZA(),e._UZ(6,"p"),e.TgZ(7,"button",2),e._uU(8,"Agregar"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngForOf",o.data),e.xp6(2),e.Q6J("routerLink",e.DdM(2,O)))},directives:[p.sg,h.lW,m.rH],styles:[""]}),r})();function Y(r,i){if(1&r&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.s9C("value",t.name),e.xp6(1),e.Oqu(t.name)}}const E=function(r){return["/admin/manageStudent",r]};let x=(()=>{class r{constructor(t,o,n,a){this.formBuilder=t,this.router=o,this.service=n,this.route=a,this.data=[],this.teachers=[],this.form=this.formBuilder.group({nombre:[],grado:[],profesor:[],horaIn:[],horaFin:[],dia1:[],dia2:[]}),this.route.paramMap.subscribe(l=>{this.id=l.get("id"),console.log(this.id)})}ngOnInit(){this.getTeachers(),this.getCourse()}getTeachers(){var t=this;return(0,c.Z)(function*(){(yield t.service.getAllUsers()).forEach(n=>{7==n.permissionLevel&&t.teachers.push(n)})})()}getCourse(){var t=this;return(0,c.Z)(function*(){t.data=yield t.service.getCourse(String(t.id)),console.log(t.data),t.form=t.formBuilder.group({nombre:[String(t.data.name)],grado:[String(t.data.grade)],profesor:[String(t.data.teacher.name)],horaIn:[String(t.data.schedule.StartTime)],horaFin:[String(t.data.schedule.EndTime)],dia1:[String(t.data.schedule.dayOne)],dia2:[String(t.data.schedule.dayTwo)]})})()}update(){var t;this.teachers.forEach(n=>{n.name==String(this.form.value.profesor)&&(t=n)}),this.service.updateCourse(this.id,{name:this.form.value.nombre,grade:this.form.value.grado,schedule:{StartTime:this.form.value.horaIn,EndTime:this.form.value.horaFin,dayOne:this.form.value.dia1,dayTwo:this.form.value.dia2},teacher:{_id:t._id,name:t.name}}).subscribe(n=>{console.log("Actualizado")},n=>{console.log(n)})}delete(){this.service.deleteCourse(this.id).subscribe(t=>{console.log("Eliminado"),this.router.navigate(["/admin/manageCourses"])},t=>{console.log(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(m.F0),e.Y36(d),e.Y36(m.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-update-course"]],decls:66,vars:5,consts:[[1,"centrarDiv"],["mat-raised-button","",1,"btn-form",3,"routerLink"],[3,"formGroup","submit"],[1,"centrarIn"],["matInput","","type","text","formControlName","nombre","placeholder","Nombre"],["formControlName","grado","placeholder","Grado"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["formControlName","profesor","placeholder","Profesor"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","time","formControlName","horaIn","placeholder","Hora inicio"],["matInput","","type","time","formControlName","horaFin","placeholder","Hora fin"],["formControlName","dia1","placeholder","Dia 1"],["value","L"],["value","K"],["value","M"],["value","J"],["value","V"],["formControlName","dia2","placeholder","Dia 2"],["mat-raised-button","",1,"btn-form",3,"(click)"],["mat-raised-button","",1,"btn-form",3,"click"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Administrar curso"),e.qZA(),e.qZA(),e._UZ(3,"p"),e.TgZ(4,"div",0),e.TgZ(5,"button",1),e._uU(6,"Estudiantes"),e.qZA(),e.qZA(),e._UZ(7,"p"),e.TgZ(8,"div",0),e.TgZ(9,"form",2),e.NdJ("submit",function(){return o.update()}),e.TgZ(10,"mat-form-field",3),e._UZ(11,"input",4),e.qZA(),e._UZ(12,"p"),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-select",5),e.TgZ(15,"mat-option",6),e._uU(16,"1"),e.qZA(),e.TgZ(17,"mat-option",7),e._uU(18,"2"),e.qZA(),e.TgZ(19,"mat-option",8),e._uU(20,"3"),e.qZA(),e.TgZ(21,"mat-option",9),e._uU(22,"4"),e.qZA(),e.TgZ(23,"mat-option",10),e._uU(24,"5"),e.qZA(),e.TgZ(25,"mat-option",11),e._uU(26,"6"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"mat-form-field",3),e.TgZ(28,"mat-select",12),e.YNc(29,Y,2,2,"mat-option",13),e.qZA(),e.qZA(),e._UZ(30,"p"),e.TgZ(31,"mat-form-field",3),e._UZ(32,"input",14),e.qZA(),e.TgZ(33,"mat-form-field",3),e._UZ(34,"input",15),e.qZA(),e._UZ(35,"p"),e.TgZ(36,"mat-form-field",3),e.TgZ(37,"mat-select",16),e.TgZ(38,"mat-option",17),e._uU(39,"lunes"),e.qZA(),e.TgZ(40,"mat-option",18),e._uU(41,"Martes"),e.qZA(),e.TgZ(42,"mat-option",19),e._uU(43,"Miercoles"),e.qZA(),e.TgZ(44,"mat-option",20),e._uU(45,"Jueves"),e.qZA(),e.TgZ(46,"mat-option",21),e._uU(47,"Viernes"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"mat-form-field",3),e.TgZ(49,"mat-select",22),e.TgZ(50,"mat-option",17),e._uU(51,"lunes"),e.qZA(),e.TgZ(52,"mat-option",18),e._uU(53,"Martes"),e.qZA(),e.TgZ(54,"mat-option",19),e._uU(55,"Miercoles"),e.qZA(),e.TgZ(56,"mat-option",20),e._uU(57,"Jueves"),e.qZA(),e.TgZ(58,"mat-option",21),e._uU(59,"Viernes"),e.qZA(),e.qZA(),e.qZA(),e._UZ(60,"p"),e.TgZ(61,"button",23),e.NdJ("(click)",function(){return o.update()}),e._uU(62,"Update"),e.qZA(),e.qZA(),e._UZ(63,"p"),e.TgZ(64,"button",24),e.NdJ("click",function(){return o.delete()}),e._uU(65,"Eliminar"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.VKq(3,E,o.id)),e.xp6(4),e.Q6J("formGroup",o.form),e.xp6(20),e.Q6J("ngForOf",o.teachers))},directives:[h.lW,m.rH,s._Y,s.JL,s.sg,Z.KE,f.Nt,s.Fj,s.JJ,s.u,_.gD,v.ey,p.sg],styles:[""]}),r})();var z=u(6588);function R(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"input",3),e.NdJ("change",function(){const a=e.CHM(t).$implicit;return a.valor=!a.valor}),e.qZA(),e.TgZ(2,"label",4),e._uU(3),e.qZA(),e._UZ(4,"br"),e.qZA()}if(2&r){const t=i.$implicit;e.xp6(1),e.Q6J("checked",t.valor),e.xp6(2),e.hij(" ",t.nombre,"")}}const H=[{path:"",component:C},{path:"manageCourses",component:S},{path:"manageUsers",component:B},{path:"insertCourse",component:P},{path:"manageStudent/:id",component:J},{path:"updateCourse/:id",component:x},{path:"insertUser",component:(()=>{class r{constructor(t,o,n,a){this.formBuilder=t,this.service=o,this._snackBar=n,this.emailService=a,this.actualPass="",this.form=this.formBuilder.group({nombre:[""],email:[""],tipo:[""],nivel:[""],id_card:[""]})}ngOnInit(){}insert(){this.genPass(),this.service.insertUser({email:this.form.value.email,password:this.actualPass,permissionLevel:this.form.value.tipo,name:this.form.value.nombre,id_card:this.form.value.id_card,level:this.form.value.nivel}).subscribe(o=>{this.emailService.sendUser(this.form.value.email,this.actualPass),console.log("Insertado"),this.form.reset(),this._snackBar.open("Valor insertado","",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"})},o=>{console.log(o)})}genPass(){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",o="",n=0;n<8;n++)o+=t.charAt(Math.floor(Math.random()*t.length));console.log(o),this.actualPass=o}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(d),e.Y36(g.ux),e.Y36(z.j))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-insert-user"]],decls:40,vars:1,consts:[[1,"centrarDiv"],[3,"formGroup","submit"],[1,"centrarIn"],["matInput","","type","text","formControlName","nombre","placeholder","Nombre"],["matInput","","type","email","formControlName","email","placeholder","Email"],["formControlName","nivel","placeholder","Nivel"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["matInput","","type","text","formControlName","id_card","placeholder","Id"],["formControlName","tipo","placeholder","Tipo"],["value","2048"],["value","7"],["mat-raised-button","",1,"btn-form",3,"(click)"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Insertar usuario"),e.qZA(),e.qZA(),e.TgZ(3,"div",0),e.TgZ(4,"form",1),e.NdJ("submit",function(){return o.insert()}),e.TgZ(5,"mat-form-field",2),e._UZ(6,"input",3),e.qZA(),e._UZ(7,"p"),e.TgZ(8,"mat-form-field",2),e._UZ(9,"input",4),e.qZA(),e._UZ(10,"p"),e.TgZ(11,"mat-form-field",2),e.TgZ(12,"mat-select",5),e.TgZ(13,"mat-option",6),e._uU(14,"1"),e.qZA(),e.TgZ(15,"mat-option",7),e._uU(16,"2"),e.qZA(),e.TgZ(17,"mat-option",8),e._uU(18,"3"),e.qZA(),e.TgZ(19,"mat-option",9),e._uU(20,"4"),e.qZA(),e.TgZ(21,"mat-option",10),e._uU(22,"5"),e.qZA(),e.TgZ(23,"mat-option",11),e._uU(24,"6"),e.qZA(),e.qZA(),e.qZA(),e._UZ(25,"p"),e.TgZ(26,"mat-form-field",2),e._UZ(27,"input",12),e.qZA(),e._UZ(28,"p"),e.TgZ(29,"mat-form-field",2),e.TgZ(30,"mat-select",13),e.TgZ(31,"mat-option",14),e._uU(32,"Administrador"),e.qZA(),e.TgZ(33,"mat-option",15),e._uU(34,"Profesor"),e.qZA(),e.TgZ(35,"mat-option",6),e._uU(36,"Estudiante"),e.qZA(),e.qZA(),e.qZA(),e._UZ(37,"p"),e.TgZ(38,"button",16),e.NdJ("(click)",function(){return o.insert()}),e._uU(39,"Insertar"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.form))},directives:[s._Y,s.JL,s.sg,Z.KE,f.Nt,s.Fj,s.JJ,s.u,_.gD,v.ey,h.lW],styles:[""]}),r})()},{path:"updateUser/:id",component:(()=>{class r{constructor(t,o,n,a,l){this.formBuilder=t,this.router=o,this.service=n,this.route=a,this._snackBar=l,this.form=this.formBuilder.group({nombre:[""],email:[""],nivel:[""],id_card:[""]}),this.route.paramMap.subscribe(V=>{this.id=V.get("id"),console.log(this.id)})}ngOnInit(){this.getUser()}getUser(){var t=this;return(0,c.Z)(function*(){t.data=yield t.service.getUserInfo(String(t.id)),console.log(t.data);var o=t.data.level,n=t.data.id_card;null==o&&(o=""),null==n&&(n=""),t.form=t.formBuilder.group({nombre:[String(t.data.name)],email:[String(t.data.email)],nivel:[String(o)],id_card:[String(n)]})})()}update(){this.service.updateUser(this.id,{email:this.form.value.email,name:this.form.value.nombre,level:this.form.value.nivel,id_card:this.form.value.id_card}).subscribe(o=>{console.log("Update"),this._snackBar.open("Valor actualizado","",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"})},o=>{console.log(o)})}delete(){this.service.deleteUser(this.id).subscribe(t=>{console.log("Eliminado"),this.router.navigate(["/admin/manageUsers"])},t=>{console.log(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(m.F0),e.Y36(d),e.Y36(m.gz),e.Y36(g.ux))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-update-user"]],decls:35,vars:1,consts:[[1,"centrarDiv"],[3,"formGroup","submit"],[1,"centrarIn"],["matInput","","type","text","formControlName","nombre","placeholder","Nombre"],["matInput","","type","email","formControlName","email","placeholder","Email"],["matInput","","type","text","formControlName","id_card","placeholder","Id_card"],["formControlName","nivel","placeholder","Nivel"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["mat-raised-button","",1,"btn-form",3,"(click)"],["mat-raised-button","",1,"btn-form",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Actualizar usuario"),e.qZA(),e.qZA(),e.TgZ(3,"div",0),e.TgZ(4,"form",1),e.NdJ("submit",function(){return o.update()}),e.TgZ(5,"mat-form-field",2),e._UZ(6,"input",3),e.qZA(),e._UZ(7,"p"),e.TgZ(8,"mat-form-field",2),e._UZ(9,"input",4),e.qZA(),e._UZ(10,"p"),e.TgZ(11,"mat-form-field",2),e._UZ(12,"input",5),e.qZA(),e._UZ(13,"p"),e.TgZ(14,"mat-form-field",2),e.TgZ(15,"mat-select",6),e.TgZ(16,"mat-option",7),e._uU(17,"1"),e.qZA(),e.TgZ(18,"mat-option",8),e._uU(19,"2"),e.qZA(),e.TgZ(20,"mat-option",9),e._uU(21,"3"),e.qZA(),e.TgZ(22,"mat-option",10),e._uU(23,"4"),e.qZA(),e.TgZ(24,"mat-option",11),e._uU(25,"5"),e.qZA(),e.TgZ(26,"mat-option",12),e._uU(27,"6"),e.qZA(),e.qZA(),e.qZA(),e._UZ(28,"p"),e._UZ(29,"p"),e.TgZ(30,"button",13),e.NdJ("(click)",function(){return o.update()}),e._uU(31,"Actualizar"),e.qZA(),e.qZA(),e._UZ(32,"p"),e.TgZ(33,"button",14),e.NdJ("click",function(){return o.delete()}),e._uU(34,"Eliminar"),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.form))},directives:[s._Y,s.JL,s.sg,Z.KE,f.Nt,s.Fj,s.JJ,s.u,_.gD,v.ey,h.lW],styles:[""]}),r})()},{path:"insertStudentCourse/:id",component:(()=>{class r{constructor(t,o,n,a){this.router=t,this.service=o,this.route=n,this._snackBar=a,this.route.paramMap.subscribe(l=>{this.idCourse=l.get("id")})}ngOnInit(){this.getStudents()}getStudents(){var t=this;return(0,c.Z)(function*(){var o=yield t.service.getAllUsers();t.data=[];var n=!1;o.forEach(a=>{a.courses.forEach(l=>{l._id==t.idCourse&&(n=!0)}),!n&&1==parseInt(a.permissionLevel)&&t.data.push({nombre:a.name,id:a._id,courses:a.courses,valor:!1}),n=!1}),t.courseInfo=yield t.service.getCourse(t.idCourse)})()}verifyHorario(t){console.log(t);var o=String(t.schedule.StartTime),n=String(t.schedule.StartTime),a=t.schedule.dayOne,l=t.schedule.dayTwo;return a!=this.courseInfo.schedule.dayOne&&a!=this.courseInfo.schedule.dayTwo&&l!=this.courseInfo.schedule.dayOne&&l!=this.courseInfo.schedule.dayTwo||o<=this.courseInfo.schedule.StartTime&&this.courseInfo.schedule.StartTime<=n||o<=this.courseInfo.schedule.EndTime&&this.courseInfo.schedule.EndTime<=n||this.courseInfo.schedule.StartTime==n&&this.courseInfo.schedule.EndTime==n}getCourse(t){var n=!1;return this.service.getCourseTwo(t).subscribe(a=>{n=this.verifyHorario(a)},a=>{console.log(a)}),n}choqueHorario(t){var o=!0;return t.forEach(n=>{o=this.getCourse(n._id)}),o}insertUsers(){this.data.forEach(o=>{o.valor&&(this.choqueHorario(o.courses)?this.agregar({user:{_id:o.id,name:o.nombre},course:{_id:this.idCourse,name:this.courseInfo.name}}):this._snackBar.open("Hubo un choque","",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"}))}),this.ngOnInit()}agregar(t){this.service.addParticipantCourse(this.idCourse,t).subscribe(o=>{this._snackBar.open("Valor insertado","",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"})},o=>{console.log(o)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.F0),e.Y36(d),e.Y36(m.gz),e.Y36(g.ux))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-insert-student-course"]],decls:8,vars:1,consts:[[1,"centrarDiv"],[4,"ngFor","ngForOf"],["mat-raised-button","",1,"btn-form",3,"click"],["id","person.nombre","type","checkbox",3,"checked","change"],["for","person.nombre"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2," Estudiantes para agregar al curso "),e.qZA(),e._UZ(3,"p"),e.YNc(4,R,5,2,"div",1),e._UZ(5,"p"),e.TgZ(6,"button",2),e.NdJ("click",function(){return o.insertUsers()}),e._uU(7,"Agregar"),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.data))},directives:[p.sg,h.lW],styles:[""]}),r})()}];let j=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.Bz.forChild(H)],m.Bz]}),r})(),G=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.ez,j]]}),r})()}}]);