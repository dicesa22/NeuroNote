import React, { useState, useEffect, } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const onsetList = ["acute", "subacute", "chronic",];
const locList = ["back", "right buttock","left buttock", "right hip", "left hip", "right leg", "left leg", "other", ];
const locListB = ["back", "right buttock","left buttock", "right hip", "left hip", "right leg", "left leg", "right thigh", "left thigh", "right foot", "left foot", "other",  ];
const xterList = ['numbness', 'burning', 'lancinating pain', 'tingling', 'cramping', 'squeezing', 'hypersensitivity', 'allodynia', 'other',];
const pptList = ["back injury", "lower extremity trauma", "viral infection", "immunization", "other",];
const pptList2 = ["back injury", "lower extremity trauma", "viral infection", "immunization", ];
const temporalPattern = ['improving','progressively worsening','waxing and waning','unchanged'];
const timeUnits = ['seconds','minutes','hours','days','weeks','years'];
const assocList = [ "fever", "weight loss", "morning stiffness", "right arm weakness", "right leg weakness", "left arm weakness", "left leg weakness", "sexual dysfunction", "fecal incontinence", "urinary retention", "urinary incontinence", "saddle anesthesia", "orthostasis", "bloating", "nausea", "early satiety", "diarrhea", "constipation", "alternating diarrhea and constipation", "dry eyes", "dry mouth", "blurred vision", "anhidrosis", "other",];
const assocList2 = assocList;
assocList2.pop();
const exacList = ["standing", "sitting", "lying down", "bending", "stooping", "leg motion", "coughing", "sneezing", "straining at stool", "other",];
const exacList2 = exacList;
exacList2.pop();

const redFlagList = ["intravenous drug use", "steroid use", "cancer",];


const checkNo = (x) => {
	const cNo = x ? '' : 'not';
	return cNo;
}

const checkNull = (x) => {
	const cNo = x ? x : '_____';
	return cNo;
}

