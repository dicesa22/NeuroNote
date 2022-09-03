import React, { createElement, useState, createContext, useContext } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Chip } from "primereact/chip";
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const xterHAList = ['aching','boring','burning','crushing','dull','numbing','pulsating','sharp','shooting','stabbing','throbbing','tight band','tingling'];
const otherHACauseList = ['alcohol','illicit drugs','tobacco','caffeine', 'nitrates', 'exogenous estrogen', 'nifedipine', 'carbon monoxide exposure' ];
const ppxMeds = ['antidepressants ','beta-blockers ','calcium-channel blockers ','cyproheptadine','lithium carbonate','NSAIDs ','phenelzine','prednisone','riboflavin','topiramate','valproic acid'];
const headacheMeds = ['acetaminophen','NSAIDs ','aspirin/acetaminophen/caffeine','ergotamine tartrate PO','ergotamine tartrate PR','dihydroergotamine intranasal','sumatriptan SQ','sumatriptan PO','sumatriptan intranasal','zolmitriptan','naratriptan','isometheptene/dichlorphenazone/acetaminophen','butalbital/caffeine/aspirin','butalbital/caffeine/acetaminophen','inhaled oxygen','beta-blockers','calcium-channel blockers','opiates'];
const severityList = ['mild','moderate','severe'];
const temporalPattern = ['improving','progressively worsening','waxing and waning','unchanged'];
const timeOfDay = ['on waking','morning','mid-day','afternoon','evening','night'];
const timeUnits = ['seconds','minutes','days','weeks','years'];
const sxsHAList = ['nausea','vomiting','sonophobia','photophobia','scotomata','photopsia','diplopia','hemianopsia','paresthesias','aphasia','mental status changes','decreased social functioning','vertigo','tinnitus','ataxia','neck stiffness','conjunctival injection','lacrimation','nasal congestion','rhinorrhea','facial sweating','ptosis','eyelid edema'];
const pptHAList = ['stress','food','MSG','nitrite-containing food','chocolate','coffee','cheese','others','medications','alcohol','tobacco','odors','caffeine withdrawal','change in sleep pattern','change in eating pattern','sexual activity','coughing','sneezing','laughing','straining at stool','bending over','menses','working in front of CRT screen','work','hobby activity'];

const checkNo = (x) => {
	const cNo = x ? '' : 'not';
	return cNo;
}

