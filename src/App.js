import "./App.css";
import React, { createElement, useState, createContext, useContext, lazy, Suspense  } from "react";
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

function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}



const Headache = lazyWithPreload(() => import('./Headache'));
const Dementia = lazyWithPreload(() => import('./Dementia'));
const compList = {
	"Headache": Headache,
	"Dementia" : Dementia,
};


const items = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  { label: "Edit", icon: "pi pi-fw pi-pencil" },
  { label: "Documentation", icon: "pi pi-fw pi-file" },
  { label: "Settings", icon: "pi pi-fw pi-cog" },
];


function App() {
 	const [value2, setValue2] = useState([]);
 	const [value3, setValue3] = useState([]);
 	const [value4, setValue4] = useState([]);
 	
	const SelectButtonDemo = () => {
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
	  const sxOptions = [
	    { name: "Headache", value: "Headache" },
	    { name: "Dementia", value: "Dementia" },
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
	    { name: "Mul/tiple Sclerosis", value: 11 },
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

	const compArray = value3.map((i) => {
		const x = compList[i];
		return x;
		}
	)
	return (
		
		<>
			<TabMenu model={items} />
			<Divider />
			<SelectButtonDemo />
			<React.Suspense fallback={<div>Loading...</div>}>
				<div className="surface-0 flex-column p-3">
					{
						compArray.map((Comp1) => (
							<>
								<div className="surface-0 flex-row w-12 border-round">
									<Comp1 />
								</div>	
								<Divider />
							</>
							)
						)
					}
				</div>
			</React.Suspense>
		</>

	);
}

export default App;

