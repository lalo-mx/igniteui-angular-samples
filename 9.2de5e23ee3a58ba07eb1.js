(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B8vO:function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),a=n("ZYCi"),o=n("mrSG"),r=n("3LKZ"),u=n("ezEM"),s=n("KFm9"),i=n("mtXQ"),c=function(){function l(l,e){this.resolver=l,this.injector=e,this.canSave=!1}return l.prototype.ngOnInit=function(){this.workbookCreate()},l.prototype.workbookSave=function(){this.canSave&&i.a.save(this.wb,"ExcelWorkbook").then(function(l){console.log("Saved:"+l)},function(l){console.error("ExcelUtility.Save Error:"+l)})},l.prototype.workbookParse=function(l){var e,n,t,a;if(void 0===l)this.worksheetRegion=null,this.selectedRegion=null;else{var r=new Array;try{for(var u=o.__values(l.worksheets()),s=u.next();!s.done;s=u.next()){var i=s.value;try{for(var c=o.__values(i.tables()),b=c.next();!b.done;b=c.next())r.push(i.name+" - "+b.value.name)}catch(h){t={error:h}}finally{try{b&&!b.done&&(a=c.return)&&a.call(c)}finally{if(t)throw t.error}}}}catch(w){e={error:w}}finally{try{s&&!s.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}this.worksheetRegion=r,this.selectedRegion=r.length>0?r[0]:null}this.wb=l,this.canSave=null!=l},l.prototype.workbookCreate=function(){for(var l,e,n,t,a=new u.a(s.a.Excel2007),r=a.worksheets().add("Employees"),i=r.rows(0),c=["Amazon","Ford","Jaguar","Tesla","IBM","Microsoft"],b=["Andrew","Mike","Martin","Ann","Victoria","John","Brian","Jason","David"],h=["Smith","Jordan","Johnson","Anderson","Louis","Phillips","Williams"],w=["UK","France","USA","Germany","Poland","Brazil"],d=["Sales Rep.","Engineer","Administrator","Manager"],g=["Name","Company","Title","Age","Country"],p=0;p<g.length;p++)r.columns(p).width=5e3,i.setCellValue(p,g[p]);for(var m=1;m<20;m++){var f=this.getItem(c),k=this.getItem(d),v=this.getItem(w),C=this.getItem(b)+" "+this.getItem(h),B=this.getRandom(45e3,95e3),y=this.getRandom(20,65);(P=r.rows(m)).setCellValue(0,C),P.setCellValue(1,f),P.setCellValue(2,k),P.setCellValue(3,y),P.setCellValue(4,v),P.setCellValue(5,B)}var x=a.worksheets().add("Expanses"),A=x.rows(0),S=0;try{for(var R=o.__values(["Year","Computers","Research","Travel","Salary","Software"]),V=R.next();!V.done;V=R.next()){var M=V.value;for(x.columns(S).width=5e3,A.setCellValue(S,M),m=1;m<20;m++){var P=x.rows(m);"Year"===M?P.setCellValue(S,2010+m):"Computers"===M?P.setCellValue(S,this.getAmount(5e4,65e3)):"Research"===M?P.setCellValue(S,this.getAmount(15e4,165e3)):"Travel"===M?P.setCellValue(S,this.getAmount(2e4,25e3)):"Salary"===M?P.setCellValue(S,this.getAmount(4e6,45e4)):"Software"===M&&P.setCellValue(S,this.getAmount(1e5,15e4))}S++}}catch(I){l={error:I}}finally{try{V&&!V.done&&(e=R.return)&&e.call(R)}finally{if(l)throw l.error}}var O=a.worksheets().add("Income"),F=O.rows(0),E=0;try{for(var L=o.__values(["Year","Phones","Computers","Software","Services","Royalties"]),_=L.next();!_.done;_=L.next()){for(M=_.value,O.columns(E).width=5e3,F.setCellValue(E,M),m=1;m<20;m++)P=O.rows(m),"Year"===M?P.setCellValue(E,2010+m):"Software"===M?P.setCellValue(E,this.getAmount(7e5,85e4)):"Computers"===M?P.setCellValue(E,this.getAmount(25e4,265e3)):"Royalties"===M?P.setCellValue(E,this.getAmount(4e5,45e4)):"Phones"===M?P.setCellValue(E,this.getAmount(6e6,65e4)):"Services"===M&&P.setCellValue(E,this.getAmount(7e5,75e4));E++}}catch(Y){n={error:Y}}finally{try{_&&!_.done&&(t=L.return)&&t.call(L)}finally{if(n)throw n.error}}this.workbookParse(a)},l.prototype.onCommentChanged=function(l){var e=this.wb.worksheets(0).rows(0),n=new r.wf,t=new r.sc("This cell has a reference name.");!0===l.checked?(n.text=t,e.cells(0).comment=n):e.cells(0).comment=null},l.prototype.onFormulaChanged=function(l){var e,n=this.wb.worksheets(0);!0===l.checked?((e=r.zc.parse("=AVERAGE(F2:F20)",r.L.A1)).applyTo(n.rows(21).cells(5)),n.rows(20).cells(5).value="Average Salary"):(null!=n.rows(21).cells(5).formula&&(e=n.rows(21).cells(5).formula),null!=e&&(n.rows(21).cells(5).value=null,n.rows(20).cells(5).value=null))},l.prototype.onMergeChanged=function(l){var e;!0===l.checked?(this.wb.worksheets(0).rows(2).cells(2).value="Engineer",this.wb.worksheets(0).rows(3).cells(2).value="Engineer",this.wb.worksheets(0).rows(4).cells(2).value="Engineer",this.wb.worksheets(0).mergedCellsRegions().add(2,2,4,2),e=this.wb.worksheets(0).mergedCellsRegions(0)):(1===this.wb.worksheets(0).mergedCellsRegions().count&&(e=this.wb.worksheets(0).mergedCellsRegions(0)),null!=e&&(this.wb.worksheets(0).mergedCellsRegions().removeAt(0),this.wb.worksheets(0).rows(2).cells(2).value="Engineer",this.wb.worksheets(0).rows(3).cells(2).value="Engineer",this.wb.worksheets(0).rows(4).cells(2).value="Engineer"))},l.prototype.getRandom=function(l,e){return Math.floor(Math.random()*(e-l+1)+l)},l.prototype.getItem=function(l){return l[this.getRandom(0,l.length-1)]},l.prototype.getAmount=function(l,e){return this.getRandom(l,e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},l}(),b=(a.q.forChild([{path:"",component:c}]),function(){return function(){}}()),h=n("pMnS"),w=n("0sT/"),d=n("St8s"),g=n("lh1m"),p=n("0N7A"),m=n("CsOG"),f=n("vQjP"),k=n("dxTv"),v=n("SuRo"),C=n("jXXG"),B=n("C5vE"),y=n("W1dq"),x=n("xF7l"),A=n("HfHQ"),S=n("HpyL"),R=n("Vibr"),V=n("Ak32"),M=n("ruC9"),P=n("uRBO"),O=n("9ddr"),F=n("Tv7c"),E=n("a/NA"),L=t.rb({encapsulation:0,styles:[[".cellOptions[_ngcontent-%COMP%]{display:block;width:100%}.workbookOperations[_ngcontent-%COMP%]{width:160px;padding-left:5px;padding-right:5px;float:left}.cellFeatures[_ngcontent-%COMP%], .workbookDetails[_ngcontent-%COMP%]{float:left;width:35%;height:100px;padding-left:5px;padding-right:5px}.workbookDetails[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{display:inline-block;width:100%;height:90px}.label[_ngcontent-%COMP%]{margin-top:8px;font-weight:700}.workbookPreview[_ngcontent-%COMP%]{display:inline-block;padding-left:5px;padding-right:5px;width:100%;height:200px}.workbookButton[_ngcontent-%COMP%]{display:block;width:150px;margin-top:5px}.workbookSelector[_ngcontent-%COMP%]{display:inline-block;width:150px;margin-top:5px}"]],data:{}});function _(l){return t.Nb(0,[t.Jb(402653184,1,{gridContainerRef:0}),(l()(),t.tb(1,0,null,null,17,"div",[["class","sample-wrapper container"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,16,"div",[["class","cellOptions"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,3,"div",[["class","workbookOperations"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,2,"button",[["class","workbookButton"]],[[8,"disabled",0]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.workbookSave()&&t),t},null,null)),(l()(),t.tb(5,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Save Workbook"])),(l()(),t.tb(7,0,null,null,11,"div",[["class","cellFeatures"]],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,1,"label",[["class","label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Add a Comment to cell A1: "])),(l()(),t.tb(10,0,null,null,0,"input",[["id","addComment"],["type","checkbox"]],null,[[null,"change"]],function(l,e,n){var t=!0;return"change"===e&&(t=!1!==l.component.onCommentChanged(n.target)&&t),t},null,null)),(l()(),t.tb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,1,"label",[["class","label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Add a Formula for cells F2 to F20: "])),(l()(),t.tb(14,0,null,null,0,"input",[["id","addFormula"],["type","checkbox"]],null,[[null,"change"]],function(l,e,n){var t=!0;return"change"===e&&(t=!1!==l.component.onFormulaChanged(n.target)&&t),t},null,null)),(l()(),t.tb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"label",[["class","label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Merge Cells: "])),(l()(),t.tb(18,0,null,null,0,"input",[["id","mergeCells"],["type","checkbox"]],null,[[null,"change"]],function(l,e,n){var t=!0;return"change"===e&&(t=!1!==l.component.onMergeChanged(n.target)&&t),t},null,null))],null,function(l,e){l(e,4,0,!e.component.canSave)})}function I(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"app-cells",[],null,null,null,_,L)),t.Ib(4608,null,E.b,E.b,[]),t.sb(2,114688,null,0,c,[t.j,t.r],null,null)],function(l,e){l(e,2,0)},null)}var Y=t.pb("app-cells",c,I,{},{},[]),T=n("Ip0R"),q=n("gIcY"),J=n("tlnV"),D=n("alXI"),H=n("0Bnw"),N=n("ig8C"),j=n("RLfT"),z=n("/737"),W=n("OShY"),G=n("qOLr"),Q=n("aDHH"),U=n("wFlA"),K=n("Pt10"),X=n("AsRL"),Z=n("9qNP"),$=n("Lchs"),ll=n("/qIM"),el=n("ae6L"),nl=n("KQ/f"),tl=n("scpH"),al=n("Tq87"),ol=n("DhkS"),rl=n("PCwa"),ul=n("ouga"),sl=n("f5y8"),il=n("BYVD"),cl=n("dYu1"),bl=n("FlLc"),hl=n("gCCH"),wl=n("uHxc"),dl=n("39sY"),gl=n("FDnN"),pl=n("SwFJ"),ml=n("/5/m"),fl=n("BHqN"),kl=n("llb+"),vl=n("+z7R"),Cl=n("UDp/"),Bl=n("WJY9"),yl=n("wrbV"),xl=n("8t2o"),Al=n("xCYO"),Sl=n("SBiU"),Rl=n("k6CL"),Vl=n("0Mut"),Ml=n("b72Z"),Pl=n("Lwt6"),Ol=n("IYQa"),Fl=n("2PnE"),El=n("1L41"),Ll=n("5xyD"),_l=n("2+5C");n.d(e,"ExcelLibraryWorkingWithCellsModuleNgFactory",function(){return Il});var Il=t.qb(b,[],function(l){return t.Ab([t.Bb(512,t.j,t.eb,[[8,[h.a,w.a,d.a,g.a,p.a,m.a,f.a,k.a,v.a,C.a,B.a,y.a,x.a,A.a,S.a,R.a,V.a,M.a,P.a,O.a,F.a,Y]],[3,t.j],t.y]),t.Bb(4608,T.p,T.o,[t.v,[2,T.z]]),t.Bb(4608,q.z,q.z,[]),t.Bb(1073742336,a.q,a.q,[[2,a.w],[2,a.m]]),t.Bb(1073742336,T.c,T.c,[]),t.Bb(1073742336,q.w,q.w,[]),t.Bb(1073742336,q.j,q.j,[]),t.Bb(1073742336,J.a,J.a,[]),t.Bb(1073742336,D.a,D.a,[]),t.Bb(1073742336,H.a,H.a,[]),t.Bb(1073742336,N.a,N.a,[]),t.Bb(1073742336,j.a,j.a,[]),t.Bb(1073742336,z.a,z.a,[]),t.Bb(1073742336,W.a,W.a,[]),t.Bb(1073742336,G.a,G.a,[]),t.Bb(1073742336,Q.a,Q.a,[]),t.Bb(1073742336,U.a,U.a,[]),t.Bb(1073742336,K.a,K.a,[]),t.Bb(1073742336,X.a,X.a,[]),t.Bb(1073742336,Z.a,Z.a,[]),t.Bb(1073742336,$.a,$.a,[]),t.Bb(1073742336,ll.a,ll.a,[]),t.Bb(1073742336,el.a,el.a,[]),t.Bb(1073742336,nl.a,nl.a,[]),t.Bb(1073742336,tl.a,tl.a,[]),t.Bb(1073742336,al.a,al.a,[]),t.Bb(1073742336,ol.a,ol.a,[]),t.Bb(1073742336,rl.a,rl.a,[]),t.Bb(1073742336,ul.a,ul.a,[]),t.Bb(1073742336,sl.a,sl.a,[]),t.Bb(1073742336,il.a,il.a,[]),t.Bb(1073742336,cl.a,cl.a,[]),t.Bb(1073742336,bl.a,bl.a,[]),t.Bb(1073742336,hl.a,hl.a,[]),t.Bb(1073742336,wl.a,wl.a,[]),t.Bb(1073742336,dl.a,dl.a,[]),t.Bb(1073742336,gl.a,gl.a,[]),t.Bb(1073742336,pl.a,pl.a,[]),t.Bb(1073742336,ml.a,ml.a,[]),t.Bb(1073742336,fl.a,fl.a,[]),t.Bb(1073742336,kl.a,kl.a,[]),t.Bb(1073742336,vl.a,vl.a,[]),t.Bb(1073742336,Cl.a,Cl.a,[]),t.Bb(1073742336,Bl.a,Bl.a,[]),t.Bb(1073742336,yl.a,yl.a,[]),t.Bb(1073742336,xl.a,xl.a,[]),t.Bb(1073742336,Al.a,Al.a,[]),t.Bb(1073742336,Sl.a,Sl.a,[]),t.Bb(1073742336,Rl.a,Rl.a,[]),t.Bb(1073742336,Vl.a,Vl.a,[]),t.Bb(1073742336,Ml.a,Ml.a,[]),t.Bb(1073742336,Pl.a,Pl.a,[]),t.Bb(1073742336,Ol.a,Ol.a,[]),t.Bb(1073742336,Fl.a,Fl.a,[]),t.Bb(1073742336,El.a,El.a,[]),t.Bb(1073742336,Ll.a,Ll.a,[]),t.Bb(1073742336,_l.a,_l.a,[]),t.Bb(1073742336,b,b,[]),t.Bb(1024,a.k,function(){return[[{path:"",component:c}]]},[])])})}}]);