import React, { useState, createContext, useContext } from "react";
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

const informantList = ["Family","Patient"]
const alzSympList = ["changes in short-term memory","changes in long-term memory","difficulty recalling words","repetitive questions","day/night behavior changes","disorientation outside familiar environments"];
const alzBehavList = ["paranoia","suspiciousness","hallucinations","delusions","agitation"];
const memProbList= ["medication errors","wandering","driving","cooking","preparing meals"];
const otherSxList = ["Difficulty with the senses of taste","Difficulty with the senses of smell ","Difficulty with balance","Difficulty with walking ","Difficulty with bladder control"];
const depressionList = ["change in appetite","change in weight","change in psychomotor activity","change in sleep","depressed mood","loss of energy","loss of interests/pleasure","thoughts about death or suicide","thoughts of worthlessness or guilt","trouble concentrating "];
const pmhADList = ["depression", "Parkinsonism", "recent head trauma", "stroke","peripheral arterial disease","coronary heart disease","thyroid disease","anemia","low vitamin B12","STD"];
const acdList = ["ambulation","bathing and hygiene","feeding","continence","grooming","toileting","dressing", "finances","housekeeping","reading","shopping","telephoning","travel outside home","writing"];
const fhADList = ["dementia","Alzheimer's disease"]
const adProgressList = ["getting better", "staying the same", "getting worse"]

const checkNo = (x) => {
	const cNo = x ? '' : 'not';
	return cNo;
}