function BackLegPain() {
	const [selectedOnset, setSelectedOnset] = useState([]);
	const [durHA1, setDurHA1] = useState(null);
	const [selectedTimeUnit1, setSelectedTimeUnit1] = useState(null);
	const [selectedPptPres, setSelectedPptPres] = useState([]);
	const [selectedPptAbs, setSelectedPptAbs] = useState(pptList);
	const [pptValue, setPptValue] = useState('');	
	const [selectedLocPain, setSelectedLocPain] = useState([]);
	const [locValue, setLocValue] = useState('');
	const [checkedRad, setCheckedRad] = useState(false);
	const [selectedRadPain, setSelectedRadPain] = useState([]);
	const [radValue, setRadValue] = useState('');
	const [sevPain, setSevPain] = useState(null);
	const [selectedXter, setSelectedXter] = useState([]);
	const [xterValue, setXterValue] = useState('');
	const [checkedPrev, setCheckedPrev] = useState(false);
	const [prevValue, setPrevValue] = useState('');
	const [exacValue, setExacValue] = useState('');
	const [allValue, setAllValue] = useState('');
	const [selectedExacPres, setSelectedExacPres] = useState([]);
	const [selectedExacAbs, setSelectedExacAbs] = useState(exacList);
	const [selectedSxPres, setSelectedSxPres] = useState([]);
	const [checkedDiscHx, setCheckedDiscHx] = useState(false);	
	const [discHxValue, setDiscHxValue] = useState('');
	const [backSurgValue, setBackSurgValue] = useState('');
	const [checkedBackSurg, setCheckedBackSurg] = useState(false);
	const [prevRxValue, setPrevRxValue] = useState('');
	const [checkedFamHx, setCheckedFamHx] = useState(false);
	const [famHxValue, setFamHxValue] = useState('');
	const [selectedTemp, setSelectedTemp] = useState([]);
	const [locList1, setLocList1] = useState(locListB);
	const [locList2, setLocList2] = useState(locList);
	const [sxAbsList, setSxAbsList] = useState(assocList);
	const [selectedRedFlagsPres, setSelectedRedFlagsPres] = useState([]);
	const [selectedRedFlagsAbs, setSelectedRedFlagsAbs] = useState(redFlagList);
	
	useEffect(() => {
		setLocList2(() => locList.filter( ( el ) => selectedLocPain !== el  ));
	}, [selectedLocPain]);
	
	useEffect(() => {
		setSelectedPptAbs(() => pptList2.filter( ( el ) => !selectedPptPres.includes( el ) ));
	}, [selectedPptPres]);
	
	useEffect(() => {
		setSxAbsList(() => assocList2.filter( ( el ) => !selectedSxPres.includes( el ) ));
	}, [selectedSxPres]);
	
	useEffect(() => {
		setSelectedExacAbs(() => exacList2.filter( ( el ) => !selectedExacPres.includes( el ) ));
	}, [selectedExacPres]);
	useEffect(() => {
		setSelectedRedFlagsAbs(() => redFlagList.filter( ( el ) => !selectedRedFlagsPres.includes( el ) ));
	}, [selectedRedFlagsPres]);

	
	return (
		<div className="flex flex-row">
			<div className="formgrid grid surface-0 p-3 shadow-2 border-round w-6">
				<div className="text-3xl font-medium text-900 mb-3">Back & Leg Pain</div>
				<Divider/>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="onsetId" className="p-2">Onset</label>
					<Dropdown inputId="onsetId" value={selectedOnset} options={onsetList} onChange={(e) => setSelectedOnset(e.value)} placeholder="Onset" />
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="durId" className="p-2">Duration</label>
					<InputNumber inputId="durId" value={durHA1} onValueChange={(e) => setDurHA1(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} />
					<Dropdown value={selectedTimeUnit1} options={timeUnits} onChange={(e) => setSelectedTimeUnit1(e.value)} placeholder="Time Unit" />
				</div>
				<div className="field m-3" >
					<MultiSelect id="msPptId" value={selectedPptPres} options={pptList} onChange={(e) => setSelectedPptPres(e.value)} placeholder="Precipitants" display="chip"  />
				</div>
				<div hidden={selectedPptPres.length === 0} className="field m-3">
					<span className="p-float-label">
						<InputText id="inpPptId" value={pptValue} onChange={(e) => setPptValue(e.target.value)} />
						<label htmlFor="inpPptId">Precipitants Details</label>
					</span>
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="locId" className="p-2">Worst pain</label>
					<Dropdown inputId="locId" value={selectedLocPain} options={locList1} onChange={(e) => setSelectedLocPain(e.value)} placeholder="Worst Pain" />
				</div>
				<div hidden={selectedLocPain.length === 0} className="field m-3">
					<span className="p-float-label">
						<InputText id="inpLoc" value={locValue} onChange={(e) => setLocValue(e.target.value)} />
						<label htmlFor="inpLoc">Worst pain details</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="radCheck" 
						checked={checkedRad}
						onChange={(e) => setCheckedRad(e.checked)}
						/>
						<label htmlFor="radCheck">Radiates?</label>
					</div>
				</div>
				<div hidden={!checkedRad}>
					<div className="field m-3 formgroup-inline">
						<MultiSelect id="msRad" value={selectedRadPain} options={locList2} onChange={(e) => setSelectedRadPain(e.value)} placeholder="Radiation of pain" display="chip"  />
						<span className="p-float-label">
							<InputText id="inpRad" value={radValue} onChange={(e) => setRadValue(e.target.value)} />
							<label htmlFor="inpRad">Radiation details</label>
						</span>		
					</div>
				</div>
				<div className="field m-3 formgroup-inline">
					<label htmlFor="painSeverity" className="p-2">Severity of Pain</label>
					<InputNumber inputId="painSeverity" value={sevPain} onValueChange={(e) => setSevPain(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} max={10}/>
				</div>
				<div className="field m-3 formgroup-inline">
					<Dropdown inputId="ddProgress" value={selectedTemp} options={temporalPattern} onChange={(e) => setSelectedTemp(e.value)} placeholder="Progression" />
				</div>
				<div className="field m-3">
					<MultiSelect id="Character of pain" value={selectedXter} options={xterList} onChange={(e) => setSelectedXter(e.value)} placeholder="Character of pain" display="chip"  />
				</div>
				<div hidden={selectedXter.length === 0} className="field m-3">
					<span className="p-float-label">
						<InputText id="inpXter" value={xterValue} onChange={(e) => setXterValue(e.target.value)} />
						<label htmlFor="inpXter">Character details</label>
					</span>
				</div>

				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbPrev" 
						checked={checkedPrev}
						onChange={(e) => setCheckedPrev(e.checked)}
						/>
						<label htmlFor="cbPrev">Previous episodes</label>
					</div>				
				</div>
				<div className="field m-3" hidden={!checkedPrev}>
					<span className="p-float-label">
						<InputText id="inpPrev" value={prevValue} onChange={(e) => setPrevValue(e.target.value)} />
						<label htmlFor="inpPrev">Previous episodes details</label>
					</span>
				</div>	
				<Divider/>
				<div className="field m-3 formgroup-inline">
					<MultiSelect id="msExac" value={selectedExacPres} options={exacList} onChange={(e) => setSelectedExacPres(e.value)} placeholder="Exacerbating factors" display="chip"  />
				</div>
				<div hidden={selectedExacPres.length === 0}>
					<div className="field m-3 formgroup-inline">
						<span className="p-float-label">
							<InputText id="inpExac" value={exacValue} onChange={(e) => setExacValue(e.target.value)} />
							<label htmlFor="inpExac">Details of exacerbating factors</label>
						</span>
					</div>
				</div>
				<div className="field m-3">
					<span className="p-float-label">
						<InputText id="inpAll" value={allValue} onChange={(e) => setAllValue(e.target.value)} />
						<label htmlFor="inpAll">Alleviating factors</label>
					</span>
				</div>
				<div className="field m-3">
					<MultiSelect id="msSx" value={selectedSxPres} options={assocList} onChange={(e) => setSelectedSxPres(e.value)} placeholder="Associated Symptoms" display="chip"  />
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbDiscHx" 
						checked={checkedDiscHx}
						onChange={(e) => setCheckedDiscHx(e.checked)}
						/>
						<label htmlFor="cbDiscHx">History of disc herniation</label>
					</div>
				</div>
				<div hidden={!checkedDiscHx} className="field m-3">
					<span className="p-float-label">
						<InputText id="inpDiscHx" value={discHxValue} onChange={(e) => setDiscHxValue(e.target.value)} />
						<label htmlFor="inpDiscHx">Details of disc herniation</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="BackSurgCheck" 
						checked={checkedBackSurg}
						onChange={(e) => setCheckedBackSurg(e.checked)}
						/>
						<label htmlFor="BackSurgCheck">History of Head/Neck Surgery</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedBackSurg}>
					<span className="p-float-label">
						<InputText id="hxBackSurg" value={backSurgValue} onChange={(e) => setBackSurgValue(e.target.value)} />
						<label htmlFor="hxBackSurg"> Surgery Details</label>
					</span>
				</div>
				<div className="field m-3" >
					<span className="p-float-label">
						<InputText id="inpPrevRx" value={prevRxValue} onChange={(e) => setPrevRxValue(e.target.value)} />
						<label htmlFor="inpPrevRx"> Other Previous Treatment</label>
					</span>
				</div>
				<div className="field m-3">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbFamHx" 
						checked={checkedFamHx}
						onChange={(e) => setCheckedFamHx(e.checked)}
						/>
						<label htmlFor="cbFamHx">Family history of similar problem</label>
					</div>
				</div>
				<div className="field m-3" hidden={!checkedFamHx}>
					<span className="p-float-label">
						<InputText id="inpFamHx" value={famHxValue} onChange={(e) => setFamHxValue(e.target.value)} />
						<label htmlFor="inpFamHx"> Family Hx Details</label>
					</span>
				</div>
				<div className="field m-3" >
					<MultiSelect id="msRedFlags" value={selectedRedFlagsPres} options={redFlagList} onChange={(e) => setSelectedRedFlagsPres(e.value)} placeholder="Red Flags" />
				</div>
			</div>
			<div className="surface-0 w-6 card m-3">
				<div className="surface-0 p-4 shadow-2 border-round ">
					<div className="text-3xl font-medium text-900 mb-3">{selectedLocPain.length !== 0 ? "Pain in the " + selectedLocPain : "Back / Leg Pain"}</div>
					<div className="border-1 border-dashed border-300" >
						<>
							<p> Pain was {checkNull(selectedOnset)} in onset and has been present for the past {checkNull(durHA1)} {checkNull(selectedTimeUnit1)}. Identified precipitating factors include {checkNull(selectedPptPres)} -{checkNull(pptValue)}. Patient denied preceding {checkNull(selectedPptAbs.join(', '))}. The worst pain is located at the {checkNull(selectedLocPain)}<span hidden={selectedLocPain.length===0}>  - {checkNull(locValue)}</span>. Pain does {checkNo(checkedRad)} radiate<span hidden={!checkedRad}> to the {checkNull(selectedRadPain)} - {radValue}</span>. The pain is described as {checkNull(selectedXter.join(', '))}{xterValue}. The severity of the pain is {checkNull(sevPain)} on a 10-point scale. Patient does {checkNo(checkedPrev)} report previous episodes of similar pain {prevValue}. Since onset, patient's symptoms have {checkNull(selectedTemp)}. </p> 
							<p> Alleviating factors: {checkNull(allValue)}. <br/> Aggravating factors: {checkNull(selectedExacPres.join(', '))}<span hidden={selectedExacPres.length===0}>  : {exacValue}</span>.<br/>Patient denied exacerbation by {checkNull(selectedExacAbs.join(', '))}. </p> 
							<p> Associated symptoms include {checkNull(selectedSxPres.join(', '))}. <br/>Patient denied {checkNull(sxAbsList.join(', '))}. </p>
							<p>Patient does {checkNo(checkedDiscHx)} endorse a history of disc herniation<span hidden={!checkedDiscHx}> : {discHxValue} </span>. Patient does {checkNo(checkedBackSurg)} report previous back surgery<span hidden={!checkedBackSurg}> : {backSurgValue}</span>. <br/>Patient does {checkNo(prevRxValue)} report previous treatment for this pain<span hidden={!prevRxValue}> : {prevRxValue}</span>. <span hidden={selectedRedFlagsPres.length===0}>Patient endorsed a history of {selectedRedFlagsPres.join(', ')}.</span> Patient denied a history of {selectedRedFlagsAbs.join(', ')}. Patient is {checkNo(famHxValue)} aware of a family history of similar complaints<span hidden={!famHxValue}>  : {famHxValue}</span>.</p> 

						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BackLegPain;
