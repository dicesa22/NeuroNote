import "./App.css";
import Headache from './Headache';
import React, { createElement, useState, createContext, useContext } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { SelectButton } from "primereact/selectbutton";

const UserContext = createContext();

const checkNo = (x) => {
	const cNo = x ? ' ' : ' no/not ';
  	return cNo;
}


const items = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  { label: "Edit", icon: "pi pi-fw pi-pencil" },
  { label: "Documentation", icon: "pi pi-fw pi-file" },
  { label: "Settings", icon: "pi pi-fw pi-cog" },
];

const SelectButtonDemo = () => {
  const [value2, setValue2] = useState(null);
  const issueOptions = [
    { name: "By Symptom", value: 1 },
    { name: "By Diagnosis", value: 2 },
  ];
  const checkNull = (x) => {
  	const myAns = value2 ? value2.includes(x) : false;
  	const invAns = !myAns;
  	return invAns;
  }
  return (
    <div>
      <div className="card">
        <h5>Multiple Selection</h5>
        <SelectButton
          value={value2}
          options={issueOptions}
          onChange={(e) => setValue2(e.value)}
          optionLabel="name"
          multiple
        />
      </div>
      <Divider />
      <div hidden={checkNull(1)}>
        <SelectButtonSx classname="grid" />
        <p />
        <Divider />
      </div>
      <div  hidden={checkNull(2)}>
        <SelectButtonDx classname="grid" />
        <p />
        <Divider />
      </div>
    </div>
  );
};

const SelectButtonSx = () => {
  const [value3, setValue3] = useState(null);
  const sxOptions = [
    { name: "Headache", value: 1 },
    { name: "Neck / Arm Pain", value: 2 },
    { name: "Spell", value: 3 },
    { name: "Back / Leg Pain", value: 4 },
    { name: "Dizziness", value: 5 },
    { name: "Hand Numbness", value: 6 },
    { name: "Foot Numbness", value: 7 },
    { name: "Memory Loss", value: 8 },
    { name: "Tremor", value: 9 },
    { name: "Visual Loss", value: 10 },
    { name: "Limb Weakness", value: 11 },
    { name: "Dysarthria", value: 12 },
    { name: "Unsteady Gait", value: 13 },
  ];
  return (
    <div>
      <div className="card">
        <h5>Symptom List (multiple selection allowed) </h5>
        <SelectButton
          value={value3}
          options={sxOptions}
          onChange={(e) => setValue3(e.value)}
          optionLabel="name"
          multiple
        />
      </div>
    </div>
  );
};

const SelectButtonDx = () => {
  const [value4, setValue4] = useState(null);
  const dxOptions = [
    { name: "Tension-type headache", value: 1 },
    { name: "Migraine", value: 2 },
    { name: "Stroke", value: 3 },
    { name: "Seizure disorder", value: 4 },
    { name: "Peripheral vertigo", value: 5 },
    { name: "Central vertigo", value: 6 },
    { name: "Dementia", value: 7 },
    { name: "Parkinson disease", value: 8 },
    { name: "Cervical radiculopathy", value: 9 },
    { name: "Lumbosacral radiculopathy", value: 10 },
    { name: "Multiple Sclerosis", value: 11 },
    { name: "Encephalopathy", value: 12 },
    { name: "Optic Neuritis", value: 13 },
  ];
  return (
    <div>
      <div className="card">
        <h5> Diagnosis List (multiple selection allowed) </h5>
        <SelectButton
          value={value4}
          options={dxOptions}
          onChange={(e) => setValue4(e.value)}
          optionLabel="name"
          multiple
        />
      </div>
    </div>
  );
};

function App() {
	return (
		<div className="surface-0 flex-column p-3">
			<TabMenu model={items} />
			<Divider />
			<SelectButtonDemo />
			<div className="surface-0 flex-row w-12 border-round">
				<Headache />
			</div>
		</div>
	);
}

export default App;

