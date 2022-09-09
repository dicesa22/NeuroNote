"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[978],{978:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var i=t(152),s=t(791),a=t(749),l=t(724),r=(t(682),t(360),t(980),t(975),t(25)),o=t(574),c=t(854);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},u.apply(this,arguments)}var d=s.memo(s.forwardRef((function(e,n){var t=s.useRef(n),i=s.useRef(0),a=function(e){var n=t.current;n&&c.p7.isVisible(n)&&(i.current||(i.current=n.scrollHeight,n.style.overflow="hidden"),(i.current!==n.scrollHeight||e)&&(n.style.height="",n.style.height=n.scrollHeight+"px",parseFloat(n.style.height)>=parseFloat(n.style.maxHeight)?(n.style.overflowY="scroll",n.style.height=n.style.maxHeight):n.style.overflow="hidden",i.current=n.scrollHeight))},l=s.useMemo((function(){return c.gb.isNotEmpty(e.value)||c.gb.isNotEmpty(e.defaultValue)||t.current&&c.gb.isNotEmpty(t.current.value)}),[e.value,e.defaultValue]);s.useEffect((function(){c.gb.combinedRefs(t,n)}),[t,n]),s.useEffect((function(){e.autoResize&&a(!0)}),[e.autoResize]);var r=c.gb.isNotEmpty(e.tooltip),h=c.gb.findDiffKeys(e,d.defaultProps),p=(0,c.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":l,"p-inputtextarea-resizable":e.autoResize},e.className);return s.createElement(s.Fragment,null,s.createElement("textarea",u({ref:t},h,{className:p,onFocus:function(n){e.autoResize&&a(),e.onFocus&&e.onFocus(n)},onBlur:function(n){e.autoResize&&a(),e.onBlur&&e.onBlur(n)},onKeyUp:function(n){e.autoResize&&a(),e.onKeyUp&&e.onKeyUp(n)},onInput:function(n){e.autoResize&&a(),e.onInput&&e.onInput(n);var t=n.target;c.gb.isNotEmpty(t.value)?c.p7.addClass(t,"p-filled"):c.p7.removeClass(t,"p-filled")}})),r&&s.createElement(o.u,u({target:t,content:e.tooltip},e.tooltipOptions)))})));d.displayName="InputTextarea",d.defaultProps={__TYPE:"InputTextarea",autoResize:!1,tooltip:null,tooltipOptions:null,onInput:null};var h=t(540),p=t(989),m=t(14),f=t(184),x=["focal","generalized"],v=["headache","mood change","anxiety","irritability","lethargy","decreased appetite","increased appetite","lightheadedness","visual hallucinations","auditory hallucination","other"],j=["right arm","left arm","right leg","left leg","right face","left face","other"],b=["seconds","minutes","hours","days","weeks","years"],g=["hyperventilation","emotional stress","flashing lights","movement","change in body position","sleep deprivation","ASM nonadherence","alcohol use","fever","menses","other"],N=["incontinence of urine","incontinence of stool","injury during episode","tongue biting","strange smells","strange sensations","visual hallucinations","distortions in visual sensation","distortions in auditory sensation","distortions in time sensation","deja vu","previous staring episodes","enuresis","falling out of bed","awakening exhausted with muscle aches","rising sensation in the abdomen","other"],y=["CT scan of head","MRI of head","EEG","drug screen","metabolic screen","lumbar puncture","CBC","ESR","RPR","SPECT scan","PET scan","other"],C=["carbamazepine (Carbatrol)","carbamazepine (Tegretol)","carbamazepine (Tegretol XR)","clobazam (Onfi)","clonazepam (Klonopin)","diazepam (Diastat)","ethosuximide (Zarontin)","gabapentin (Neurontin)","lacosamide (Vimpat)","lamotrigine (Lamictal)","levetiracetam (Keppra)","oxcarbazepine (Trileptal)","phenobarbital","phenytoin (Dilantin)","primidone (Mysoline)","tiagabine (Gabitril)","topiramate (Topamax)","valproic acid (Depakote)","zonisamide (Zonegran)","methylphenidate (Ritalin)","other"],S=["IUGR","preterm birth","neonatal asphyxia","NICU stay","other perinatal complications:","developmental delay","febrile seizure","other"],Z=["previous seizures","head trauma","meningitis/ encephalitis","brain structural abnormality","stroke","other"],F=g;F.pop();var I=N;I.pop();var k=y;k.pop(),S.pop(),Z.pop();var P=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],o=n[1],c=(0,s.useState)(null),u=(0,i.Z)(c,2),P=(u[0],u[1],(0,s.useState)(null)),R=(0,i.Z)(P,2),E=R[0],z=R[1],w=(0,s.useState)(null),B=(0,i.Z)(w,2),H=B[0],T=B[1],D=(0,s.useState)(null),O=(0,i.Z)(D,2),A=O[0],U=O[1],X=(0,s.useState)(null),M=(0,i.Z)(X,2),K=M[0],V=M[1],L=(0,s.useState)(null),_=(0,i.Z)(L,2),q=_[0],G=_[1],Y=(0,s.useState)(null),W=(0,i.Z)(Y,2),J=W[0],Q=W[1],$=(0,s.useState)([]),ee=(0,i.Z)($,2),ne=ee[0],te=ee[1],ie=(0,s.useState)(g),se=(0,i.Z)(ie,2),ae=(se[0],se[1]),le=(0,s.useState)(""),re=(0,i.Z)(le,2),oe=re[0],ce=re[1],ue=(0,s.useState)(!1),de=(0,i.Z)(ue,2),he=de[0],pe=de[1],me=(0,s.useState)(!1),fe=(0,i.Z)(me,2),xe=fe[0],ve=fe[1],je=(0,s.useState)(!1),be=(0,i.Z)(je,2),ge=be[0],Ne=be[1],ye=(0,s.useState)(!1),Ce=(0,i.Z)(ye,2),Se=Ce[0],Ze=Ce[1],Fe=(0,s.useState)(!1),Ie=(0,i.Z)(Fe,2),ke=Ie[0],Pe=Ie[1],Re=(0,s.useState)(""),Ee=(0,i.Z)(Re,2),ze=Ee[0],we=Ee[1],Be=(0,s.useState)(""),He=(0,i.Z)(Be,2),Te=He[0],De=He[1],Oe=(0,s.useState)(""),Ae=(0,i.Z)(Oe,2),Ue=Ae[0],Xe=Ae[1],Me=(0,s.useState)([]),Ke=(0,i.Z)(Me,2),Ve=Ke[0],Le=Ke[1],_e=(0,s.useState)([]),qe=(0,i.Z)(_e,2),Ge=qe[0],Ye=qe[1],We=(0,s.useState)(N),Je=(0,i.Z)(We,2),Qe=(Je[0],Je[1]),$e=(0,s.useState)(""),en=(0,i.Z)($e,2),nn=en[0],tn=en[1],sn=(0,s.useState)(!1),an=(0,i.Z)(sn,2),ln=an[0],rn=an[1],on=(0,s.useState)(""),cn=(0,i.Z)(on,2),un=(cn[0],cn[1],(0,s.useState)(!1)),dn=(0,i.Z)(un,2),hn=dn[0],pn=dn[1],mn=(0,s.useState)(""),fn=(0,i.Z)(mn,2),xn=(fn[0],fn[1],(0,s.useState)("")),vn=(0,i.Z)(xn,2),jn=vn[0],bn=vn[1],gn=(0,s.useState)(!1),Nn=(0,i.Z)(gn,2),yn=Nn[0],Cn=Nn[1],Sn=(0,s.useState)(""),Zn=(0,i.Z)(Sn,2),Fn=Zn[0],In=Zn[1],kn=(0,s.useState)([]),Pn=(0,i.Z)(kn,2),Rn=Pn[0],En=Pn[1],zn=(0,s.useState)([]),wn=(0,i.Z)(zn,2),Bn=(wn[0],wn[1],(0,s.useState)([])),Hn=(0,i.Z)(Bn,2),Tn=Hn[0],Dn=Hn[1],On=(0,s.useState)([]),An=(0,i.Z)(On,2),Un=An[0],Xn=An[1],Mn=(0,s.useState)(y),Kn=(0,i.Z)(Mn,2),Vn=(Kn[0],Kn[1]),Ln=(0,s.useState)([]),_n=(0,i.Z)(Ln,2),qn=_n[0],Gn=_n[1],Yn=(0,s.useState)([]),Wn=(0,i.Z)(Yn,2),Jn=Wn[0],Qn=(Wn[1],(0,s.useState)("")),$n=(0,i.Z)(Qn,2),et=$n[0],nt=$n[1],tt=(0,s.useState)([]),it=(0,i.Z)(tt,2),st=it[0],at=it[1],lt=(0,s.useState)(S),rt=(0,i.Z)(lt,2),ot=(rt[0],rt[1]),ct=(0,s.useState)([]),ut=(0,i.Z)(ct,2),dt=ut[0],ht=ut[1],pt=(0,s.useState)(Z),mt=(0,i.Z)(pt,2),ft=(mt[0],mt[1]),xt=(0,s.useState)(C),vt=(0,i.Z)(xt,2),jt=vt[0],bt=vt[1],gt=(0,s.useState)(C),Nt=(0,i.Z)(gt,2),yt=(Nt[0],Nt[1]);return(0,s.useEffect)((function(){bt((function(){return C.filter((function(e){return!Jn.includes(e)}))})),yt((function(){return C.filter((function(e){return!qn.includes(e)}))}))}),[qn,Jn]),(0,s.useEffect)((function(){ae((function(){return F.filter((function(e){return!ne.includes(e)}))}))}),[ne]),(0,s.useEffect)((function(){Qe((function(){return I.filter((function(e){return!Ve.includes(e)}))}))}),[Ve]),(0,s.useEffect)((function(){Vn((function(){return k.filter((function(e){return!Un.includes(e)}))}))}),[Un]),(0,s.useEffect)((function(){ft((function(){return Z.filter((function(e){return!dt.includes(e)}))}))}),[dt]),(0,s.useEffect)((function(){ot((function(){return S.filter((function(e){return!st.includes(e)}))}))}),[st]),(0,f.jsxs)("div",{className:"flex flex-row",children:[(0,f.jsxs)("div",{className:"formgrid grid surface-0 p-3 shadow-2 border-round w-6",children:[(0,f.jsx)("div",{className:"text-3xl font-medium text-900 mb-3",children:"Spell"}),(0,f.jsx)(l.i,{}),(0,f.jsxs)("div",{className:"field m-3 formgroup-inline",children:[(0,f.jsx)("label",{htmlFor:"durId",className:"p-2",children:"Duration since first episode"}),(0,f.jsx)(p.R,{inputId:"durId",value:E,onValueChange:function(e){return z(e.value)},size:1,showButtons:!0,step:1,decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",min:1}),(0,f.jsx)(m.L,{value:K,options:b,onChange:function(e){return V(e.value)},placeholder:"Time Unit"})]}),(0,f.jsxs)("div",{className:"field m-3 formgroup-inline",children:[(0,f.jsx)("label",{htmlFor:"onsetId",className:"p-2",children:"Onset"}),(0,f.jsx)(m.L,{inputId:"onsetId",value:t,options:x,onChange:function(e){return o(e.value)},placeholder:"Onset of episode"})]}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(d,{id:"txtSemi",value:ze,onChange:function(e){return we(e.target.value)},rows:5,cols:30,autoResize:!0}),(0,f.jsx)("label",{htmlFor:"txtSemi",children:"Description of spell"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msPptId",value:ne,options:g,onChange:function(e){return te(e.value)},placeholder:"Precipitants",display:"chip"})}),(0,f.jsx)("div",{hidden:0===ne.length,className:"field m-3",children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpPptId",value:oe,onChange:function(e){return ce(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpPptId",children:"Precipitants Details"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msPremId",value:Tn,options:v,onChange:function(e){return Dn(e.value)},placeholder:"Premonitory symptoms",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbPrev",checked:xe,onChange:function(e){return ve(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbPrev",children:"Previous episodes"})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!xe,children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbSimilar",checked:ge,onChange:function(e){return Ne(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbSimilar",children:"Episodes similar in presentation"})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!xe,children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpPrev",value:et,onChange:function(e){return nt(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpPrev",children:"Previous episodes details"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbMotor",checked:hn,onChange:function(e){return pn(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbMotor",children:"Motor features"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbFocal",checked:Se,onChange:function(e){return Ze(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbFocal",children:"Focal onset"})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!Se,children:(0,f.jsx)(a.N,{id:"msFocLoc",value:Ge,options:j,onChange:function(e){return Ye(e.value)},placeholder:"Site of focal onset",display:"chip"})}),(0,f.jsx)(l.i,{}),(0,f.jsxs)("div",{className:"field m-3 formgroup-inline",children:[(0,f.jsx)("label",{htmlFor:"durId2",className:"p-2",children:"Duration of spell"}),(0,f.jsx)(p.R,{inputId:"durId2",value:H,onValueChange:function(e){return T(e.value)},size:1,showButtons:!0,step:1,decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",min:1}),(0,f.jsx)(m.L,{value:q,options:b,onChange:function(e){return G(e.value)},placeholder:"Time Unit"})]}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msAware",value:Rn,options:j,onChange:function(e){return En(e.value)},placeholder:"Awareness during spell",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msSx",value:Ve,options:N,onChange:function(e){return Le(e.value)},placeholder:"Associated Symptoms",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbAmnesia",checked:ke,onChange:function(e){return Pe(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbAmnesia",children:"Amnestic about episode"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpFreq",value:jn,onChange:function(e){return bn(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpFreq",children:"Frequency of episodes"})]})}),(0,f.jsxs)("div",{className:"field m-3 formgroup-inline",children:[(0,f.jsx)("label",{htmlFor:"durId3",className:"p-2",children:"Time since last episode"}),(0,f.jsx)(p.R,{inputId:"durId3",value:A,onValueChange:function(e){return U(e.value)},size:1,showButtons:!0,step:1,decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",min:1}),(0,f.jsx)(m.L,{value:J,options:b,onChange:function(e){return Q(e.value)},placeholder:"Time Unit"})]}),(0,f.jsx)(l.i,{}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msChildHx",value:st,options:S,onChange:function(e){return at(e.value)},placeholder:"Childhood Risk Factors",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msPmHx",value:dt,options:Z,onChange:function(e){return ht(e.value)},placeholder:"Other Risk Factors",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbFamHx",checked:he,onChange:function(e){return pe(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbFamHx",children:"Family history of similar problems"})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!he,children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpFamHx",value:Te,onChange:function(e){return De(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpFamHx",children:" Family Hx Details"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpEtOH",value:nn,onChange:function(e){return tn(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpEtOH",children:"Alcohol habits "})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbIllicit",checked:ln,onChange:function(e){return rn(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbIllicit",children:"Illicit substances "})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!ln,children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpIllicit",value:Te,onChange:function(e){return De(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpIllicit",children:" Family  Details"})]})}),(0,f.jsx)(l.i,{}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsxs)("div",{className:"field-checkbox",children:[(0,f.jsx)(h.X,{inputId:"cbNeuroCons",checked:yn,onChange:function(e){return Cn(e.checked)}}),(0,f.jsx)("label",{htmlFor:"cbNeuroCons",children:"Previous Neurological Consultation"})]})}),(0,f.jsx)("div",{className:"field m-3",hidden:!yn,children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpNeuroCons",value:Fn,onChange:function(e){return In(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpNeuroCons",children:" Neuro Consult Details"})]})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"msWorkUp",value:Un,options:y,onChange:function(e){return Xn(e.value)},placeholder:"Previous workup",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",children:(0,f.jsx)(a.N,{id:"ppxHA1",value:qn,options:jt,onChange:function(e){return Gn(e.value)},placeholder:"Previous Meds",display:"chip"})}),(0,f.jsx)("div",{className:"field m-3",hidden:0===qn.length,children:(0,f.jsxs)("span",{className:"p-float-label",children:[(0,f.jsx)(r.o,{id:"inpPrevRx",value:Ue,onChange:function(e){return Xe(e.target.value)}}),(0,f.jsx)("label",{htmlFor:"inpPrevRx",children:" Previous Treatment Details"})]})})]}),(0,f.jsx)("div",{className:"surface-0 w-6 card m-3",children:(0,f.jsxs)("div",{className:"surface-0 p-4 shadow-2 border-round ",children:[(0,f.jsx)("div",{className:"text-3xl font-medium text-900 mb-3",children:" Spell "}),(0,f.jsx)("div",{className:"border-1 border-dashed border-300",children:(0,f.jsx)(f.Fragment,{})})]})})]})}}}]);
//# sourceMappingURL=978.cb9f5564.chunk.js.map