import React, {Component} from 'react';
import '../Symptoms/Symptoms.css';

class Symptoms extends Component {
    render() {
        let symptomArray = [];    
        this.props.pregnancydetails.map(item => symptomArray = item.symptoms)

        let symptoms = symptomArray.map(symptom => {
            return (
                <div className='individualSymptom' key={symptom.symptomid}>
                    <img src={symptom.symptomimage} alt={symptom.symptom} height='150px' width='150px'/>
                    <p className='symptom'>{symptom.symptom}</p>
                    <p>{symptom.description}</p>
                   
                </div>
            )
        }) 
        return (
            <div className='symptomsContainer'>
                <h2 className='symptomName'>Common Symptoms</h2>
                {symptoms}
            </div>
        )
    }
}

export default Symptoms;