function Dementia () {
	const [durADValue, setDurADValue] = useState('');
	const [escortValue, setEscortValue] = useState('');
	const [carerValue, setCarerValue] = useState('');
	const [resideValue, setResideValue] = useState('');
	const [medADValue, setMedADValue] = useState('');
	const [forgotADValue, setForgotADValue] = useState('');
	const [otherMedsValue, setOtherMedsValue] = useState('');
	const [etohValue, setEtohValue] = useState('');
	const [checkedCbOnset, setCheckedCbOnset] = useState(false);
	const [checkedCbChkBk, setCheckedCbChkBk] = useState(false);
	const [checkedCbLost, setCheckedCbLost] = useState(false);
	const [checkedCbHA, setCheckedCbHA] = useState(false);
	const [selectedAlzSymp, setSelectedAlzSymp] = useState([]);
	const [selectedAlzBehavPres, setSelectedAlzBehavPres] = useState([]);
	const [selectedAlzBehavAbs, setSelectedAlzBehavAbs] = useState([]);
	const [selectedMemProbPres, setSelectedMemProbPres] = useState([]);
	const [selectedMemProbAbs, setSelectedMemProbAbs] = useState([]);
	const [selectedAdProgress, setSelectedAdProgress] = useState('');
	const [selectedOtherSx, setSelectedOtherSx] = useState([]);
	const [selectedDepressionSx, setSelectedDepressionSx] = useState([]);
	const [selectedPMHAD, setSelectedPMHAD] = useState([]);
	const [selectedFhAD, setSelectedFhAD] = useState([]);
	const [selectedAcdPres, setSelectedAcdPres] = useState([]);
	const [selectedAcdAbs, setSelectedAcdAbs] = useState([]);
	const [selectedInformant, setSelectedInformant] = useState([]);
	
	return (
		<div className="flex flex-row">
			<div className="formgrid grid surface-0 p-3 shadow-2 border-round w-6">
				<div className="text-3xl font-medium text-900 mb-3">Memory Loss</div>
				<Divider/>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpEscortValue" value={escortValue} onChange={(e) => setEscortValue(e.target.value)} />
						<label htmlFor="inpEscortValue">Accompanied by?</label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="msInformant" value={selectedInformant} options={informantList} onChange={(e) => setSelectedInformant(e.value)} placeholder="Informant" display="chip" />
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpCarer" value={carerValue} onChange={(e) => setCarerValue(e.target.value)} />
						<label htmlFor="inpCarer">Primary caregiver</label>
					</span>
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpReside" value={resideValue} onChange={(e) => setResideValue(e.target.value)} />
						<label htmlFor="inpReside">Patient resides with/in</label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbOnset" 
						checked={checkedCbOnset}
						onChange={(e) => setCheckedCbOnset(e.checked)}
						/>
						<label htmlFor="cbOnset">Sudden Onset</label>
					</div>
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpDurAd" value={durADValue} onChange={(e) => setDurADValue(e.target.value)} />
						<label htmlFor="inpDurAd">Duration of symptoms</label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="msAlzSymp" value={selectedAlzSymp} options={alzSympList} onChange={(e) => setSelectedAlzSymp(e.value)} placeholder="Main symptoms" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msMemProb" value={selectedMemProbPres} options={memProbList} onChange={(e) => setSelectedMemProbPres(e.value)} placeholder="Endorsed Memory Problems" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msMemProbAbs" value={selectedMemProbAbs} options={memProbList} onChange={(e) => setSelectedMemProbAbs(e.value)} placeholder="Denied Memory Problems" display="chip" />
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpForgot" value={forgotADValue} onChange={(e) => setForgotADValue(e.target.value)} />
						<label htmlFor="inpMedAd">Examples of things forgotten</label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="msAlzBehav" value={selectedAlzBehavPres} options={alzBehavList} onChange={(e) => setSelectedAlzBehavPres(e.value)} placeholder="Endorsed Behavior Problems" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msAlzBehavAbs" value={selectedAlzBehavAbs} options={alzBehavList} onChange={(e) => setSelectedAlzBehavAbs(e.value)} placeholder="Denied Behavior Problems" display="chip" />
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbLost" 
						checked={checkedCbLost}
						onChange={(e) => setCheckedCbLost(e.checked)}
						/>
						<label htmlFor="cbLost">Tendency to get lost</label>
					</div>
				</div>
				<div className="field m-2">
					<Dropdown value={selectedAdProgress} options={adProgressList} onChange={(e) => setSelectedAdProgress(e.value)} placeholder="Progression" />
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpMedAd" value={medADValue} onChange={(e) => setMedADValue(e.target.value)} />
						<label htmlFor="inpMedAd">Who administers patient's meds? </label>
					</span>
				</div>
				<div className="field m-2">
					<div className="field-checkbox">
						<Checkbox
						inputId="cbChkBk" 
						checked={checkedCbChkBk}
						onChange={(e) => setCheckedCbChkBk(e.checked)}
						/>
						<label htmlFor="cbChkBk">Controls checkbook</label>
					</div>
				</div>
				<div className="field m-2">
					<MultiSelect id="msDepressionSx" value={selectedDepressionSx} options={depressionList} onChange={(e) => setSelectedDepressionSx(e.value)} placeholder="Depression symptoms" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msOtherSx" value={selectedOtherSx} options={otherSxList} onChange={(e) => setSelectedOtherSx(e.value)} placeholder="Other symptoms" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msPMHAD" value={selectedPMHAD} options={pmhADList} onChange={(e) => setSelectedPMHAD(e.value)} placeholder="Past Medical History" display="chip" />
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpOtherMeds" value={otherMedsValue} onChange={(e) => setOtherMedsValue(e.target.value)} />
						<label htmlFor="inpOtherMeds">Medications including OTCs? </label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="msFamHx" value={selectedFhAD} options={fhADList} onChange={(e) => setSelectedFhAD(e.value)} placeholder="Family history" display="chip" />
				</div>
				<div className="field m-2">
					<span className="p-float-label">
						<InputText id="inpEtOH" value={etohValue} onChange={(e) => setEtohValue(e.target.value)} />
						<label htmlFor="inpEtOH">Alcohol habits </label>
					</span>
				</div>
				<div className="field m-2">
					<MultiSelect id="msAcdPres" value={selectedAcdPres} options={acdList} onChange={(e) => setSelectedAcdPres(e.value)} placeholder="Independent in" display="chip" />
				</div>
				<div className="field m-2">
					<MultiSelect id="msAcdAbs" value={selectedAcdAbs} options={acdList} onChange={(e) => setSelectedAcdAbs(e.value)} placeholder="Needs help with" display="chip" />
				</div>
			</div>
			<div className="surface-0 w-6 card m-3">
				<div className="surface-0 p-4 shadow-2 border-round ">
					<div className="text-3xl font-medium text-900 mb-3">Memory Loss</div>
					<div className="border-1 border-dashed border-300" >
						<>
							<p> Patient was accompanied by {escortValue}. History was provided by {selectedInformant}. Primary caregiver is {carerValue}. Patient resides in/with {resideValue}. . Memory loss was {checkedCbOnset} sudden in onset. 
							Duration of the problem: {durADValue}. The {selectedInformant} identified problems with {selectedAlzSymp}. The {selectedInformant} reported concerns about {selectedMemProbPres}. However, {selectedInformant} did not observe {selectedMemProbAbs}. Examples of what is forgotten include {forgotADValue}. The {selectedInformant} reported problems with {selectedAlzBehavPres}. The {selectedInformant} denied problems with {selectedAlzBehavAbs}. Patient does {checkedCbLost} have a tendency to get lost. Patient's problem are reportedly {selectedAdProgress}. regarding medication administration, {medADValue}. Patient does {checkedCbChkBk} still control the checkbook. 
							Patient does {checkedCbHA} report headache. Depressive symptoms endorsed include {selectedDepressionSx}. Other complaints include {selectedOtherSx}. </p>

							<p>Past medical history was notable for {selectedFhAD}. Medication history was notable for {otherMedsValue}. Family history was notable for {selectedFhAD}
							Drinking habits: {etohValue} </p>

							<h3>Functional Assessment: </h3>
							<p>Activities of Daily Living (ADLs): </p> 
							<p>Patient is <strong>independent</strong> in the following: {selectedAcdPres}</p>
							<p>Patient <strong>requires assistance with </strong>the following: {selectedAcdAbs} </p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dementia;