function Headache() {
	const [headacheText, setHeadacheText]= useState('');
	const [locHA, setLocHA] = useState('');
	const [radHA, setRadHA] = useState('');
	const [sevPain, setSevPain] = useState(1);
	const [durHA1, setDurHA1] = useState(1);
	const [durHA2, setDurHA2] = useState('');
	const [durHA3, setDurHA3] = useState('');
	const [headTraumaValue, setHeadTraumaValue] = useState('');
	const [headSurgValue, setHeadSurgValue] = useState('');
	const [headFamValue, setHeadFamValue] = useState('');
	const [checkedCurr, setCheckedCurr] = useState(false);
	const [checkedRad, setCheckedRad] = useState(false);
	const [checkedOnset, setCheckedOnset] = useState(false);
	const [checkedAbort, setCheckedAbort] = useState(false);
	const [checkedPpt, setCheckedPpt] = useState(false);
	const [checkedPpx, setCheckedPpx] = useState(false);
	const [checkedProd, setCheckedProd] = useState(false);
	const [checkedAssHA, setCheckedAssHA] = useState(false);
	const [checkedPrev, setCheckedPrev] = useState(false);
	const [checkedWake, setCheckedWake] = useState(false);
	const [checkedSeason, setCheckedSeason] = useState(false);
	const [checkedCluster, setCheckedCluster] = useState(false);
	const [checkedDaily, setCheckedDaily] = useState(false);
	const [checkedHeadTrauma, setCheckedHeadTrauma] = useState(false);
	const [checkedHeadSurg, setCheckedHeadSurg] = useState(false);
	const [checkedHeadFam, setCheckedHeadFam] = useState(false);
	const [checkedOHAC, setCheckedOHAC] = useState(false);
	const [selectedXterHdc, setSelectedXterHdc] = useState([]);
	const [selectedSubs, setSelectedSubs] = useState([]);
	const [selectedPpxMeds, setSelectedPppxMeds] = useState([]);
	const [selectedHdcMeds, setSelectedHdcMeds] = useState([]);
	const [selectedSeverityList, setSelectedSeverityList] = useState([]);
	const [selectedTemp, setSelectedTemp] = useState([]);
	const [selectedTimeDay, setSelectedTimeDay] = useState([]);
	const [selectedTimeUnit1, setSelectedTimeUnit1] = useState([]);
	const [selectedTimeUnit2, setSelectedTimeUnit2] = useState([]);
	const [selectedProdrome, setSelectedProdrome] = useState([]);
	const [selectedSxsHdc, setSelectedSxsHdc] = useState([]);
	const [selectedPptHdc, setSelectedPptHdc] = useState([]);
	const [selectedfxnHdc, setSelectedFxnHdc] = useState([]);
	const [selectedAbortHdc, setSelectedAbortHdc] = useState([]);
	const [selectedOtherHA, setSelectedOtherHACauses] = useState([]);
	
	return (
		<div className="flex flex-row">
			<div className="formgrid grid surface-0 p-3 shadow-2 border-round w-6">
				<div className="text-3xl font-medium text-900 mb-3">Headache</div>
				<Divider/>
				<div className="field m-2"> 
					<div className="field-checkbox">
						<Checkbox
						inputId="currHeadache" 
						checked={checkedCurr}
						onChange={(e) => setCheckedCurr(e.checked)}
						/>
						<label htmlFor="currHead">Current headache</label>
					</div>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="onsetHA" 
						checked={checkedOnset}
						onChange={(e) => setCheckedOnset(e.checked)}
						/>
						<label htmlFor="onsetHA">Sudden Onset</label>
					</div>
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="locHdc" value={locHA} onChange={(e) => setLocHA(e.target.value)} />
						<label htmlFor="locHdc">Location of Headache</label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="radHACheck" 
						checked={checkedRad}
						onChange={(e) => setCheckedRad(e.checked)}
						/>
						<label htmlFor="radHACheck">Radiates?</label>
					</div>
				</div>
				<div hidden={!checkedRad} className="field m-2">
					<span className="p-float-label">
						<InputText id="radHdc" value={radHA} onChange={(e) => setRadHA(e.target.value)} />
						<label htmlFor="radHdc">Radiation of Headache</label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="Character of pain" value={selectedXterHdc} options={xterHAList} onChange={(e) => setSelectedXterHdc(e.value)} placeholder="Character of pain" display="chip" />
				</div>
				<div className="field m-2 formgroup-inline">
					<label htmlFor="painSeverity">Severity of Pain</label>
					<InputNumber inputId="painSeverity" value={sevPain} onValueChange={(e) => setSevPain(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} max={10}/>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="prodHACheck" 
						checked={checkedProd}
						onChange={(e) => setCheckedProd(e.checked)}
						/>
						<label htmlFor="prodHACheck">Prodromal Symptoms</label>
					</div>
				</div>
				<div hidden={!checkedProd} className="field m-2">
					<MultiSelect id="HA Prodrome" value={selectedProdrome} options={sxsHAList} onChange={(e) => setSelectedProdrome(e.value)} placeholder="Prodrome" display="chip" />
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="assHACheck" 
						checked={checkedAssHA}
						onChange={(e) => setCheckedAssHA(e.checked)}
						/>
						<label htmlFor="assHACheck">Associated Symptoms</label>
					</div>
				</div>
				<div hidden={!checkedAssHA} className="field m-2">
					<MultiSelect id="Other HA Symptoms" value={selectedSxsHdc} options={sxsHAList} onChange={(e) => setSelectedSxsHdc(e.value)} placeholder="Associated Symptoms" display="chip" />
				</div>
				<Divider/>
				<div className="field m-2 formgroup-inline">
					<label htmlFor="durHA">Duration of Headache Episodes</label>
					<InputNumber inputId="durHA" value={durHA1} onValueChange={(e) => setDurHA1(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} />
					<Dropdown value={selectedTimeUnit1} options={timeUnits} onChange={(e) => setSelectedTimeUnit1(e.value)} placeholder="Time Unit" />
				</div>
				<Divider/>
				<div className="field  m-2 formgroup-inline">
					<label htmlFor="durHA3Id">Started having headaches when?</label>
					<InputNumber inputId="durHA3Id" value={durHA3} onValueChange={(e) => setDurHA3(e.value)} size={1} showButtons step={1} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1} />
				</div>
				<div className="field m-2">
					<Dropdown value={selectedTimeUnit2} options={timeUnits} onChange={(e) => setSelectedTimeUnit2(e.value)} placeholder="Time Unit" />
				</div>
				<Divider/>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="prevHeadache" 
						checked={checkedPrev}
						onChange={(e) => setCheckedPrev(e.checked)}
						/>
						<label htmlFor="prevHeadache">Similar to previous headaches</label>
					</div>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="pptHACheck" 
						checked={checkedPpt}
						onChange={(e) => setCheckedPpt(e.checked)}
						/>
						<label htmlFor="pptHACheck">Known Precipitant(s)</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedPpt}>
					<MultiSelect id="pptHA" value={selectedPptHdc} options={pptHAList} onChange={(e) => setSelectedPptHdc(e.value)} placeholder="Precipitants" display="chip" />
				</div>
				<div>
					<Dropdown value={selectedTimeDay} options={timeOfDay} onChange={(e) => setSelectedTimeDay(e.value)} placeholder="Worst time of day" />
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="wakeHACheck" 
						checked={checkedWake}
						onChange={(e) => setCheckedWake(e.checked)}
						/>
						<label htmlFor="wakeHACheck">Headache wakes patient from sleep</label>
					</div>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="seasonHACheck" 
						checked={checkedSeason}
						onChange={(e) => setCheckedSeason(e.checked)}
						/>
						<label htmlFor="seasonHACheck">Seasonal pattern</label>
					</div>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="clusterHACheck" 
						checked={checkedCluster}
						onChange={(e) => setCheckedCluster(e.checked)}
						/>
						<label htmlFor="clusterHACheck">‘Clustering’ of headaches over time</label>
					</div>
				</div>
				<div className="field m-2">
					<Dropdown value={selectedTemp} options={temporalPattern} onChange={(e) => setSelectedTemp(e.value)} placeholder="Overall pattern since headaches began" />
				</div>
				<div className="field m-2">
					<Dropdown value={selectedfxnHdc} options={severityList} onChange={(e) => setSelectedFxnHdc(e.value)} placeholder="Degree of Functional Impairment" />
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="abortHACheck" 
						checked={checkedAbort}
						onChange={(e) => setCheckedAbort(e.checked)}
						/>
						<label htmlFor="abortHACheck">Abortive meds used</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedAbort}>
					<MultiSelect id="abortHA" value={selectedAbortHdc} options={headacheMeds} onChange={(e) => setSelectedAbortHdc(e.value)} placeholder="Abortive meds"  />
				</div>
				<div className="field m-2" hidden={!checkedAbort}>
					<div className="field-checkbox">
						<Checkbox
						inputId="dailyHACheck" 
						checked={checkedDaily}
						onChange={(e) => setCheckedDaily(e.checked)}
						/>
						<label htmlFor="dailyHACheck"> Daily use of abortive meds </label>
					</div>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="ppxHACheck" 
						checked={checkedPpx}
						onChange={(e) => setCheckedPpx(e.checked)}
						/>
						<label htmlFor="ppxtHACheck">Prophylactic medications</label>
					</div>
				</div>
				<div hidden={!checkedPpx}>
					<MultiSelect id="ppxHA" value={selectedPpxMeds} options={headacheMeds} onChange={(e) => setSelectedPppxMeds(e.value)} placeholder="Prophylactic Meds" />
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="headTraumaCheck" 
						checked={checkedHeadTrauma}
						onChange={(e) => setCheckedHeadTrauma(e.checked)}
						/>
						<label htmlFor="headTraumaCheck">History of Head/Neck Trauma</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedHeadTrauma}>
					<span className="p-float-label">
						<InputText id="hxHeadTrauma" value={headTraumaValue} onChange={(e) => setHeadTraumaValue(e.target.value)} />
						<label htmlFor="hxHeadTrauma"> Details</label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="headSurgCheck" 
						checked={checkedHeadSurg}
						onChange={(e) => setCheckedHeadSurg(e.checked)}
						/>
						<label htmlFor="headSurgCheck">History of Head/Neck Surgery</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedHeadSurg}>
					<span className="p-float-label">
						<InputText id="hxHeadSurg" value={headSurgValue} onChange={(e) => setHeadSurgValue(e.target.value)} />
						<label htmlFor="hxHeadSurg"> Details</label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="headFamCheck" 
						checked={checkedHeadFam}
						onChange={(e) => setCheckedHeadFam(e.checked)}
						/>
						<label htmlFor="headFamCheck">Family history of headache</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedHeadFam}>
					<span className="p-float-label">
						<InputText id="hxHeadFam" value={headFamValue} onChange={(e) => setHeadFamValue(e.target.value)} />
						<label htmlFor="hxHeadFam"> Details</label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="OtherHACheck" 
						checked={checkedOHAC}
						onChange={(e) => setCheckedOHAC.checked(e)}
						/>
						<label htmlFor="OtherHACheck"> Other Headache Causes</label>
					</div>
				</div>
				<div className="field m-2" hidden={!checkedOHAC}>
					<label htmlFor="otherHACauses"> Other Headache Causes</label>
					<MultiSelect id="otherHACauses" value={selectedOtherHA} options={otherHACauseList} onChange={(e) => setSelectedOtherHACauses(e.value)} placeholder="Other Causes" />
				</div>
			</div>
			<div className="surface-0 w-6 card m-3">
				<div className="surface-0 p-4 shadow-2 border-round ">
					<div className="text-3xl font-medium text-900 mb-3">Headache</div>
					<div className="border-1 border-dashed border-300" >
						<>
							<p>Patient complains of headache. Patient does {checkNo(checkedCurr)} have a headache at this time.</p>

							<h3>Description of Headaches:</h3>
							<p> Headache is {checkNo(checkedOnset)} sudden in onset. Pain is located at the {locHA}. Pain does {checkNo(checkedRad)} radiate<span hidden={!checkedRad}> to the {radHA}</span>. The pain is described as {selectedXterHdc.join(', ')}. The severity of the pain is {sevPain} on a 10-point scale. Patient does {checkNo(checkedAssHA)} have accompanying symptoms<span hidden={!checkedAssHA}> including {selectedSxsHdc.join(', ')}</span>. Patient does {checkNo(checkedProd)} have prodromal symptoms<span hidden={!checkedProd}> including {selectedProdrome.join(', ')}</span>. Individual headaches typically last for {durHA1} {selectedTimeUnit1}. Most headaches are {checkNo(checkedPrev)} similar in presentation. Headaches do {checkNo(checkedPpt)} have precipitating factors<span hidden={!checkedPpt}> including {selectedPptHdc.join(', ')}</span>. </p>
							<h3>Temporal Pattern of Headaches</h3>
							<p>Patient started having headaches {durHA3} {selectedTimeUnit2} ago. The worst time of day for headache is {selectedTimeDay}. Headache does {checkNo(checkedWake)} awaken patient from sleep. Headaches do {checkNo(checkedSeason)} have a seasonal pattern. Headaches do {checkNo(checkedCluster)} 'cluster’ over time. The overall pattern of headaches since problem began is {selectedTemp}</p>
							<p>Degree of Functional Impairment: {selectedfxnHdc} </p>

							<h3> Current use of medications to treat headache:</h3>
							<p>Patient does {checkNo(checkedAbort)} use abortive medications<span hidden={!checkedAbort}> which include {selectedAbortHdc.join(', ')}. Patient does {checkNo(checkedDaily)} use abortive medications daily</span>. Patient does {checkNo(checkedPpx)} use prophylactic medications<span hidden={!checkedPpx}> including {selectedPpxMeds.join(', ')}</span></p>

							<h3>Additional Relevant History:</h3>
							<p>Patient does {checkNo(checkedHeadTrauma)} report a history of head/neck trauma<span hidden={!checkedHeadTrauma}>, namely {headTraumaValue} </span>. Patient does {checkNo(checkedHeadSurg)} report a history of head/neck surgery<span hidden={!checkedHeadSurg}>, namely {headSurgValue}</span>. Patient is {checkNo(checkedHeadFam)} aware of a family history of headache problems<span hidden={!checkedHeadTrauma}>, namely {headFamValue}</span>. Patient does {checkNo(checkedOHAC)} endorse other factors that might worsen headaches<span hidden={!checkedOHAC}>, including {selectedOtherHA.join(', ')}</span>. </p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Headache;
